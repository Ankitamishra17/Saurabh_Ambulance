"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Wind,
  BedDouble,
  Siren as SirenIcon,
  Thermometer,
  Package,
} from "lucide-react";

const equipment = [
  { icon: Activity, label: "Cardiac Monitors" },
  { icon: Wind, label: "Oxygen & Ventilator Support" },
  { icon: BedDouble, label: "Adjustable Stretchers" },
  { icon: SirenIcon, label: "GPS & Emergency Signaling" },
  { icon: Thermometer, label: "Climate-Controlled Cabin" },
  { icon: Package, label: "Fully Stocked First-Aid Kits" },
];

export default function FleetEquipment() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] bg-[#01203f] aspect-[4/3] max-w-lg mx-auto overflow-hidden shadow-xl flex items-center justify-center order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#b61416]/20 via-transparent to-transparent" />
          <div className="relative text-center px-8">
            <p className="font-heading font-extrabold text-white text-2xl md:text-3xl leading-snug">
              Every Vehicle,
              <br />
              Hospital-Grade Ready
            </p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            Our Fleet
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3 mb-8">
            Equipped For Every Emergency
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {equipment.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-[#b61416]/10">
                  <Icon size={19} className="text-[#b61416]" />
                </div>
                <span className="font-body font-medium text-sm text-[#01203f]">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
