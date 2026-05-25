"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypewriterText({
  words,
  typingSpeed = 120,
  deletingSpeed = 60,
  delayBetweenWords = 2200,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];

    if (isDeleting) {
      // Apagando texto
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Digitando texto
      timer = setTimeout(() => {
        setCurrentText((prev) => fullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Se terminou de digitar, espera o delay e começa a apagar
    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    }

    // Se terminou de apagar, passa para a próxima palavra
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-flex items-center select-none" aria-live="polite">
      {/* O gradiente premium herdado */}
      <span className="text-gradient min-h-[1.2em]">{currentText}</span>
      {/* Cursor pulsante customizado que combina com as cores do gradiente (pink/purple) */}
      <span className="ml-1 inline-block w-[3px] h-[0.85em] bg-gradient-to-b from-[#8A2BE2] to-[#FF00FF] animate-pulse rounded-full" style={{ transform: "translateY(0.05em)" }} />
    </span>
  );
}
