"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { menuData, MenuItem } from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";
import { Info, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function Menu() {
  const [active, setActive] = useState("clasicas");
  const [added, setAdded] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { add } = useCart();

  const activeCategory = menuData.find((c) => c.id === active)!;

  const handleAdd = (item: MenuItem) => {
    add({
      id: `${active}-${item.name}`,
      name: item.name,
      price: item.price,
      pieces: item.pieces,
      unit: item.unit,
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
            Carta Satori
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">El Menú</h2>
          <div className="brush-line w-24 mx-auto" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border shrink-0 ${
                active === cat.id
                  ? "bg-[#c0392b] border-[#c0392b] text-white shadow-lg shadow-red-900/30 scale-105"
                  : "bg-[#141414] border-[#262626] text-gray-400 hover:border-[#c0392b]/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Category Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {activeCategory.items.map((item, i) => {
                const wasAdded = added === item.name;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="group relative rounded-2xl p-6 bg-[#141414] border border-[#242424] hover:border-[#c0392b]/50 transition-all duration-300 card-glow flex flex-col justify-between"
                  >
                    <div>
                      {/* Badge: Cortes, Unidades, or Custom Format */}
                      {(item.badge || item.pieces) && (
                        <div className="mb-2">
                          <span className="inline-block text-xs font-black px-2.5 py-1 rounded bg-[#d4a853]/15 text-[#e5be6b] border border-[#d4a853]/30 tracking-wider uppercase">
                            {item.badge ? item.badge : `${item.pieces} ${item.unit || "Cortes"}`}
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="font-black text-xl text-white mb-4">
                        {item.name}
                      </h3>

                      {/* Rolls or Details List with clean bullet alignment */}
                      {item.rolls && item.rolls.length > 0 ? (
                        <div className="space-y-2 mb-6 flex-1">
                          {item.rolls.map((roll, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug"
                            >
                              <span className="text-[#c0392b] font-bold text-sm shrink-0 mt-0.5">
                                •
                              </span>
                              <div className="text-gray-300">
                                <span className="text-[#d4a853] font-bold">
                                  {roll.wrapping}:
                                </span>{" "}
                                <span className="text-gray-400">
                                  {roll.ingredients}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : item.details && item.details.length > 0 ? (
                        <div className="space-y-2 mb-6 flex-1">
                          {item.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug"
                            >
                              <span className="text-[#c0392b] font-bold text-sm shrink-0 mt-0.5">
                                •
                              </span>
                              <div className="text-gray-300">
                                <span className="text-[#d4a853] font-bold">
                                  {detail.label}:
                                </span>{" "}
                                <span className="text-gray-400">
                                  {detail.text}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    {/* Bottom row: Price & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#242424] mt-auto">
                      <div>
                        <span className="text-[11px] text-gray-500 uppercase tracking-wider block">
                          Total
                        </span>
                        <span className="text-2xl font-black text-white">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`flex items-center gap-2 font-bold px-4 py-2 text-sm rounded-full transition-all duration-300 shadow-md ${
                          wasAdded
                            ? "bg-green-600/20 text-green-400 border border-green-600/40"
                            : "bg-[#c0392b] hover:bg-[#a93226] text-white shadow-red-950/40"
                        }`}
                      >
                        {wasAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            Agregado
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            Agregar
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Category Condition Note */}
            {activeCategory.conditions && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 text-xs sm:text-sm text-center"
              >
                <Info className="w-4 h-4 text-[#c0392b] shrink-0" />
                <span>{activeCategory.conditions}</span>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Consult CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-gray-400 mb-4 text-sm">
            ¿Tienes alguna duda o quieres personalizar un roll?
          </p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#181818] hover:bg-[#222] border border-white/10 hover:border-[#c0392b]/50 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300"
          >
            Hablar con nosotros por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
