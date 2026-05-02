"use client";

import { motion } from "framer-motion";
import { Frown, Clock, BookOpen, AlertCircle } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <Frown className="w-8 h-8 text-[#FF1493]" />,
      title: "Não sabe por onde começar?",
      desc: "Tentou vídeos na internet, mas a falta de estrutura e feedback te deixou confuso e travado."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#FF1493]" />,
      title: "Métodos chatos e teóricos",
      desc: "Você quer tocar suas músicas favoritas, mas as escolas tradicionais te obrigam a passar meses só na teoria."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-[#FF1493]" />,
      title: "Falta de motivação",
      desc: "Sem evolução rápida, você acaba desanimando e o instrumento fica encostado pegando poeira no canto do quarto."
    }
  ];

  return (
    <section className="py-20 bg-[#050505] relative" id="problema">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Aprender música <span className="text-[#FF1493]">não precisa ser difícil</span></h2>
          <p className="text-gray-400 text-lg">Se você já tentou aprender e desistiu, a culpa não é sua. O problema está na metodologia ultrapassada que a maioria usa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF1493]/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FF1493]/10 flex items-center justify-center mb-6">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{prob.title}</h3>
              <p className="text-gray-400 leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
