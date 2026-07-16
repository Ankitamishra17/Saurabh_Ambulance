"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Siren,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Twitter,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "ICU Life Support Ambulance", href: "/services" },
  { label: "Normal Ambulance", href: "/services" },
  { label: "Outside Ambulance", href: "/services" },
  { label: "Hospital Transfers", href: "/services" },
  { label: "Patient Transport", href: "/services" },
  { label: "Event Standby Ambulance", href: "/services" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "#E1306C" },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919996453141",
    label: "WhatsApp",
    color: "#25D366",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#01203f] overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#b61416]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-[#b61416]/5 blur-3xl pointer-events-none" />

      {/* Emergency strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-white text-base sm:text-lg md:text-xl">
              Medical Emergency? Don't Wait.
            </p>
            <p className="font-body text-white/60 text-xs sm:text-sm mt-1">
              Our team is available 24/7 across New Delhi .
            </p>
          </div>
          <a
            href="tel:+918755696315"
            className="flex items-center gap-2.5 bg-[#b61416] text-white font-heading font-semibold text-sm md:text-base px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-[#8f0f11] transition-colors shadow-md hover:shadow-lg whitespace-nowrap w-full md:w-auto justify-center"
          >
            <Phone size={17} className="fill-white shrink-0" strokeWidth={0} />
            +91 8755696315
          </a>
        </div>
      </motion.div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8 lg:gap-8">
        {/* Brand column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sm:col-span-2 lg:col-span-4"
        >
          <Link
            href="/"
            className="inline-flex items-center transition-opacity hover:opacity-90"
          >
            <Image
              src="/footer.jpeg"
              alt="Saurabh Ambulance Logo"
              width={120}
              height={56}
              className="brightness-110 w-24 sm:w-[120px] h-auto"
              priority
            />
          </Link>

          <p className="font-body text-white/60 text-sm leading-relaxed mt-5 max-w-xs">
            Thank you for contacting Delhi's largest ambulance network — Saurabh
            Ambulance Service Delhi! ICU Life Support, Normal, and Outside
            Ambulance services available here, 24/7. Let us know how we can help
            you.
          </p>

          <div className="flex items-center gap-3 mt-6">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target={label === "WhatsApp" ? "_blank" : undefined}
                rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
                aria-label={label}
                style={{ backgroundColor: `${color}1A` }}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-300 hover:scale-110"
              >
                <Icon size={16} style={{ color }} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="lg:col-span-2"
        >
          <h3 className="font-heading font-bold text-white text-sm tracking-wide uppercase mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-1.5 font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#b61416]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="lg:col-span-3"
        >
          <h3 className="font-heading font-bold text-white text-sm tracking-wide uppercase mb-5">
            Our Services
          </h3>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:col-span-2 lg:col-span-3"
        >
          <h3 className="font-heading font-bold text-white text-sm tracking-wide uppercase mb-5">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-[#b61416] mt-0.5 flex-shrink-0"
              />
              <span className="font-body text-sm text-white/60">
                Sector -3, Dwarka, Near Akash Hospital ,New Delhi
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#b61416] flex-shrink-0" />
              <a
                href="mailto:help@saurabhambulance.in"
                className="font-body text-sm text-white/60 hover:text-white transition-colors break-all"
              >
                info@saurabhambulance.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock3 size={16} className="text-[#b61416] flex-shrink-0" />
              <span className="font-body text-sm text-white/60">
                Emergency: 24/7
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="font-body text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} Saurabh Ambulance. All rights reserved.
          </p>

          <p className="font-body text-xs text-white/50 text-center sm:text-right">
            Developed by{" "}
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Debox Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
