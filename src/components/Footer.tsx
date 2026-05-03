import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="UPMusic GV"
                width={360}
                height={120}
                className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,20,147,0.3)] opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              UpMusic - Centro de Capacitação Musical em Governador Valadares.

              <br />
              <br /> Juntos tornando o seu sonho, uma realidade!
            </p>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Rua Da Imaginação, 989 - Centro</p>
              <p>Governador Valadares - MG</p>
              <p>(33) 99999-9999</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#metodo" className="text-gray-400 hover:text-[#FF1493] transition-colors">Método</a></li>
              <li><a href="#cursos" className="text-gray-400 hover:text-[#FF1493] transition-colors">Cursos</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-[#FF1493] transition-colors">Alunos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-[#FF1493] transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FF1493] transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF1493] transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UPMusic GV. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Feito com excelência para <span className="text-white">conversão.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
