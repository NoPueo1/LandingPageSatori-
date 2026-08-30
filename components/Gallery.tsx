"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";

type GalleryItem =
  | { type: "image"; src: string; alt: string; label: string }
  | { type: "video"; src: string; alt: string; label: string; poster?: string };

const galleryItems: GalleryItem[] = [
  { type: "image", src: "/images/sushi-1.jpg",  alt: "Sushi Satori", label: "Siempre frescos" },
  { type: "image", src: "/images/sushi-2.jpg",  alt: "Sushi Satori", label: "La mejor calidad" },
  { type: "image", src: "/images/sushi-3.jpg",  alt: "Sushi Satori", label: "Hecho con cariño" },
  { type: "video", src: "/videos/video1.mp4",   alt: "Video Satori",  label: "Satori Sushi" },
  { type: "image", src: "/images/sushi-4.jpg",  alt: "Sushi Satori", label: "Cada detalle importa" },
  { type: "image", src: "/images/sushi-5.jpg",  alt: "Sushi Satori", label: "Sabor en cada corte" },
  { type: "image", src: "/images/sushi-6.jpg",  alt: "Sushi Satori", label: "Rolls de autor" },
  { type: "image", src: "/images/sushi-7.jpg",  alt: "Sushi Satori", label: "Para compartir" },
  { type: "image", src: "/images/sushi-8.jpg",  alt: "Sushi Satori", label: "Siempre frescos" },
  { type: "image", src: "/images/sushi-9.jpg",  alt: "Sushi Satori", label: "La mejor calidad" },
  { type: "image", src: "/images/sushi-10.jpg", alt: "Sushi Satori", label: "Hecho con cariño" },
  { type: "image", src: "/images/sushi-11.jpg", alt: "Sushi Satori", label: "Sabor en cada corte" },
  { type: "image", src: "/images/sushi-12.jpg", alt: "Sushi Satori", label: "Rolls de autor" },
  { type: "image", src: "/images/sushi-13.jpg", alt: "Sushi Satori", label: "Colores y sabor" },
];

function VideoCard({
  item,
  onClick,
}: {
  item: Extract<GalleryItem, { type: "video" }>;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer group bg-[#161616]"
    >
      <video
        src={item.src}
        poster={item.poster}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        muted
        loop
        playsInline
        onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
        onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-300">
        <div className="w-14 h-14 rounded-full bg-[#c0392b]/80 flex items-center justify-center shadow-lg">
          <Play className="w-6 h-6 text-white ml-1" fill="white" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white font-bold text-sm bg-black/50 px-2 py-1 rounded">
          {item.label}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const selectedItem = selected !== null ? galleryItems[selected] : null;

  return (
    <section id="galeria" ref={ref} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#c0392b] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Visual</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">La experiencia</h2>
          <div className="brush-line w-24 mx-auto" />
        </motion.div>

        {/* Grid 3 columnas — 9 fotos + 1 video = 10 items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              {item.type === "video" ? (
                <VideoCard item={item} onClick={() => setSelected(i)} />
              ) : (
                <div
                  onClick={() => setSelected(i)}
                  className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-xs">{item.label}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full rounded-2xl"
                />
              ) : (
                <div className="relative aspect-square w-full max-w-2xl mx-auto">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              )}
              <p className="text-center text-gray-400 mt-4 text-sm">{selectedItem.label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
