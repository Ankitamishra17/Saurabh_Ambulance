"use client";

import { Phone, Mail, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#01203f] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between">
        {/* Left: Contact info */}
        <div className="flex items-center gap-4 md:gap-6 font-body">
          <a
            href="tel:+91 8755696315"
            className="flex items-center gap-1.5 hover:text-[#f2a0a0] transition-colors"
          >
            <Phone
              size={14}
              className="text-[#b61416] fill-[#b61416]"
              strokeWidth={2}
            />
            <span className="hidden sm:inline">+91  8755696315</span>
            <span className="sm:hidden font-semibold">Call Now</span>
          </a>

          <a
            href="mailto:help@saurabhambulance.in"
            className="hidden md:flex items-center gap-1.5 hover:text-[#f2a0a0] transition-colors"
          >
            <Mail size={14} />
            <span>info@saurabhambulance.in</span>
          </a>
        </div>

        {/* Right: 24/7 badge */}
        <div className="flex items-center gap-1.5 font-semibold tracking-wide">
          <Clock size={14} className="text-[#b61416]" />
          <span className="text-xs md:text-sm">24/7 EMERGENCY SERVICE</span>
        </div>
      </div>
    </div>
  );
}
