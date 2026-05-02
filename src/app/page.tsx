import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Courses from "@/components/Courses";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
