// app/gallery/page.js

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Contact from "@/components/home/Contact";

export const metadata = {
  title: "Gallery | Saurabh Ambulance",
  description:
    "Explore photos and videos of Saurabh Ambulance's fleet, emergency response operations, team, and event standby services across Delhi NCR.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
      <Contact />
    </main>
  );
}