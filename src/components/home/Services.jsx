"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Truck,
  Building2,
  Users,
  Cross,
  CalendarClock,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "ICU Life Support Ambulance",
    desc: "Fully equipped ICU ambulances with ventilator, cardiac monitor, oxygen support, infusion pumps, and trained paramedics for critical patients.",
  },
  {
    icon: Truck,
    title: "Normal Ambulance",
    desc: "Safe and comfortable ambulance service for routine hospital visits, patient discharge, dialysis, and non-emergency transportation.",
  },
  {
    icon: Building2,
    title: "Outstation Ambulance",
    desc: "24×7 long-distance ambulance service available across Delhi NCR and all major cities in India with experienced medical staff.",
  },
  {
    icon: Users,
    title: "Patient Transfer Service",
    desc: "Professional inter-hospital transfers with continuous monitoring and medical assistance throughout the journey.",
  },
  {
    icon: Cross,
    title: "Dead Body Mortuary Van",
    desc: "Respectful and dignified mortuary van services for local and outstation transportation.",
  },
  {
    icon: CalendarClock,
    title: "Event Medical Support",
    desc: "Ambulance and paramedic standby services for weddings, sports events, corporate gatherings, and public functions.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            Our Services
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3">
            All Types of Ambulance Services Available 24×7
          </h2>
          <p className="font-body text-gray-600 mt-4">
            ICU Life Support Ambulance, Normal Ambulance, Outstation Ambulance,
            Patient Transfer, Mortuary Van, and Event Ambulance Services
            available 24 hours a day across Delhi NCR.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#b61416]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#01203f] group-hover:bg-[#b61416] transition-colors duration-300">
                <Icon size={24} className="text-white" strokeWidth={1.8} />
              </div>
              <h3 className="font-heading font-bold text-[#01203f] text-lg mt-5">
                {title}
              </h3>
              <p className="font-body text-gray-600 text-sm mt-2.5 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
