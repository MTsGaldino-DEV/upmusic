import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";

// Lazy load components below the fold
const VideoTestimonials = dynamic(() => import("@/components/VideoTestimonials"), { ssr: false });
const Solution = dynamic(() => import("@/components/Solution"), { ssr: false });
const Benefits = dynamic(() => import("@/components/Benefits"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const Courses = dynamic(() => import("@/components/Courses"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Guarantee = dynamic(() => import("@/components/Guarantee"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"), { ssr: false });

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
