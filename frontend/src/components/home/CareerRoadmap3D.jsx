import React, { useState } from "react";
import {
  Compass,
  Code2,
  FolderGit2,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CareerRoadmap3D() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Foundations & Core Logic",
      duration: "Month 1",
      subtitle: "Zero to Structured Thinking",
      description:
        "Learn the architecture of software, design systems, and financial logic from scratch. No prior coding or computer background needed.",
      takeaways: [
        "Environment & IDE setup",
        "Algorithmic thinking & fundamentals",
        "Live mentor onboarding",
      ],
    },
    {
      number: "02",
      icon: Code2,
      title: "100% Practical Lab Sprints",
      duration: "Month 2 - 3",
      subtitle: "Hands-on Code & Campaigns",
      description:
        "Spend 80% of class time in the computer lab writing code, running real ad campaigns, creating vector illustrations, and reconciling ledgers.",
      takeaways: [
        "Real-time bug troubleshooting",
        "Daily coding assignments",
        "Dedicated lab mentor access",
      ],
    },
    {
      number: "03",
      icon: FolderGit2,
      title: "Industry Capstone Projects",
      duration: "Month 4",
      subtitle: "Build Your Production Portfolio",
      description:
        "Collaborate on real client projects. Deploy live React web applications, execute high-converting digital ad funnels, and prepare balance sheets.",
      takeaways: [
        "Live GitHub repositories",
        "Production-ready design mockups",
        "Client presentation feedback",
      ],
    },
    {
      number: "04",
      icon: Award,
      title: "Certification & Online Verification",
      duration: "Month 5",
      subtitle: "Govt. Recognized Credentials",
      description:
        "Pass your standardized skill examinations to receive ISO 9001:2015 certified diplomas verifiable online via unique roll numbers.",
      takeaways: [
        "Instant online QR / Roll No. verification",
        "Nationally recognized credential",
        "Resume-ready technical badge",
      ],
    },
    {
      number: "05",
      icon: Briefcase,
      title: "Placement Drives & Hiring",
      duration: "Month 6",
      subtitle: "Launch Your High-Paying Career",
      description:
        "Our placement cell optimizes your LinkedIn and resume, conducts mock technical rounds, and schedules direct interviews with top employers.",
      takeaways: [
        "1-on-1 mock HR & technical rounds",
        "Access to 150+ hiring partner pool",
        "Salary negotiation assistance",
      ],
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#090A0F] border-t border-[#1C1F2E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Success Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Your 5-Step Journey to a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
              Dream Tech Job
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3">
            Here is the exact battle-tested roadmap taken by 10,000+ Third Eye graduates to transform into hired professionals.
          </p>
        </div>

        {/* Step Navigation Cards (Desktop / Laptop View) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 focus:outline-none relative ${
                  isSelected
                    ? "bg-[#141624] border-yellow-400 shadow-lg shadow-yellow-400/20 -translate-y-2"
                    : "bg-[#0D0F18] border-[#1F2232] hover:border-yellow-400/40 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-yellow-400 text-black shadow-md shadow-yellow-400/30"
                        : "bg-[#181B28] text-yellow-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-black tracking-widest ${
                      isSelected ? "text-yellow-400" : "text-zinc-600"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  {step.duration}
                </div>
                <div
                  className={`text-sm font-extrabold transition-colors leading-snug ${
                    isSelected ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Stage */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F111A] border border-[#222535] relative overflow-hidden shadow-2xl shadow-black/80">
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/[0.05] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-3">
                <span>Phase {steps[activeStep].number}</span>
                <span>•</span>
                <span>{steps[activeStep].subtitle}</span>
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-4">
                {steps[activeStep].title}
              </h3>
              
              <p className="text-base text-zinc-300 leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {steps[activeStep].takeaways.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#151824] border border-[#222535] text-xs font-semibold text-zinc-200 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action CTA inside stage */}
            <div className="lg:col-span-4 lg:border-l lg:border-zinc-800 lg:pl-8 text-center lg:text-left">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Join Next Upcoming Batch
              </div>
              <div className="text-lg font-extrabold text-white mb-4">
                Ready to take Step {steps[activeStep].number}?
              </div>
              <a
                href="https://wa.me/918058061222?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20admissions%20roadmap"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20"
              >
                <span>Speak to Admissions Counselor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
