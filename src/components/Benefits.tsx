"use client";

import { motion } from "framer-motion";
import { Play, TrendingUp, UserCheck, Heart } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Play className="w-6 h-6 text-white" />,
      title: "Toque desde o 1º dia",
      desc: "Você não vai passar meses lendo partituras antes de pegar no instrumento. A prática começa na sua primeira aula.",
      color: "from-[#FF1493] to-[#FF00FF]"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Evolução acelerada",
      desc: "Nossa metodologia foi desenhada para que você perceba sua evolução semana a semana, mantendo a motivação em alta.",
      color: "from-[#8A2BE2] to-[#340E9E]"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Acompanhamento próximo",
      desc: "Professores capacitados e atenciosos que adaptam o ensino ao seu ritmo e ao seu gosto musical.",
      color: "from-[#00BFFF] to-[#0000CD]"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Ambiente inspirador",
      desc: "Salas climatizadas, equipamentos de ponta e um ambiente que respira música para você se sentir em casa.",
      color: "from-[#FF4500] to-[#DC143C]"
    }
  ];

  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que escolher a <span className="text-[#8A2BE2]">UPMusic?</span></h2>
          <p className="text-gray-400 text-lg">Tudo foi pensado para proporcionar a melhor experiência e a evolução mais rápida possível.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
