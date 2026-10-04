import React from "react";
import { useSound } from "../context/SoundContext";
import { Volume2, VolumeX } from "lucide-react";

/**
 * SoundToggle
 * Minimalist, elegant sound icon button for the Navbar.
 * Only the sound icon — click to toggle ambient sound on/off with smooth fading.
 */
export default function SoundToggle({ className = "" }) {
  const { isPlaying, isMuted, toggleSound } = useSound();

  const isSoundActive = !isMuted; // Strictly ON by default

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-label={isSoundActive ? "Mute background audio" : "Play background audio"}
      title={isSoundActive ? "Mute ambient music" : "Play ambient music"}
      className={`relative inline-flex items-center justify-center p-2 sm:p-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d96b] ${
        isSoundActive
          ? "text-[#f6d96b] bg-[#f6d96b]/15 border border-[#f6d96b]/35 shadow-[0_0_14px_rgba(246,217,107,0.25)]"
          : "text-zinc-400 hover:text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10"
      } ${className}`}
    >
      {isSoundActive ? (
        <Volume2 className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isPlaying ? "animate-pulse" : ""}`} />
      ) : (
        <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
      )}
    </button>
  );
}
