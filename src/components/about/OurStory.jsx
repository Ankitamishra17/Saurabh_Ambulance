"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-text",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-text",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".story-visual",
        { opacity: 0, x: 40, scale: 0.94 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-visual",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="story-text">
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            Our Story
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3 mb-5">
            A Mission That Began With One Ambulance
          </h2>
          <p className="font-body text-gray-600 leading-relaxed mb-4">
            Saurabh Ambulance started with a simple observation — in
            emergencies, families in Delhi NCR were losing precious minutes
            waiting for reliable transport. What began as a single vehicle and a
            small team of dedicated paramedics has since grown into a trusted
            emergency response network across the region.
          </p>
          <p className="font-body text-gray-600 leading-relaxed">
            Over the years, our focus has never changed — arrive fast, treat
            with care, and never let a family feel alone during a crisis. Today,
            that same founding principle guides every dispatch, every vehicle,
            and every member of our team.
          </p>
        </div>

        <div className="story-visual relative max-w-lg mx-auto w-full">
          <div className="relative rounded-[2rem] bg-[#01203f] aspect-[4/3] overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Saurabh Ambulance vehicle on emergency response duty"
              fill
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover opacity-90"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01203f] via-[#01203f]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#b61416]/25 via-transparent to-transparent" />
          </div>

         
        </div>
      </div>
    </section>
  );
}
