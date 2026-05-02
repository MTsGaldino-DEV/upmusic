"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-20 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-white">
            A música transforma. <br />
            <span className="text-gradient">Sua jornada começa hoje.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Não deixe seu sonho para depois. Agende sua aula experimental gratuita e descubra o seu talento na UPMusic.
          </p>
          
          <a 
            href="https://wa.me/5533999999999?text=Ol%C3%A1!%20Estou%20decidido(a)%20a%20come%C3%A7ar!%20Quero%20agendar%20minha%20aula." 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#8A2BE2] via-[#FF00FF] to-[#FF1493] text-white text-xl font-bold shadow-[0_0_30px_rgba(255,20,147,0.5)] hover:shadow-[0_0_50px_rgba(255,20,147,0.7)] transition-all transform hover:scale-105"
          >
            Falar no WhatsApp
            <PlayCircle className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
