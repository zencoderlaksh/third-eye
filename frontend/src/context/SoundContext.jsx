import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import userBackgroundMusic from "../assets/audio/ambient_music_theme.mp3";

const SoundContext = createContext();

export function SoundProvider({ children }) {
  // Sound is ALWAYS strictly ON by default
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35); // Pleasant ambient volume

  const audioRef = useRef(null);
  const isMutedRef = useRef(false);
  const isPlayingRef = useRef(false);
  const volumeRef = useRef(0.35);

  // Synchronize refs
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    volumeRef.current = volume;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Synchronous play helper (must be called synchronously inside user gestures for browser activation token)
  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio || isMutedRef.current) return Promise.resolve(false);

    audio.volume = volumeRef.current;
    return audio
      .play()
      .then(() => {
        isPlayingRef.current = true;
        setIsPlaying(true);
        return true;
      })
      .catch((err) => {
        // Browser autoplay policy rejected unmuted play without previous gesture
        return false;
      });
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    isPlayingRef.current = false;
    setIsPlaying(false);
  };

  // Initialize Audio & Autoplay
  useEffect(() => {
    // Clear any previous stale muted flags so default is strictly sound ON
    try {
      localStorage.removeItem("thirdeye_sound_enabled");
    } catch {}

    const audio = new Audio(userBackgroundMusic);
    audio.loop = true;
    audio.volume = volumeRef.current;
    audio.preload = "auto";
    audioRef.current = audio;

    // Track audio state via native events
    const onPlay = () => {
      isPlayingRef.current = true;
      setIsPlaying(true);
    };
    const onPause = () => {
      isPlayingRef.current = false;
      setIsPlaying(false);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    // 1. Immediately attempt autoplay with unmuted sound ON
    playAudio().then((succeeded) => {
      if (succeeded) return;

      // 2. If browser requires user interaction first, attach capture listeners.
      // ONLY legitimate user activation gestures: pointerdown, mousedown, touchstart, touchend, click, keydown.
      // (NEVER scroll or wheel, which browsers reject for media playback)
      const gestureEvents = ["pointerdown", "mousedown", "touchstart", "touchend", "click", "keydown"];

      const handleUserGesture = () => {
        if (isMutedRef.current) return;
        playAudio().then((success) => {
          if (success) {
            // ONLY remove listeners once playback is verified and actively running
            removeGestureListeners();
          }
        });
      };

      const removeGestureListeners = () => {
        gestureEvents.forEach((evt) => {
          window.removeEventListener(evt, handleUserGesture, true);
          document.removeEventListener(evt, handleUserGesture, true);
        });
      };

      gestureEvents.forEach((evt) => {
        window.addEventListener(evt, handleUserGesture, { capture: true, passive: true });
        document.addEventListener(evt, handleUserGesture, { capture: true, passive: true });
      });
    });

    return () => {
      if (audio) {
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPause);
        audio.pause();
      }
      audioRef.current = null;
    };
  }, []);

  // Toggle sound On / Off
  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && !isMuted) {
      // Audio is actively playing audible sound -> user explicitly requests mute
      pauseAudio();
      setIsMuted(true);
      isMutedRef.current = true;
    } else {
      // Audio is paused or muted -> user explicitly requests sound ON
      setIsMuted(false);
      isMutedRef.current = false;
      playAudio();
    }
  };

  const changeVolume = (newVol) => {
    const clamped = Math.max(0, Math.min(1, newVol));
    setVolume(clamped);
    volumeRef.current = clamped;
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  };

  return (
    <SoundContext.Provider
      value={{
        isPlaying: isPlaying && !isMuted,
        isMuted,
        volume,
        toggleSound,
        changeVolume,
        playAudio,
        startAudioWithFade: playAudio, // Compatibility alias
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
