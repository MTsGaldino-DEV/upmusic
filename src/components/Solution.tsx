"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Sparkles, MoveRight, MoveLeft } from "lucide-react";

const musicCards = [
  {
    id: 1,
    title: "Oceanos",
    artist: "Ana Nóbrega",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Evidências",
    artist: "Chitãozinho & Xororó",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Aleluia",
    artist: "Gabriela Rocha",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Aquarela",
    artist: "Toquinho",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Raridade",
    artist: "Anderson Freire",
    image: "https://images.unsplash.com/photo-1493225457124-a1a2a5956062?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Solution() {
  const [cards, setCards] = useState(musicCards);
  const [exitX, setExitX] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    setExitX(direction === 'left' ? -300 : 300);
    
    // Pequeno delay para a animação de saída acontecer antes de reordenar
    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const first = newCards.shift();
        if (first) newCards.push(first);
        return newCards;
      });
    }, 200);
  };

  const handleDragEnd = (e: any, info: PanInfo) => {
    const swipeThreshold = 80;
    if (info.offset.x < -swipeThreshold) {
      handleSwipe('left');
    } else if (info.offset.x > swipeThreshold) {
      handleSwipe('right');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="metodo">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8A2BE2]/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF1493]/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* ESQUERDA: Textos e Informações */}
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
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Esqueça meses de teoria chata antes de tocar algo legal. Com o nosso método prático, você aprende os fundamentos musicais <strong className="text-white">direto nas músicas que você ama ouvir</strong>.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 text-sm font-medium">
              <MoveLeft className="w-5 h-5 text-[#8A2BE2] animate-pulse" />
              Deslize as cartas para explorar
              <MoveRight className="w-5 h-5 text-[#FF1493] animate-pulse" />
            </div>
          </motion.div>

          {/* DIREITA: Stack de Cartas Interativas */}
          <div className="flex-1 w-full flex items-center justify-center relative h-[450px] md:h-[550px] perspective-1000">
            <AnimatePresence mode="popLayout">
              {cards.slice(0, 3).map((card, index) => {
                const isTop = index === 0;
                
                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{
                      opacity: 1 - index * 0.15,
                      scale: 1 - index * 0.05,
                      y: index * 25,
                      rotate: index === 0 ? 0 : index === 1 ? -4 : 4,
                      zIndex: 3 - index,
                    }}
                    exit={{ x: exitX, opacity: 0, rotate: exitX > 0 ? 15 : -15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.8}
                    onDragEnd={isTop ? handleDragEnd : undefined}
                    className={`absolute w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-[0_15px_50px_rgba(0,0,0,0.6)] ${
                      isTop ? "cursor-grab active:cursor-grabbing" : ""
                    }`}
                  >
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover pointer-events-none" 
                    />
                    
                    {/* Dark Overlay progressivo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    
                    {/* Infos da Carta */}
                    <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isTop ? 1 : 0.5, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h4 className="text-white font-bold text-3xl mb-1 drop-shadow-md">{card.title}</h4>
                        <p className="text-[#FF1493] text-base font-medium drop-shadow-sm">{card.artist}</p>
                      </motion.div>
                    </div>

                    {/* Sombra de destaque interna */}
                    <div className="absolute inset-0 border-[2px] border-white/5 rounded-3xl pointer-events-none" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
