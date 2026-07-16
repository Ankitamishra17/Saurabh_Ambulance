"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 9996453141", "+91 8755696315"],
    href: "tel:+919996453141",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@saurabhambulance.in", "support@saurabhambulance.in"],
    href: "mailto:help@saurabhambulance.in",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Sector-3,Dwarka, Near Akash Hospital,New Delhi"],
   href:["https://maps.google.com/?q=Aakash+Healthcare+Super+Speciality+Hospital+Dwarka+Sector+3+New+Delhi"],
  },
  {
    icon: Clock3,
    title: "Working Hours",
    lines: ["Emergency: 24/7"],
    href: null,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map(({ icon: Icon, title, lines, href }, i) => {
            const CardTag = href ? "a" : "div";
            return (
              <motion.div key={title}>
                <CardTag
                  {...(href ? { href } : {})}
                  className="block h-full bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-[#b61416]/30 hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <div className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-[#01203f]">
                      <Icon
                        size={22}
                        className="text-white"
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-[#01203f] text-base mt-5">
                      {title}
                    </h3>
                    {lines.map((line) => (
                      <p
                        key={line}
                        className="font-body text-gray-600 text-sm mt-1"
                      >
                        {line}
                      </p>
                    ))}
                  </motion.div>
                </CardTag>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
