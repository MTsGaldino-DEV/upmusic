"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);

  const videos = [
    {
      id: "video1",
      thumb: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2000&auto=format&fit=crop",
      title: "João - Violão (2 meses)",
      // Placeholder de vídeo embed
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "video2",
      thumb: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2000&auto=format&fit=crop",
      title: "Marina - Teclado (4 meses)",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "video3",
      thumb: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2000&auto=format&fit=crop",
      title: "Lucas - Bateria (1 mês)",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "video4",
      thumb: "https://images.unsplash.com/photo-1621532813083-d5225022eeb8?q=80&w=2000&auto=format&fit=crop",
      title: "Sofia - Ukulele (3 meses)",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "video5",
      thumb: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2000&auto=format&fit=crop",
      title: "Pedro - Canto (6 meses)",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setDragged(true);
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleVideoClick = (embedUrl: string) => {
    if (!dragged) {
      setSelectedVideo(embedUrl);
    }
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="videos">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Veja com seus <span className="text-gradient">próprios olhos</span></h2>
          <p className="text-gray-400 text-lg">Confira a evolução real dos nossos alunos tocando seus instrumentos favoritos.</p>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto pl-6 md:pl-12">
        {/* Container do carrossel */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-6 overflow-x-auto pb-10 pt-4 pr-32 no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative min-w-[240px] w-[240px] md:min-w-[320px] md:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden group shrink-0"
              onClick={() => handleVideoClick(video.embedUrl)}
            >
              {/* Thumbnail */}
              <Image
                src={video.thumb}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                sizes="(max-width: 768px) 240px, 320px"
                unoptimized
              />

              {/* Overlay Escuro Leve */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Botão de Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#FF1493]/80 group-hover:border-[#FF1493]">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Título do vídeo */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg drop-shadow-md">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradiente Lateral Direito para indicar mais conteúdo */}
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
      </div>

      {/* Modal de Vídeo */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md aspect-[9/16] max-h-[90vh] bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 md:top-4 md:right-4 z-10 w-10 h-10 bg-white/10 hover:bg-[#FF1493] backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
