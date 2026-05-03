"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity duration-300">
          <Image
            src="/logo.png"
            alt="UPMusic"
            width={360}
            height={120}
            className="h-16 md:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,20,147,0.3)]"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#metodo" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Método</a>
          <a href="#cursos" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Cursos</a>
          <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Alunos</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Dúvidas</a>
          <a 
            href="https://wa.me/5533999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita." 
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#FF1493] text-white text-sm font-bold shadow-[0_0_15px_rgba(255,20,147,0.5)] hover:shadow-[0_0_25px_rgba(255,20,147,0.7)] transition-all transform hover:scale-105"
          >
            Agendar Aula Grátis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6">
          <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg font-medium">Método</a>
          <a href="#cursos" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg font-medium">Cursos</a>
          <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg font-medium">Alunos</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg font-medium">Dúvidas</a>
          <a 
            href="https://wa.me/5533999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita." 
            target="_blank" rel="noopener noreferrer"
            className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#8A2BE2] to-[#FF1493] text-white text-base font-bold shadow-[0_0_15px_rgba(255,20,147,0.5)]"
          >
            Agendar Aula Grátis
          </a>
        </div>
      )}
    </nav>
  );
}
