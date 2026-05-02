"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  // Arcos inspirados em Wi-Fi / Ondas Sonoras.
  // Utilizando elipses onde apenas a metade superior é visível (n-shape)
  const arcs1 = Array.from({ length: 8 }).map((_, i) => ({
    rx: 250 + i * 90,
    ry: 120 + i * 60,
  }));

  const arcs2 = Array.from({ length: 6 }).map((_, i) => ({
    rx: 280 + i * 100,
    ry: 150 + i * 70,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-end justify-center">
      {/* Camada 1: Roxo/Rosa (Movimento Lento e Fluido) */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-full h-[90%] md:h-[80%] bottom-0 flex justify-center opacity-[0.5]"
      >
        <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMax slice" className="w-full h-full blur-[1px]">
          <defs>
            <linearGradient id="gradHero1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0" />
              <stop offset="30%" stopColor="#8A2BE2" stopOpacity="1" />
              <stop offset="70%" stopColor="#FF1493" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF1493" stopOpacity="0" />
            </linearGradient>
          </defs>
          {arcs1.map((arc, i) => (
            <ellipse
              key={`layer1-${i}`}
              cx="500"
              cy="500"
              rx={arc.rx}
              ry={arc.ry}
              fill="none"
              stroke="url(#gradHero1)"
              strokeWidth={1.5}
              className="opacity-80"
            />
          ))}
        </svg>
      </motion.div>

      {/* Camada 2: Rosa/Roxo (Movimento Reverso com Glow) */}
      <motion.div
        animate={{ y: [0, 15, 0], scale: [1.02, 1, 1.02] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-full h-[90%] md:h-[80%] bottom-0 flex justify-center opacity-[0.5]"
      >
        <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMax slice" className="w-full h-full blur-[3px]">
          <defs>
            <linearGradient id="gradHero2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF1493" stopOpacity="0" />
              <stop offset="40%" stopColor="#FF1493" stopOpacity="1" />
              <stop offset="60%" stopColor="#8A2BE2" stopOpacity="1" />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
            </linearGradient>
          </defs>
          {arcs2.map((arc, i) => (
            <ellipse
              key={`layer2-${i}`}
              cx="500"
              cy="500"
              rx={arc.rx}
              ry={arc.ry}
              fill="none"
              stroke="url(#gradHero2)"
              strokeWidth={2}
            />
          ))}
        </svg>
      </motion.div>

      {/* Overlay para mesclar suavemente o top e bottom com o fundo preto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
    </div>
  );
}
