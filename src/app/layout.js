// app/layout.js
// Add this font setup to your root layout — Plus Jakarta Sans for headings, Inter for body.
// This gives the site a premium, medical/emergency-appropriate feel.

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CallButton from "@/components/common/CallButton";
import ScrollToTop from "@/components/common/ScrollToTop";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Saurabh Ambulance | 24/7 Emergency Ambulance Service in Delhi NCR",
  description:
    "Saurabh Ambulance provides 24/7 emergency and non-emergency ambulance services across Delhi NCR with fully equipped vehicles and trained paramedics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <TopBar />
        <Navbar />
        {children}
        <Footer/>
        <ScrollToTop/>
        <CallButton/>
      </body>
    </html>
  );
}

/* 
  ADD THIS to tailwind.config.js under theme.extend:

  fontFamily: {
    heading: ["var(--font-heading)"],
    body: ["var(--font-body)"],
  },

  Then use:
  - className="font-heading" for headings/logo
  - className="font-body" for paragraph text (already default on <body>)
*/
