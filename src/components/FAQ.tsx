"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso ter o instrumento para começar?",
      a: "Não! A UPMusic disponibiliza todos os instrumentos para você usar durante as aulas na escola. Você pode começar sem investir em um instrumento logo de cara."
    },
    {
      q: "O método serve para iniciantes absolutos?",
      a: "Com certeza! Nosso método foi criado pensando exatamente em quem nunca tocou nada. Vamos te guiar passo a passo, do absoluto zero."
    },
    {
      q: "Qual a idade mínima para começar?",
      a: "Aceitamos alunos a partir de 7 anos de idade. Temos uma didática e professores especializados tanto para o público infantil quanto para adultos."
    },
    {
      q: "Como funciona o pagamento?",
      a: "Trabalhamos com planos mensais recorrentes (sem prender limite do cartão) via cartão de crédito, PIX ou boleto. Sem taxas de matrícula ou multas abusivas."
    }
  ];

  return (
    <section className="py-24 bg-[#050505]" id="faq">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Dúvidas <span className="text-gradient">Frequentes</span></h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-lg text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#FF1493] transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-400"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
