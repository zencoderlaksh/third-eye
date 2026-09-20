import React from "react";
import { Sparkles } from "lucide-react";

export default function DomainTicker() {
  const domains = [
    "Full Stack Web Development",
    "Python & Generative AI",
    "Graphic & Brand Design",
    "Data Analytics & Science",
    "Tally Prime & GST Accounting",
    "Digital Marketing & SEO",
    "UI/UX Interface Design",
    "Cyber Security & Networking",
    "Video Editing & Motion Graphics",
    "ADCA / DCA Govt. Diplomas",
    "Jewellery & 3D CAD Design",
    "C++ & Data Structures",
  ];

  return (
    <div className="relative py-4 bg-[#0A0C13] border-y border-[#1C1F2E] overflow-hidden select-none">
      {/* Edge gradient masks for seamless fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#07080D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#07080D] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling row */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...domains, ...domains].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300 hover:text-yellow-400 transition-colors cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
