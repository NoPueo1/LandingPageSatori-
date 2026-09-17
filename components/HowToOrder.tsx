"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, MessageCircle, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: BookOpen,
    title: "Elige tu promo",
    description:
      "Revisa el menú interactivo, selecciona tus rolls favoritos y agrégalos al carrito.",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "Escríbenos",
    description:
      "Confirma tu pedido directamente a nuestro WhatsApp con el detalle listo.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "¡A disfrutar!",
    description:
      "Preparamos tu sushi al momento y te lo llevamos fresco directo a tu puerta.",
  },
];

export default function HowToOrder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-pedir" ref={ref} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#c0392b] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Simple y rápido
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            ¿Cómo pedir?
          </h2>
          <div className="brush-line w-24 mx-auto" />
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative text-center p-6 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#c0392b]/40 transition-colors"
              >
                {/* Step number indicator */}
                <div className="relative inline-block mb-5">
                  <div className="w-16 h-16 rounded-full bg-[#1c1c1c] border border-[#2a2a2a] flex items-center justify-center text-[#c0392b] mx-auto shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#c0392b] text-white text-xs font-bold flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-black text-xl mb-3 text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
