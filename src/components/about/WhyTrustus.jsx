"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, HeartHandshake, Timer, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Timer,
    title: "Consistent Fast Response",
    desc: "Years of optimized dispatch routing mean help reaches you when it matters most.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Licensed",
    desc: "Fully licensed operations with regularly inspected, sanitized, and maintained vehicles.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Staff",
    desc: "Every paramedic is trained not just in medical care, but in how to support anxious families.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "Thousands of successful transports across Delhi NCR, with consistent 5-star feedback.",
  },
];

export default function WhyTrustUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".trust-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#b61416]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left intro column */}
          <div className="lg:col-span-4">
            <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
              Why Trust Us
            </span>
            <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3 leading-tight">
              Why Families Choose Saurabh Ambulance
            </h2>
            <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-sm">
              Every dispatch is backed by trained paramedics, verified
              vehicles, and a team that treats every family like their own.
            </p>
          </div>

          {/* Right reasons list */}
          <div className="lg:col-span-8 flex flex-col">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`trust-item flex items-start gap-5 py-6 ${
                  i !== reasons.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#01203f]/5 flex-shrink-0">
                  <Icon size={20} className="text-[#01203f]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#01203f] text-base md:text-lg">
                    {title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm mt-1.5 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}