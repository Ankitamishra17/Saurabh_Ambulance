// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   HeartPulse,
//   Truck,
//   Building2,
//   Users,
//   Cross,
//   CalendarClock,
// } from "lucide-react";

// // 👉 ADD YOUR IMAGE LINKS HERE. Put each photo in /public (e.g. /public/services/icu.jpg)
// // and set `image: "/services/icu.jpg"`. Leave `image: null` to keep the icon-only card.
// const services = [
//   {
//     icon: HeartPulse,
//     title: "ICU Life Support Ambulance",
//     desc: "Fully equipped ICU ambulances with ventilator, cardiac monitor, oxygen support, infusion pumps, and trained paramedics for critical patients.",
//     image: null,
//   },
//   {
//     icon: Truck,
//     title: "Normal Ambulance",
//     desc: "Safe and comfortable ambulance service for routine hospital visits, patient discharge, dialysis, and non-emergency transportation.",
//     image: null,
//   },
//   {
//     icon: Building2,
//     title: "Outstation Ambulance",
//     desc: "24×7 long-distance ambulance service available across Delhi NCR and all major cities in India with experienced medical staff.",
//     image: null,
//   },
//   {
//     icon: Users,
//     title: "Patient Transfer Service",
//     desc: "Professional inter-hospital transfers with continuous monitoring and medical assistance throughout the journey.",
//     image: null,
//   },
//   {
//     icon: Cross,
//     title: "Dead Body Mortuary Van",
//     desc: "Respectful and dignified mortuary van services for local and outstation transportation.",
//     image: null,
//   },
//   {
//     icon: CalendarClock,
//     title: "Event Medical Support",
//     desc: "Ambulance and paramedic standby services for weddings, sports events, corporate gatherings, and public functions.",
//     image: null,
//   },
// ];

// export default function Services() {
//   return (
//     <section className="bg-gray-50 py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-2xl mx-auto mb-14"
//         >
//           <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
//             Our Services
//           </span>
//           <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3">
//             All Types of Ambulance Services Available 24×7
//           </h2>
//           <p className="font-body text-gray-600 mt-4">
//             ICU Life Support Ambulance, Normal Ambulance, Outstation Ambulance,
//             Patient Transfer, Mortuary Van, and Event Ambulance Services
//             available 24 hours a day across Delhi NCR.
//           </p>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
//           {services.map(({ icon: Icon, title, desc, image }, i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               className="group bg-white rounded-2xl overflow-hidden border-l-4 border-r-4 border-y border-[#b61416]/60 md:border-gray-100 md:hover:border-[#b61416]/70 shadow-sm hover:shadow-xl transition-all duration-300"
//             >
//               {/* Image / icon banner */}
//               <div className="relative aspect-[16/10] bg-[#01203f] overflow-hidden">
//                 {image && (
//                   <Image
//                     src={image}
//                     alt={title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 400px"
//                     className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
//                   />
//                 )}
//                 {!image && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <Icon size={44} className="text-white/20" strokeWidth={1.2} />
//                   </div>
//                 )}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#01203f]/70 via-transparent to-transparent" />

//                 {/* Icon badge overlapping the image */}
//                 <div className="absolute -bottom-6 left-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#b61416] shadow-lg group-hover:scale-105 transition-transform duration-300">
//                   <Icon size={24} className="text-white" strokeWidth={1.8} />
//                 </div>
//               </div>

//               <div className="p-6 pt-9">
//                 <h3 className="font-heading font-bold text-[#01203f] text-lg">
//                   {title}
//                 </h3>
//                 <p className="font-body text-gray-600 text-sm mt-2.5 leading-relaxed">
//                   {desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Truck,
  Building2,
  Users,
  Cross,
  CalendarClock,
} from "lucide-react";

// 👉 ADD YOUR IMAGE LINKS HERE. Put each photo in /public (e.g. /public/services/icu.jpg)
// and set `image: "/services/icu.jpg"`. Leave `image: null` to keep the icon-only card.
const services = [
  {
    icon: HeartPulse,
    title: "ICU Life Support Ambulance",
    desc: "Fully equipped ICU ambulances with ventilator, cardiac monitor, oxygen support, infusion pumps, and trained paramedics for critical patients.",
    image: "/urgentcare6.jpeg",
  },
  {
    icon: Truck,
    title: "Normal Ambulance",
    desc: "Safe and comfortable ambulance service for routine hospital visits, patient discharge, dialysis, and non-emergency transportation.",
    image: "/urgentcare10.jpeg",
  },
  {
    icon: Building2,
    title: "Outstation Ambulance",
    desc: "24×7 long-distance ambulance service available across Delhi NCR and all major cities in India with experienced medical staff.",
    image: "/urgentcare7.jpeg",
  },
  {
    icon: Users,
    title: "Patient Transfer Service",
    desc: "Professional inter-hospital transfers with continuous monitoring and medical assistance throughout the journey.",
    image: "/urgentcare8.jpeg",
  },
  {
    icon: Cross,
    title: "Dead Body Mortuary Van",
    desc: "Respectful and dignified mortuary van services for local and outstation transportation.",
    image: "/urgentcare2.jpeg",
  },
  {
    icon: CalendarClock,
    title: "Event Medical Support",
    desc: "Ambulance and paramedic standby services for weddings, sports events, corporate gatherings, and public functions.",
    image: "/urgentcare1.jpeg",
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

        {/* Outer bordered container wrapping all cards */}
        <div className="rounded-[2rem] md:rounded-[2.5rem] border-2 border-[#01203f] p-3 sm:p-5 md:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {services.map(({ icon: Icon, title, desc, image }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border-l-3 border-r-3 border-y border-[#01203f]/90 md:border-gray-100 md:hover:border-[#01203f]/90 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image / icon banner */}
                <div className="relative aspect-[16/10] bg-[#01203f] overflow-hidden">
                  {image && (
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {!image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        size={44}
                        className="text-white/20"
                        strokeWidth={1.2}
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01203f]/70 via-transparent to-transparent" />

                  {/* Icon badge overlapping the image */}
                  <div className="absolute -bottom-4 left-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#b61416] shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Icon size={24} className="text-white" strokeWidth={1.8} />
                  </div>
                </div>

                <div className="p-6 pt-9">
                  <h3 className="font-heading font-bold text-[#01203f] text-lg">
                    {title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm mt-2.5 leading-relaxed">
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
