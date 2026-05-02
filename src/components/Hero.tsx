"use client";

import { motion } from "framer-motion";
import { Music, Star, PlayCircle, Users } from "lucide-react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      <HeroBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <Star className="text-yellow-400 w-4 h-4" />
            <span className="text-sm font-medium text-gray-200">A escola mais avaliada de Governador Valadares</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            Aprenda a tocar do zero, de forma <span className="text-gradient">rápida e prática.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Juntos em busca da realização do seu sonho! Método direto ao ponto, sem enrolação. Toque sua primeira música já na primeira aula.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://wa.me/5533999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita." 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#8A2BE2] via-[#FF00FF] to-[#FF1493] text-white text-lg font-bold shadow-[0_0_20px_rgba(255,20,147,0.4)] hover:shadow-[0_0_35px_rgba(255,20,147,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Agendar Aula Experimental Gratuita
              <PlayCircle className="w-5 h-5" />
            </a>
            
            <a 
              href="https://wa.me/5533999999999?text=Gostaria%20de%20falar%20com%20um%20professor." 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-lg font-medium transition-all flex items-center justify-center"
            >
              Falar com um professor agora
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <div className="flex items-center gap-[-10px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-black bg-gray-800 ${i !== 1 ? '-ml-3' : ''} overflow-hidden`}>
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Aluno" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm text-gray-300 font-medium"><span className="text-white font-bold">+500 alunos</span> já transformaram suas vidas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
