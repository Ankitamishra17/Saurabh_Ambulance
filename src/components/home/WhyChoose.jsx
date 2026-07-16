"use client";

import { motion } from "framer-motion";
import { Zap, BadgeCheck, Wallet, MapPinned } from "lucide-react";
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "Rapid Response",
    desc: "Average dispatch time under 15 minutes across Delhi NCR, powered by GPS-tracked routing.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Paramedics",
    desc: "Every vehicle is staffed with trained, certified medical professionals equipped to handle emergencies.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "No hidden charges — clear, upfront pricing communicated before every dispatch.",
  },
  {
    icon: MapPinned,
    title: "Wide Coverage",
    desc: "Serving Delhi, Noida, Ghaziabad, Greater Noida, and surrounding NCR regions round the clock.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] bg-[#01203f] aspect-[4/5] max-w-md mx-auto overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#b61416]/25 via-transparent to-transparent" />
            <div className="relative rounded-[2rem] aspect-[4/5] max-w-md mx-auto overflow-hidden shadow-xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1723708841860-5b00cc402a62?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Saurabh Ambulance Service"
                fill
                className="object-cover"
                priority
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#01203f]/90 via-[#01203f]/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="font-heading font-extrabold text-white text-6xl">
                  24/7
                </span>

                <p className="text-white text-xl font-semibold mt-2">
                  Emergency Ambulance Service
                </p>

                <p className="text-white/80 text-sm mt-2 leading-relaxed">
                  ICU Life Support, Normal Ambulance & Outstation Ambulance
                  Available Across Delhi NCR.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-5 right-5 bg-[#b61416] text-white px-4 py-2 rounded-full text-sm font-semibold">
                15 Min Response
              </div>
            </div>
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-6 -right-2 sm:right-4 bg-white rounded-2xl shadow-2xl px-6 py-4 border border-gray-100"
          >
            <p className="font-heading font-extrabold text-[#b61416] text-2xl">
              10,000+
            </p>
            <p className="font-body text-xs text-gray-600">
              Patients Safely Transported
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Features */}
        <div>
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            Why Choose Us
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3 mb-8">
            Reliability You Can Count On, In Any Emergency
          </h2>

          <div className="space-y-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#b61416]/10">
                  <Icon size={20} className="text-[#b61416]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#01203f] text-base">
                    {title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
