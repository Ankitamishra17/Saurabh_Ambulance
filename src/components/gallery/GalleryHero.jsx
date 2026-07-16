"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Camera, Video, Ambulance } from "lucide-react";

// Replace with a real photo of your fleet/team once available.
const BG_IMAGE = "/banner1.webp";

const stats = [
  { icon: Camera, label: "Photos" },
  { icon: Video, label: "Videos" },
  { icon: Ambulance, label: "Fleet in Action" },
];

export default function GalleryHero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#01203f]/85" />
      <div className="absolute -top-20 -right-20 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#b61416]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-[#b61416]/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-2 mt-4 sm:mt-7 font-body text-xs sm:text-sm text-white/70"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-white font-medium">Gallery</span>
        </motion.div>

        {/* Eyebrow tag */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block font-heading font-semibold text-[11px] sm:text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase bg-white/10 px-3.5 sm:px-4 py-1.5 rounded-full backdrop-blur-sm mt-6"
        >
          Our Gallery
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 sm:mt-6 leading-tight"
        >
          A Glimpse Into Our Work
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-white/80 text-base md:text-lg mt-4 max-w-xl mx-auto px-2 sm:px-0"
        >
          Our fleet, our team, and our commitment to fast, compassionate
          emergency care — in pictures and video.
        </motion.p>

        {/* Supporting stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8"
        >
          {stats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
            >
              <Icon size={16} className="text-[#b61416]" />
              <span className="font-body text-xs sm:text-sm text-white/80">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
