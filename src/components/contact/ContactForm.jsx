"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const services = [
  "General Enquiry",
  "Emergency Booking",
  "Scheduled Patient Transport",
  "Event Standby Ambulance",
  "Mortuary Van Service",
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: replace with your actual submission endpoint
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: services[0],
      message: "",
    });
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-3 bg-white rounded-2xl p-7 md:p-10 border border-gray-100 shadow-sm"
        >
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            Send A Message
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-2xl md:text-3xl mt-2 mb-7">
            Have A Question? Reach Out
          </h2>

          {submitted && (
            <div className="flex items-center gap-2.5 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-6 font-body text-sm">
              <CheckCircle2 size={18} />
              Thank you — your message has been sent. We'll get back to you
              shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-sm font-medium text-[#01203f] mb-1.5 block">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    className={`w-full font-body text-sm pl-10 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-colors ${
                      errors.name
                        ? "border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:ring-[#01203f]/10 focus:border-[#01203f]"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-[#b61416] mt-1.5 font-body">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="font-body text-sm font-medium text-[#01203f] mb-1.5 block">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="enter your number"
                    className={`w-full font-body text-sm pl-10 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-colors ${
                      errors.phone
                        ? "border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:ring-[#01203f]/10 focus:border-[#01203f]"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-[#b61416] mt-1.5 font-body">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="font-body text-sm font-medium text-[#01203f] mb-1.5 block">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full font-body text-sm pl-10 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-colors ${
                    errors.email
                      ? "border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:ring-[#01203f]/10 focus:border-[#01203f]"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-[#b61416] mt-1.5 font-body">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="font-body text-sm font-medium text-[#01203f] mb-1.5 block">
                What do you need help with?
              </label>
              <select
                value={formData.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="w-full font-body text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01203f]/10 focus:border-[#01203f] transition-colors"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-body text-sm font-medium text-[#01203f] mb-1.5 block">
                Message
              </label>
              <div className="relative">
                <MessageSquare
                  size={16}
                  className="absolute left-3.5 top-4 text-gray-400"
                />
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us how we can help..."
                  className={`w-full font-body text-sm pl-10 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-colors resize-none ${
                    errors.message
                      ? "border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:ring-[#01203f]/10 focus:border-[#01203f]"
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-xs text-[#b61416] mt-1.5 font-body">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b61416] text-white font-heading font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#8f0f11] transition-colors shadow-md hover:shadow-lg"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          id="map"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[320px] lg:min-h-full"
        >
          <iframe
  title="Saurabh Ambulance Location"
  src="https://maps.google.com/maps?q=Aakash%20Healthcare%20Super%20Speciality%20Hospital%20Sector%203%20Dwarka%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
  className="w-full h-full min-h-[320px] lg:min-h-full"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </motion.div>
      </div>
    </section>
  );
}
