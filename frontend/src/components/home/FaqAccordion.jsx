import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircleQuestion,
  PhoneCall,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need prior coding experience or a technical degree to enroll?",
      answer:
        "No prior coding or technical background is needed! Our courses start from absolute ground zero. Whether you are from Arts, Commerce, Science, or a working professional switching careers, our 1-on-1 practical mentors guide you step-by-step from fundamental computer architecture up to advanced enterprise engineering.",
      category: "Admissions & Eligibility",
    },
    {
      question: "Can I attend a Free Demo Class before paying admission fees?",
      answer:
        "Yes, absolutely! We offer a 2-day 100% Free Practical Demo Class across all our 10 Jaipur campuses. You will sit at an assigned computer lab workstation, experience our teaching style, review the full syllabus, and interact directly with your mentor before making any financial commitment.",
      category: "Demo & Trial",
    },
    {
      question: "Do you provide guaranteed job placement support and interview prep?",
      answer:
        "Yes. Our dedicated Placement Cell conducts weekly resume reviews, GitHub portfolio polishing, technical mock interviews, and HR soft-skill workshops. We have active placement partnerships with 150+ IT companies, digital agencies, and financial firms across Jaipur, NCR, and Bangalore.",
      category: "Placements",
    },
    {
      question: "What are the batch timings? Are weekend or flexible slots available?",
      answer:
        "Our labs are operational from 8:00 AM to 8:00 PM Monday through Saturday. We offer morning slots (8 AM – 12 PM), afternoon regular batches (12 PM – 4 PM), evening working-professional batches (4 PM – 8 PM), as well as dedicated Saturday-Sunday intensive weekend batches.",
      category: "Schedules",
    },
    {
      question: "Are Third Eye certificates recognized by government and MNC recruiters?",
      answer:
        "Yes! Third Eye Computer Classes is an ISO-certified, government-registered training institute. Our course completion credentials include verifiable digital QR certificate IDs that HR recruiters and background check agencies can verify online anytime.",
      category: "Certification",
    },
    {
      question: "Is fee installment / EMI available for diploma & professional courses?",
      answer:
        "Yes, we provide flexible 0% interest monthly installment plans for all our 6-month and 1-year diploma programs, making quality tech education completely affordable for every student and family.",
      category: "Fees & Payment",
    },
    {
      question: "What happens if I miss a class due to exams or illness?",
      answer:
        "You never lose a single lecture! With our flexible lab credit system, you can book a compensatory 1-on-1 doubt session or attend the missed module in a parallel batch at any of our 10 Jaipur centers at no extra charge.",
      category: "Lab Policy",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#090A0F] text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-400/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Everything you need to know about our practical courses, demo classes, batch timings, and placement process.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#131522] border-yellow-400/60 shadow-[0_4px_25px_rgba(250,204,21,0.08)]"
                    : "bg-[#0F111A] border-[#1C1F2E] hover:border-zinc-700 hover:bg-[#121420]"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                        isOpen ? "bg-yellow-400 shadow-[0_0_10px_#facc15]" : "bg-zinc-600"
                      }`}
                    />
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isOpen ? "text-yellow-400" : "text-zinc-200 hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-yellow-400 text-black rotate-180"
                        : "bg-zinc-800/80 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/50 mt-1 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-yellow-400/80 bg-yellow-400/10 px-2.5 py-1 rounded-md border border-yellow-400/20">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions footer card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#12141F] to-[#171A28] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0 border border-yellow-400/20">
              <MessageCircleQuestion className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have a question not listed here?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Our head academic advisors in Jaipur are available daily 8:00 AM – 8:00 PM.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+918058061222"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 text-black text-xs font-extrabold hover:bg-yellow-300 transition-all shadow-md shadow-yellow-400/20 active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 80580 61222</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
