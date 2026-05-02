"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/10 to-[#FF1493]/10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-black border border-white/20 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(138,43,226,0.2)]"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#8A2BE2] to-[#FF1493] rounded-full flex items-center justify-center mb-8 shadow-lg">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Experimente sem compromisso</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nós confiamos tanto em nosso método que a sua <strong className="text-white">primeira aula é 100% gratuita</strong>. Você vem, conhece a estrutura, faz uma aula na prática e só fecha se realmente gostar. Risco Zero!
          </p>

          <a 
            href="https://wa.me/5533999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita." 
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-white text-black text-lg font-bold shadow-lg hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Quero minha Aula Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
