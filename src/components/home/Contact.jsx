"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-[#01203f] py-16 md:py-20 overflow-hidden">
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#b61416]/15 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#b61416]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative max-w-4xl mx-auto px-4 md:px-8 text-center"
      >
        <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl leading-snug">
          Need an Ambulance Right Now?
        </h2>
        <p className="font-body text-white/70 text-base md:text-lg mt-4 max-w-xl mx-auto">
          Thank You for Contacting Delhi Largest  Ambulance Network   saurabh Ambulance Service Delhi! All Types of Ambulance ICU Life Support Ambulance , Normal Ambulance , Outside Ambulance  Available Here 24×7
.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <a
            href="tel:+911800123456"
            className="flex items-center gap-2 bg-[#b61416] text-white font-heading font-semibold text-base px-8 py-3.5 rounded-full hover:bg-[#8f0f11] transition-colors shadow-lg"
          >
            <Phone size={18} className="fill-white" strokeWidth={0} />
            Call +91 9996453141
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2 border-2 border-white text-white font-heading font-semibold text-base px-8 py-3.5 rounded-full hover:bg-white hover:text-[#01203f] transition-colors"
          >
            <MessageCircle size={18} />
            Request Callback
          </a>
        </div>
      </motion.div>
    </section>
  );
}
