"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
import { siteConfig } from "@/data/siteConfig";

const badges = [
  { label: "Delivery Quillón" },
  { label: "Rolls de autor" },
  { label: "Preparación diaria" },
  { label: "Rolls flameados" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={ref} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/sushi-rolls.jpg"
              alt="Sushi Satori Quillón"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#c0392b] text-white font-bold px-6 py-3 rounded-xl shadow-xl text-sm">
            Desde 2025
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Section label */}
          <p className="text-[#c0392b] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Nuestra historia
          </p>

          <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            Sushi con alma
            <br />
            <span className="text-[#c0392b]">en Quillón</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Somos <strong className="text-white">Satori Sushi</strong>, un
            equipo joven de Quillón que hace sushi de verdad. Rolls elaborados
            con ingredientes frescos, sabores propios y la onda de siempre
            querer mejorar. Sin vueltas — buen sushi, buen precio, en tu puerta.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map((b) => (
              <span
                key={b.label}
                className="px-4 py-2 bg-[#161616] border border-[#2a2a2a] rounded-full text-sm text-gray-300"
              >
                {b.label}
              </span>
            ))}
          </div>

          {/* Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-400">
              <Clock className="w-4 h-4 text-[#c0392b] shrink-0" />
              <span>
                {siteConfig.schedule} ·{" "}
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c0392b] hover:underline"
                >
                  {siteConfig.scheduleNote}
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-4 h-4 text-[#c0392b] shrink-0" />
              <a
                href={siteConfig.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Ver dirección de retiro →
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
            <InstagramIcon className="w-4 h-4 text-[#c0392b] shrink-0" />
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
