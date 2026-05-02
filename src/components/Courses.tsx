"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      name: "Bateria / Cajon",
      price: "200",
      oldPrice: "280",
      color: "from-[#FF4500] to-[#DC143C]",
      featured: false
    },
    {
      name: "Ukulele",
      price: "150",
      oldPrice: "300",
      color: "from-[#00BFFF] to-[#0000CD]",
      featured: false
    },
    {
      name: "Violão",
      price: "290",
      oldPrice: "380",
      color: "from-[#8A2BE2] to-[#340E9E]",
      featured: true,
      badge: "Mais Procurado"
    },
    {
      name: "Teclado / Piano",
      price: "290",
      oldPrice: "380",
      color: "from-[#FF00FF] to-[#8A2BE2]",
      featured: false
    },
    {
      name: "Canto",
      price: "290",
      oldPrice: "380",
      color: "from-[#FF1493] to-[#C71585]",
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5" id="cursos">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF1493]/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Escolha o seu <span className="text-gradient">Instrumento</span></h2>
          <p className="text-gray-400 text-lg">Todos os planos incluem 2 aulas por semana com acompanhamento individualizado.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative p-1 rounded-2xl ${course.featured ? 'bg-gradient-to-b from-[#8A2BE2] to-[#FF1493]' : 'bg-white/10'} hover:scale-[1.02] transition-transform`}
            >
              {course.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#8A2BE2] to-[#FF1493] text-white text-xs font-bold rounded-full shadow-lg whitespace-nowrap z-10">
                  {course.badge}
                </div>
              )}
              
              <div className="h-full bg-black rounded-[14px] p-6 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{course.name}</h3>
                <div className="mb-6">
                  <span className="text-gray-500 line-through text-sm">De R$ {course.oldPrice}/mês</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-gray-400 text-lg">Por</span>
                    <span className="text-3xl font-black text-white">R$ {course.price}</span>
                    <span className="text-gray-400 text-sm">/mês</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>2 Aulas por semana</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Método prático</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Acesso a instrumentos</span>
                  </li>
                </ul>

                <a 
                  href={`https://wa.me/5533999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20${encodeURIComponent(course.name)}.`} 
                  target="_blank" rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                    course.featured 
                      ? 'bg-gradient-to-r from-[#8A2BE2] to-[#FF1493] text-white shadow-[0_0_15px_rgba(255,20,147,0.4)]' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Garantir Vaga
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[#FF1493] font-medium text-sm">* Turmas com vagas limitadas. Consulte disponibilidade.</p>
        </div>
      </div>
    </section>
  );
}
