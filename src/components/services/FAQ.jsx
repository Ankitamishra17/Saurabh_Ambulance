"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can an ambulance reach my location?",
    a: "Our average response time across Delhi NCR is under 15 minutes, thanks to GPS-optimized dispatch and a wide distribution of ambulances across the region.",
  },
  {
    q: "Do you provide ambulances for scheduled, non-emergency transport?",
    a: "Yes. We offer scheduled patient transport for dialysis visits, physiotherapy sessions, hospital discharges, and routine checkups, with recurring booking options available.",
  },
  {
    q: "Are your paramedics certified?",
    a: "Every ambulance is staffed with certified paramedics trained in both critical care and basic life support, ensuring appropriate care regardless of the situation.",
  },
  {
    q: "What is included in an ALS ambulance?",
    a: "Our ALS ambulances come equipped with ventilators, defibrillators, cardiac monitors, and a critical care paramedic team trained to handle life-threatening emergencies.",
  },
  {
    q: "Can I book an ambulance for standby at an event?",
    a: "Yes, we offer event standby ambulance services for weddings, corporate events, and public gatherings, complete with a pre-event site assessment and certified paramedic on-site.",
  },
  {
    q: "What areas do you cover across Delhi NCR?",
    a: "We operate across Delhi, Noida, Greater Noida, Ghaziabad, Gurugram, and Faridabad, with ambulances stationed at multiple points to keep response times low everywhere.",
  },
];

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`bg-white rounded-2xl border overflow-hidden transition-colors duration-200 ${
        isOpen ? "border-[#b61416]/30" : "border-gray-100"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-heading font-semibold text-[#01203f] text-[15px]">
          {item.q}
        </span>
        <span
          className={`flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 transition-colors duration-300 ${
            isOpen ? "bg-[#b61416]" : "bg-gray-100"
          }`}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180 text-white" : "text-[#01203f]"
            }`}
          />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-body text-gray-600 text-sm leading-relaxed px-5 pb-5">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const leftColumn = faqs.slice(0, 3);
  const rightColumn = faqs.slice(3, 6);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            FAQs
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3">
            Common Questions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <div className="space-y-4">
            {leftColumn.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
          <div className="space-y-4">
            {rightColumn.map((item, i) => {
              const globalIndex = i + 3;
              return (
                <FAQItem
                  key={item.q}
                  item={item}
                  index={globalIndex}
                  isOpen={openIndex === globalIndex}
                  onToggle={() =>
                    setOpenIndex(openIndex === globalIndex ? -1 : globalIndex)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
