"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Agende sua aula gratuita",
      desc: "Clique no botão do WhatsApp e escolha o melhor dia e horário para você. É sem compromisso!"
    },
    {
      num: "02",
      title: "Conheça na prática",
      desc: "Venha até a escola, conheça nosso espaço, professores e sinta como é o nosso método exclusivo."
    },
    {
      num: "03",
      title: "Comece sua evolução",
      desc: "Gostou? Escolha seu plano e comece sua jornada musical com a gente de forma definitiva."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Seu sonho a <span className="text-gradient">3 passos</span> de distância</h2>
          <p className="text-gray-400 text-lg">É muito simples começar. Esqueça burocracias e matrículas complicadas.</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#FF1493]/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-black border border-white/20 flex items-center justify-center mb-8 relative shadow-[0_0_30px_rgba(255,20,147,0.15)] group-hover:border-[#FF1493] transition-colors">
                  <div className="absolute inset-2 rounded-full border border-dashed border-white/30 animate-[spin_10s_linear_infinite]" />
                  <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://wa.me/5533999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita." 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#FF1493] text-white text-lg font-bold shadow-[0_0_20px_rgba(255,20,147,0.4)] hover:shadow-[0_0_35px_rgba(255,20,147,0.6)] transition-all transform hover:scale-105"
          >
            Dar o Primeiro Passo Agora
          </a>
        </div>
      </div>
    </section>
  );
}
