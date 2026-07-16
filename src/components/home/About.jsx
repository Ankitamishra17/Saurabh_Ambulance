"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock3, Ambulance, HeartPulse, Users } from "lucide-react";

const stats = [
  { value: "8+", label: "Years of Service", Icon: Clock3 },
  { value: "25+", label: "Ambulances in Fleet", Icon: Ambulance },
  { value: "10K+", label: "Lives Assisted", Icon: HeartPulse },
  { value: "15 Min", label: "Avg. Response Time", Icon: Users },
];

export default function About() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            About Saurabh Ambulance
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3 mb-5">
            Dedicated to Saving Lives Across Delhi NCR
          </h2>
          <p className="font-body text-gray-600 leading-relaxed mb-4">
            Saurabh Ambulance was founded with a single mission — to make
            emergency medical transport fast, reliable, and accessible to every
            family in Delhi NCR. What started as a small fleet has grown into a
            trusted network of fully equipped ambulances and trained paramedics.
          </p>
          <p className="font-body text-gray-600 leading-relaxed">
            Every vehicle in our fleet is maintained to the highest medical
            standards, and every team member is trained to act calmly and
            competently when it matters most. We understand that in an
            emergency, every second matters — and we're built around that
            urgency.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">
            {stats.map(({ value, label, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center sm:text-left border-t-2 border-[#b61416]/20 pt-3"
              >
                <Icon
                  size={16}
                  className="text-[#b61416] mb-1.5 mx-auto sm:mx-0"
                />
                <p className="font-heading font-extrabold text-[#01203f] text-2xl md:text-3xl">
                  {value}
                </p>
                <p className="font-body text-xs md:text-sm text-gray-600 mt-1">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-lg mx-auto w-full"
        >
          <div className="relative rounded-[2rem] bg-[#01203f] aspect-[4/3] overflow-hidden shadow-xl">
            <Image
              src="/about-ambulance.jpg"
              alt="Saurabh Ambulance paramedic team on duty"
              fill
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01203f] via-[#01203f]/40 to-[#01203f]/10" />

            {/* Live ECG monitor strip */}
            <div className="absolute top-0 left-0 right-0 h-14 overflow-hidden bg-[#01203f]/70 backdrop-blur-sm border-b border-white/10">
              <div className="flex items-center gap-1.5 absolute left-3 top-1/2 -translate-y-1/2 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b61416] animate-pulse" />
                <span className="font-heading text-[10px] -mb-12 text-white/70 tracking-widest uppercase">
                  Live monitor
                </span>
              </div>
              <motion.svg
                viewBox="0 0 600 56"
                className="h-full w-[200%] "
                preserveAspectRatio="none"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <polyline
                  points="0,28 60,28 80,28 95,8 110,48 125,28 145,28 300,28 360,28 380,28 395,8 410,48 425,28 445,28 600,28"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>

            {/* Glass quote card */}
            <div className="absolute bottom-2 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5">
              <p className="font-heading font-extrabold text-white text-xl md:text-2xl leading-snug">
                "Compassion. Speed. Precision."
              </p>
              <p className="font-body text-white/60 text-xs mt-2.5 tracking-wide uppercase">
                The Saurabh Ambulance Promise
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
