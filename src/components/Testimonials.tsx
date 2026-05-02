"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "João Pedro",
      course: "Aluno de Violão",
      text: "Eu achava que nunca conseguiria tocar. Na UPMusic, na primeira aula eu já saí tocando uma música! O método é incrível e os professores são super pacientes.",
      img: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Mariana Silva",
      course: "Aluna de Teclado",
      text: "Ambiente maravilhoso! Minha filha de 10 anos ama as aulas e evoluiu muito rápido. A didática foca no que a criança gosta, o que faz toda a diferença.",
      img: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Lucas Fernandes",
      course: "Aluno de Bateria",
      text: "Sempre tive vontade, mas achava que era tarde. O método da UPMusic provou que eu estava errado. Aulas práticas, direto ao ponto. Recomendo demais!",
      img: "https://i.pravatar.cc/150?img=12"
    }
  ];

  return (
    <section className="py-24 relative" id="depoimentos">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Quem faz, <span className="text-[#FF00FF]">recomenda!</span></h2>
          <p className="text-gray-400 text-lg">Faça parte dos mais de 500 alunos que já realizaram o sonho de tocar um instrumento.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>

              <p className="text-gray-300 italic mb-8 relative z-10">"{testi.text}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={testi.img} alt={testi.name} className="w-12 h-12 rounded-full border-2 border-[#8A2BE2]" />
                <div>
                  <h4 className="text-white font-bold">{testi.name}</h4>
                  <p className="text-[#FF1493] text-sm">{testi.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
