import React from "react";
import {
  MessageSquare,
  PhoneCall,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function FinalCta3D() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#08080B] text-white overflow-hidden">
      {/* Warm Golden Ambient Glows (Zero Blue Tint) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[260px] bg-gradient-to-r from-yellow-500/10 via-amber-400/15 to-yellow-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact, Single-Frame Glowing Onyx & Gold Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#16140E] via-[#1C180F] to-[#14120D] border border-yellow-400/40 p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_35px_rgba(250,204,21,0.08)] overflow-hidden">
          
          {/* Top golden hairline accent */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            {/* Left: Punchy, Minimal Text */}
            <div className="text-center lg:text-left space-y-2.5 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Open • Limited Batch Seats</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Don&apos;t Wait For The{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Future
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Limited seats per batch. Check availability on WhatsApp.
              </p>

              {/* 3 Micro Trust Signals */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] text-zinc-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                  Free 2-Day Practical Demo
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                  ISO 9001:2015 Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                  100% Placement Support
                </span>
              </div>
            </div>

            {/* Right: Direct Action Buttons (Stacked / Side-by-side) */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://wa.me/918058061222?text=Hi%20Third%20Eye%20Classes!%20I%20want%20to%20check%20batch%20seat%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-yellow-400 text-black text-xs sm:text-sm font-black hover:bg-yellow-300 transition-all duration-200 shadow-lg shadow-yellow-400/25 active:scale-95 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Check Availability on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+918058061222"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#1F1C15] border border-yellow-400/30 text-white text-xs sm:text-sm font-bold hover:bg-[#2A251B] hover:border-yellow-400/60 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-yellow-400" />
                <span>Call Center: +91 80580 61222</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
