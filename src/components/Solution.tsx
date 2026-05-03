"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Target } from "lucide-react";

// Array Personalizável Original
const musicCards = [
  { id: 1, title: "A Thousand Years", artist: "Christina Perri", image: "/images/Christina.jpg" },
  { id: 2, title: "Evidências", artist: "Chitãozinho & Xororó", image: "/images/xitaozinho.jpg" },
  { id: 3, title: "Aleluia", artist: "Gabriela Rocha", image: "/images/gabriela.jpg" },
  { id: 4, title: "All of me", artist: "John Legend", image: "/images/john.jpg" },
  { id: 5, title: "Raridade", artist: "Anderson Freire", image: "/images/nair.jpg" }
];

export default function Solution() {
  const [cards, setCards] = useState(musicCards);

  // Troca automática a cada 2.5 segundos, sem drag
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const first = newCards.shift();
        if (first) newCards.push(first);
        return newCards;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="metodo">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8A2BE2]/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF1493]/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Layout em 2 colunas: Flex column no mobile, Flex row no desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

          {/* ESQUERDA: Textos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8A2BE2]/30 bg-[#8A2BE2]/10 text-[#8A2BE2] font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              O Método UPMusic
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Aprenda tocando suas <br className="hidden lg:block" />
              <span className="text-gradient">músicas favoritas</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Esqueça meses de teoria chata antes de tocar algo legal. Com o nosso método prático, você aprende os fundamentos musicais <strong className="text-white">direto nas músicas que você ama ouvir</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl w-full sm:w-auto text-left transition-colors hover:border-white/20">
                <div className="w-12 h-12 rounded-full bg-[#8A2BE2]/20 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#8A2BE2]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">Prática na 1ª Aula</h4>
                  <p className="text-sm text-gray-400">Saia já tocando.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl w-full sm:w-auto text-left transition-colors hover:border-white/20">
                <div className="w-12 h-12 rounded-full bg-[#FF1493]/20 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-[#FF1493]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">Foco no Objetivo</h4>
                  <p className="text-sm text-gray-400">Sem enrolação.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DIREITA: Stack de Cards (Baralho) Automático */}
          <div className="flex-1 w-full flex items-center justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[3/4] perspective-1000">
              <AnimatePresence mode="popLayout">
                {cards.slice(0, 3).map((card, index) => {
                  const isTop = index === 0;

                  return (
                    <motion.div
                      key={card.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8, y: 30 }}
                      animate={{
                        opacity: 1 - index * 0.2,
                        scale: 1 - index * 0.05,
                        y: index * 20,
                        rotate: index === 0 ? 0 : index === 1 ? -3 : 3,
                        zIndex: 3 - index,
                      }}
                      exit={{ opacity: 0, y: -40, scale: 0.95, transition: { duration: 0.4 } }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-[0_15px_50px_rgba(0,0,0,0.6)] bg-black pointer-events-none"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 280px, 320px"
                      />


                      {/* Overlay para leitura */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      {/* Info da Carta */}
                      <div className="absolute bottom-6 left-6 right-6 text-left">
                        <motion.div
                          animate={{ opacity: isTop ? 1 : 0.5 }}
                        >
                          <h4 className="text-white font-bold text-2xl md:text-3xl mb-1 drop-shadow-md">{card.title}</h4>
                          {card.artist && <p className="text-[#FF1493] text-sm md:text-base font-medium drop-shadow-sm">{card.artist}</p>}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
