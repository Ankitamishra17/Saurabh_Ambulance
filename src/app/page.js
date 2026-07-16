import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";
import WhyChooseUs from "@/components/home/WhyChoose";
import Testimonial from "@/components/home/Testimonial";

export const metadata = {
  title: "Saurabh Ambulance | 24/7 Emergency Ambulance Service in Delhi NCR",
  description:
    "Saurabh Ambulance provides 24/7 emergency and non-emergency ambulance services across Delhi NCR — ALS/BLS equipped vehicles, trained paramedics, and rapid response under 15 minutes. Call now for immediate assistance.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <WhyChooseUs />

      <Contact />
      <Testimonial />
    </>
  );
}
