import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";

// Lazy load components below the fold
const VideoTestimonials = dynamic(() => import("@/components/VideoTestimonials"));
const Solution = dynamic(() => import("@/components/Solution"));
const Benefits = dynamic(() => import("@/components/Benefits"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Courses = dynamic(() => import("@/components/Courses"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Guarantee = dynamic(() => import("@/components/Guarantee"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"));

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col w-full overflow-hidden relative">
      <Navbar />
      <Hero />
      <Problem />
      <VideoTestimonials />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Courses />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
