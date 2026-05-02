"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Target } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-24 relative overflow-hidden" id="metodo">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-[#8A2BE2]/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8A2BE2]/30 bg-[#8A2BE2]/10 text-[#8A2BE2] font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              O Método UPMusic
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Aprenda tocando suas <br className="hidden md:block" />
              <span className="text-gradient">músicas favoritas</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Desenvolvemos um método focado 100% na prática. Você aprende a teoria <strong className="text-white">enquanto toca</strong>, acelerando sua evolução em até 3x mais rápido que métodos tradicionais.
            </p>

            <ul className="space-y-6">
              {[
                { icon: <Zap className="w-6 h-6 text-[#8A2BE2]" />, title: "Prática na 1ª Aula", desc: "Saia do primeiro dia já tocando sua primeira música." },
                { icon: <Target className="w-6 h-6 text-[#FF00FF]" />, title: "Focado no que Importa", desc: "Sem teorias exaustivas que você nunca vai usar na prática." },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(138,43,226,0.15)]">
              {/* Replace with actual image later. Using a nice dark placeholder with gradient map effect for now */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#340E9E] via-black to-black opacity-80 z-10 mix-blend-multiply" />
              <img 
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop" 
                alt="Aluno tocando instrumento" 
                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              />
              
              {/* Floating badges */}
              <div className="absolute top-8 left-8 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Evolução</p>
                  <p className="text-white font-bold">Rápida e Contínua</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
