"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";


const steps = [
  {
    step: "01",
    icon: "📋",
    title: "Elige tu promo",
    description:
      "Revisa el menú completo y elige la promo, rolls o picoteos que más te gusten.",
  },
  {
    step: "02",
    icon: "💬",
    title: "Escríbenos",
    description:
      "Mándanos tu pedido por WhatsApp indicando tu dirección o si prefieres retiro.",
  },
  {
    step: "03",
    icon: "🍣",
    title: "¡A disfrutar!",
    description:
      "Preparamos tu sushi con amor y te lo llevamos fresco directo a tu puerta.",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#c0392b]/40 to-transparent" />
              )}

              {/* Step number */}
              <div className="relative inline-block mb-5">
                <div className="w-20 h-20 rounded-full bg-[#161616] border border-[#2a2a2a] flex items-center justify-center text-3xl mx-auto">
                  {s.icon}
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#c0392b] text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-black text-xl mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="bg-[#161616] border border-[#2a2a2a] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#c0392b] to-transparent" />

          <p className="text-[#c0392b] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            {siteConfig.schedule}
          </p>
          <h3 className="text-3xl font-black mb-4">
            ¿Listo para pedir?
          </h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Escríbenos por WhatsApp y te respondemos al tiro. También puedes
            consultar el horario exacto en nuestro Instagram.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg shadow-red-900/30"
            >
              <MessageCircle className="w-5 h-5" />
              Hacer Pedido
            </a>
            <a
              href={siteConfig.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-[#2a2a2a] hover:border-[#c0392b] text-gray-400 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Ver punto de retiro
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
