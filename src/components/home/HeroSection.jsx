"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Clock3, Stethoscope } from "lucide-react";


const trustPoints = [
  { icon: Clock3, label: "24/7 Availability" },
  { icon: Stethoscope, label: "Trained Paramedics" },
  { icon: ShieldCheck, label: "ICU Equipped Fleet" },
];

// Replace this with a real photo of your ambulance/fleet once available.
const BG_IMAGE =
  "https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with slow Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#01203f]/95 via-[#01203f]/85 to-[#01203f]/60" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#b61416]/15 blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-[380px] h-[380px] rounded-full bg-[#b61416]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto -mt-16 px-4 md:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 bg-white/10 text-[#b61416] font-heading text-nowrap text-[10px] md:text-sm px-4 py-1.5 rounded-full tracking-wide uppercase backdrop-blur-sm">
            Delhi NCR's Trusted Emergency Response
          </span>

          <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] mt-5">
            Every Second Counts.
            <br />
            <span className="text-[#b61416]">Saurabh Ambulance</span> Is Already
            On The Way.
          </h1>

          <p className="font-body text-white/80 text-base md:text-lg mt-5 max-w-xl leading-relaxed">
            Fully equipped ambulances, trained paramedics, and rapid dispatch
            across Delhi NCR — available around the clock for emergencies,
            hospital transfers, and scheduled patient transport.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="tel:+918755696315"
              className="flex items-center gap-2 bg-[#b61416] text-white font-heading font-semibold text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-[#8f0f11] transition-colors shadow-md hover:shadow-lg"
            >
              <Phone size={18} className="fill-white" strokeWidth={0} />
              Call Emergency Line
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 border-2 border-white text-white font-heading font-semibold text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-white hover:text-[#01203f] transition-colors"
            >
              Book Ambulance
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/15">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                  <Icon size={17} className="text-white" />
                </div>
                <span className="font-body text-sm font-medium text-white/85">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: ECG Pulse visual (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-[#01203f]/90 backdrop-blur-md border border-white/10 overflow-hidden shadow-2xl">
            {/* Radial glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b61416]/20 via-transparent to-transparent" />

            {/* ECG line */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <motion.path
                d="M0 200 L90 200 L110 140 L135 260 L155 100 L175 300 L195 200 L400 200"
                fill="none"
                stroke="#b61416"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.6,
                  },
                  opacity: { duration: 0.3 },
                }}
              />
            </svg>

            {/* Pulsing dot */}
            <motion.div
              className="absolute top-[35%] left-[34%] w-3 h-3 rounded-full bg-[#b61416]"
              animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Center label */}
            <div className="absolute bottom-8  left-0 right-0 text-center">
              <p className="font-heading font-bold text-white text-lg tracking-wide">
                RESPONSE TIME
              </p>
              <p className="font-heading font-extrabold text-[#b61416] text-4xl mt-1">
                &lt; 15 MIN
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
