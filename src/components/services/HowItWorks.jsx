"use client";

import { motion } from "framer-motion";
import { PhoneCall, Radio, UserCheck, Ambulance } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Call Our Helpline",
    desc: "Reach our 24/7 emergency line and share your location and situation with our team.",
  },
  {
    icon: Radio,
    title: "Instant Dispatch",
    desc: "The nearest available ambulance is dispatched immediately through GPS-based routing.",
  },
  {
    icon: UserCheck,
    title: "Paramedic Assessment",
    desc: "Our trained paramedics assess the patient and begin necessary care right at the scene.",
  },
  {
    icon: Ambulance,
    title: "Safe Transport",
    desc: "The patient is transported swiftly and safely to the hospital of choice, fully monitored.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            How It Works
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3">
            From Call To Care In Minutes
          </h2>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gray-200" />

          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#01203f] shadow-md">
                <Icon size={26} className="text-white" strokeWidth={1.8} />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#b61416] text-white font-heading font-bold text-xs">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-[#01203f] text-base mt-5">
                {title}
              </h3>
              <p className="font-body text-gray-600 text-sm mt-2 leading-relaxed max-w-[220px] mx-auto">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}