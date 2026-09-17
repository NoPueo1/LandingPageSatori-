"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { menuData, MenuItem } from "@/data/menu";
import { siteConfig } from "@/data/siteConfig";
import { Info, ShoppingBag, Check, Sparkles, Flame } from "lucide-react";
import { useCart } from "@/context/CartContext";

function formatPrice(price: number) {
  return `$${price.toLocaleString("es-CL")}`;
}

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
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
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
                const isMega = item.tag === "Mega Combo";

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                      isMega
                        ? "col-span-1 sm:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#1b1414] via-[#141414] to-[#101010] border-2 border-[#c0392b]/60 shadow-2xl shadow-red-950/30"
                        : "bg-[#141414] border border-[#242424] hover:border-[#c0392b]/50 card-glow"
                    }`}
                  >
                    {/* Top row: Cuts, Servings & Tags */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          {item.pieces && (
                            <span className="text-xs font-black px-2.5 py-1 rounded-md bg-[#d4a853]/15 text-[#e5be6b] border border-[#d4a853]/30 tracking-wider uppercase">
                              {item.pieces} {typeof item.pieces === "number" ? "Cortes" : "Cortes"}
                            </span>
                          )}
                          {item.servings && (
                            <span className="text-xs text-gray-400 font-medium">
                              · {item.servings}
                            </span>
                          )}
                        </div>

                        {item.tag && (
                          <span
                            className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${
                              item.tag === "Mega Combo"
                                ? "bg-red-600/30 text-red-300 border-red-500/40"
                                : item.tag === "Más Pedida"
                                ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                                : "bg-[#c0392b]/20 text-[#e74c3c] border-[#c0392b]/30"
                            }`}
                          >
                            {item.tag === "Más Pedida" && <Flame className="w-3 h-3 text-amber-400" />}
                            {item.tag === "Mega Combo" && <Sparkles className="w-3 h-3 text-red-400" />}
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-black text-white mb-4 ${
                          isMega ? "text-2xl sm:text-3xl" : "text-xl"
                        }`}
                      >
                        {item.name}
                      </h3>

                      {/* Rolls Breakdown */}
                      {item.rolls && item.rolls.length > 0 ? (
                        <div
                          className={`mb-6 ${
                            isMega
                              ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 border-t border-white/5"
                              : "space-y-2.5"
                          }`}
                        >
                          {item.rolls.map((roll, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug"
                            >
                              <span className="px-2 py-0.5 rounded bg-[#202020] text-[#d4a853] border border-white/5 font-semibold shrink-0 text-xs">
                                {roll.wrapping}
                              </span>
                              <span className="text-gray-300 pt-0.5">
                                {roll.ingredients}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        item.description && (
                          <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {item.description}
                          </p>
                        )
                      )}
                    </div>

                    {/* Bottom row: Price & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#242424] mt-auto">
                      <div>
                        <span className="text-xs text-gray-500 block">Total</span>
                        <span
                          className={`font-black text-white ${
                            isMega ? "text-3xl text-red-100" : "text-2xl"
                          }`}
                        >
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`flex items-center gap-2 font-bold rounded-full transition-all duration-300 shadow-md ${
                          isMega ? "px-6 py-3 text-base" : "px-4 py-2 text-sm"
                        } ${
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
