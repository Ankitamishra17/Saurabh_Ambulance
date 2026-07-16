"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Replace with a real photo of your office/dispatch center once available.
const BG_IMAGE = "https://picsum.photos/seed/saurabh-contact-hero/1920/1080";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#01203f]/85" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#b61416]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#b61416]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
        >
          Get In Touch
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl mt-6 leading-tight"
        >
          We're One Call Away
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-white/80 text-base md:text-lg mt-4 max-w-xl mx-auto"
        >
          Reach out for emergencies, bookings, or general enquiries — our team
          is available 24/7 across Delhi NCR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-7 font-body text-sm text-white/70"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-white font-medium">Contact</span>
        </motion.div>
      </div>
    </section>
  );
}
