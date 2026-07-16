"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";

// Replace with a real photo of your team/fleet once available.
const BG_IMAGE =
  "https://images.pexels.com/photos/28123708/pexels-photo-28123708.jpeg";

export default function AboutHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".about-hero-badge",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
      )
        .fromTo(
          ".about-hero-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.25",
        )
        .fromTo(
          ".about-hero-crumb",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.35",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#01203f]/85" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#b61416]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#b61416]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto -mt-16 px-4 md:px-8 text-center">
        <div className="about-hero-crumb flex items-center justify-center gap-2 mt-7 font-body text-sm text-white/70">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-white font-medium">About</span>
        </div>

        <span className="about-hero-badge mt-8 inline-block font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
          About Saurabh Ambulance
        </span>

        <h1 className="about-hero-title font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl mt-6 leading-tight">
          Built On Trust.
          <br />
          Driven By Care.
        </h1>

        <p className="about-hero-description max-w-3xl mx-auto mt-6 text-base md:text-lg text-white/80 leading-relaxed">
          Saurabh Ambulance has been providing reliable emergency and
          non-emergency medical transportation services with a commitment to
          patient safety, rapid response, and compassionate care.
        </p>
      </div>
    </section>
  );
}
