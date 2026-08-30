"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { menuData } from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";
import { Info, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

function formatPrice(price: number) {
  return `$${price.toLocaleString("es-CL")}`;
}

export default function Menu() {
  const [active, setActive] = useState("clasicas");
  const [added, setAdded] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { add, setIsOpen } = useCart();

  const activeCategory = menuData.find((c) => c.id === active)!;

  const handleAdd = (item: typeof activeCategory.items[0]) => {
    add({
      id: `${active}-${item.name}`,
      name: item.name,
      price: item.price,
      pieces: item.pieces,
    });
    setAdded(item.name);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section id="menu" ref={ref} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#c0392b] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Nuestras opciones
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">El Menú</h2>
          <div className="brush-line w-24 mx-auto" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                active === cat.id
                  ? "bg-[#c0392b] border-[#c0392b] text-white shadow-lg shadow-red-900/30"
                  : "bg-transparent border-[#2a2a2a] text-gray-400 hover:border-[#c0392b] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {activeCategory.items.map((item, i) => {
                const wasAdded = added === item.name;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="group relative bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5 card-glow transition-all duration-300 hover:border-[#c0392b]/40 flex flex-col"
                  >
                    {item.tag && (
                      <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full bg-[#c0392b]/20 text-[#e74c3c] border border-[#c0392b]/30">
                        {item.tag}
                      </span>
                    )}
                    {item.pieces && (
                      <div className="text-xs text-[#d4a853] font-bold mb-1 tracking-wider">
                        {item.pieces} PIEZAS
                      </div>
                    )}
                    <h3 className="font-black text-lg text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2a2a2a]">
                      <span className="text-2xl font-black text-white">
                        {formatPrice(item.price)}
                      </span>
                      <button
                        onClick={() => handleAdd(item)}
                        className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${
                          wasAdded
                            ? "bg-green-600/20 text-green-400 border border-green-600/30"
                            : "bg-[#c0392b]/10 text-[#c0392b] border border-[#c0392b]/30 hover:bg-[#c0392b] hover:text-white"
                        }`}
                      >
                        {wasAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Agregado
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Agregar
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Conditions */}
            {activeCategory.conditions && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 text-center text-gray-600 text-sm italic"
              >
                <Info className="w-4 h-4 text-white/40 shrink-0" />
                {activeCategory.conditions}
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-5">
            ¿Tienes dudas? Escríbenos y te ayudamos a elegir.
          </p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg shadow-red-900/30"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
