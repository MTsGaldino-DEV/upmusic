"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Cor de Fundo Base Negra */}
      <div className="absolute inset-0 bg-black" />

      {/* Orbes Neon Flutuantes da Marca (Dão cor ao fundo sem poluir) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#8A2BE2] rounded-full mix-blend-screen filter blur-[150px] md:blur-[200px]"
      />
      
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#FF1493] rounded-full mix-blend-screen filter blur-[150px] md:blur-[180px]"
      />

      {/* Padrão GRID SaaS Premium */}
      <div 
        className="absolute inset-0 opacity-[0.18] md:opacity-[0.08] transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center',
          // O mask-image faz o fade out do grid nas bordas (foca no centro)
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 80%)',
        }}
      />

      {/* Sobreposição escura sutil (Overlay) para garantir leitura do texto */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/10" />

      {/* Fade inferior pesado para mesclar perfeitamente com a próxima seção */}
      <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}
