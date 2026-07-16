"use client";

import { motion } from "framer-motion";
import { HeartPulse, Truck, Building2, Users, Cross, CalendarClock, Check } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Advanced Life Support (ALS)",
    desc: "Our ALS ambulances are built for critical, life-threatening emergencies where every second counts.",
    features: ["Ventilator & defibrillator onboard", "Cardiac monitoring equipment", "Critical care paramedic team"],
  },
  {
    icon: Truck,
    title: "Basic Life Support (BLS)",
    desc: "Safe, monitored transport for stable patients who still require medical supervision during transit.",
    features: ["Oxygen support & first aid", "Trained attendant onboard", "Ideal for routine transfers"],
  },
  {
    icon: Building2,
    title: "Hospital-to-Hospital Transfers",
    desc: "Coordinated transfers between hospitals with proper handover protocols at pickup and drop.",
    features: ["Direct coordination with hospital staff", "Medical records handled securely", "Priority routing available"],
  },
  {
    icon: Users,
    title: "Scheduled Patient Transport",
    desc: "Comfortable, reliable transport for dialysis visits, physiotherapy, and routine checkups.",
    features: ["Recurring bookings supported", "Wheelchair-accessible vehicles", "On-time pickup guarantee"],
  },
  {
    icon: Cross,
    title: "Mortuary Van Service",
    desc: "A respectful, dignified transport service provided with sensitivity during difficult moments.",
    features: ["Discreet, dignified handling", "Available 24/7", "Compassionate support staff"],
  },
  {
    icon: CalendarClock,
    title: "Event Standby Ambulance",
    desc: "On-site ambulance and paramedic standby for weddings, corporate events, and public gatherings.",
    features: ["Pre-event site assessment", "Certified paramedic on standby", "Flexible duration booking"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            What We Offer
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3">
            A Service For Every Situation
          </h2>
        </motion.div>

        <div className="space-y-6">
          {services.map(({ icon: Icon, title, desc, features }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`flex flex-col md:flex-row gap-7 items-start md:items-center p-7 md:p-9 rounded-2xl border border-gray-100 hover:border-[#b61416]/30 hover:shadow-lg transition-all duration-300 ${
                i % 2 === 1 ? "md:flex-row-reverse bg-gray-50" : "bg-white"
              }`}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#01203f]">
                <Icon size={28} className="text-white" strokeWidth={1.8} />
              </div>

              <div className="flex-1">
                <h3 className="font-heading font-bold text-[#01203f] text-xl">
                  {title}
                </h3>
                <p className="font-body text-gray-600 text-sm mt-2 leading-relaxed max-w-2xl">
                  {desc}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 font-body text-sm text-gray-700"
                    >
                      <Check size={14} className="text-[#b61416] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}