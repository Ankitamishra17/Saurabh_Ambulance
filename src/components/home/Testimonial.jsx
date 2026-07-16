"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Siren, Repeat, CalendarClock } from "lucide-react";

const testimonials = [
  {
    name: "Ritika Sharma",
    location: "Noida",
    type: "Emergency Response",
    Icon: Siren,
    quote:
      "The ambulance arrived within minutes of our call. The paramedics were calm, professional, and truly cared about my father's condition throughout the ride to the hospital.",
    rating: 5,
    responseTime: "8 min",
  },
  {
    name: "Ankit Verma",
    location: "Greater Noida",
    type: "Scheduled Transfer",
    Icon: Repeat,
    quote:
      "We booked a non-emergency transfer for my grandmother's dialysis visits. Punctual every single time, and the staff always made her feel comfortable.",
    rating: 5,
    responseTime: "On time",
  },
  {
    name: "Priya Malhotra",
    location: "Ghaziabad",
    type: "Event Standby",
    Icon: CalendarClock,
    quote:
      "Booked an ambulance on standby for a family event. The team was professional, discreet, and gave us complete peace of mind throughout the day.",
    rating: 5,
    responseTime: "Full day",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-[#f7f5f2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-4"
        >
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            Call Log
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3">
            Trusted By Families Across New Delhi
          </h2>
        </motion.div>

        {/* ECG divider */}
        <div className="w-full max-w-xs mx-auto mb-12 md:mb-16 opacity-70">
          <svg
            viewBox="0 0 300 40"
            className="w-full h-8"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,20 70,20 85,4 100,36 115,20 300,20"
              fill="none"
              stroke="#b61416"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Featured quote panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative bg-[#01203f] rounded-2xl px-6 py-8 sm:px-10 sm:py-10 overflow-hidden min-h-[320px] sm:min-h-[280px]"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#b61416]/10 blur-2xl pointer-events-none" />
            <Quote size={34} className="text-[#b61416]/40 mb-4" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-body text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                  "{current.quote}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-heading font-bold text-white text-base">
                      {current.name}
                    </p>
                    <p className="font-body text-xs text-white/50">
                      {current.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: current.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        className="text-[#b61416] fill-[#b61416]"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dispatch ticket selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {testimonials.map((t, i) => {
              const isActive = i === active;
              const { Icon } = t;
              return (
                <motion.button
                  key={t.name}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`text-left rounded-xl px-5 py-4 border transition-colors duration-200 ${
                    isActive
                      ? "bg-white border-[#b61416]/30 shadow-sm"
                      : "bg-white/60 border-gray-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 ${
                          isActive
                            ? "bg-[#b61416] text-white"
                            : "bg-[#01203f]/5 text-[#01203f]"
                        }`}
                      >
                        <Icon size={13} />
                      </span>
                      <span
                        className={`font-heading font-semibold text-[11px] tracking-wide uppercase ${
                          isActive ? "text-[#b61416]" : "text-gray-400"
                        }`}
                      >
                        {t.type}
                      </span>
                    </div>
                    <span className="font-body text-[11px] text-gray-400">
                      {t.responseTime}
                    </span>
                  </div>
                  <p className="font-heading font-bold text-[#01203f] text-sm">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-gray-500">
                    {t.location}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
