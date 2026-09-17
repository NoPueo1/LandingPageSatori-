"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";

function formatPrice(p: number) {
  return `$${p.toLocaleString("es-CL")}`;
}

export default function Cart() {
  const { items, remove, updateQty, clear, total, count, isOpen, setIsOpen } =
    useCart();

  const buildWhatsAppMsg = () => {
    const lines = items.map(
      (i) =>
        `• ${i.name}${i.pieces ? ` (${i.pieces} pzas)` : ""} x${i.quantity} — ${formatPrice(i.price * i.quantity)}`
    );
    const msg =
      `Hola! Quiero hacer el siguiente pedido:\n\n` +
      lines.join("\n") +
      `\n\nTotal estimado: ${formatPrice(total)}`;
    return encodeURIComponent(msg);
  };

  const handleConfirm = () => {
    const url = `https://api.whatsapp.com/send/?phone=${siteConfig.phone}&text=${buildWhatsAppMsg()}&type=phone_number&app_absent=0`;
    window.open(url, "_blank");
    clear();
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating cart button */}
      <AnimatePresence>
        {count > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#c0392b] text-white font-bold px-5 py-3 rounded-full shadow-2xl shadow-red-900/40"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Ver pedido</span>
            <span className="bg-white text-[#c0392b] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {count}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart drawer / modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#111] border-l border-[#222] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#222]">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-[#c0392b]" />
                  <h2 className="font-black text-lg">Tu pedido</h2>
                  <span className="text-xs text-gray-500">
                    ({count} {count === 1 ? "ítem" : "ítems"})
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
                {items.length === 0 ? (
                  <div className="text-center py-16 text-gray-600">
                    <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>Tu carrito está vacío</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm truncate">
                            {item.name}
                          </p>
                          {item.pieces && (
                            <p className="text-[#d4a853] text-xs font-semibold">
                              {item.pieces} piezas
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => remove(item.id)}
                          className="text-gray-600 hover:text-red-500 transition-colors shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        {/* Qty controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQty(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#c0392b] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-bold text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQty(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#c0392b] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        {/* Subtotal */}
                        <span className="font-black text-white">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer — confirm */}
              {items.length > 0 && (
                <div className="px-6 py-5 border-t border-[#222] space-y-4">
                  {/* Total */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-medium">Total estimado</span>
                    <span className="text-2xl font-black">{formatPrice(total)}</span>
                  </div>

                  {/* Info note */}
                  <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 text-sm text-gray-400 leading-relaxed">
                    <p className="font-semibold text-white mb-1">
                      Revisa tu pedido antes de enviar
                    </p>
                    Al confirmar, se abrirá WhatsApp con el detalle listo.
                    Puedes ajustar o agregar comentarios antes de enviarlo.
                  </div>

                  {/* Confirm button */}
                  <button
                    onClick={handleConfirm}
                    className="w-full flex items-center justify-center gap-3 bg-[#c0392b] hover:bg-[#a93226] text-white font-black text-lg py-4 rounded-full transition-colors duration-300 shadow-lg shadow-red-900/30"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Confirmar pedido por WhatsApp
                  </button>

                  <button
                    onClick={clear}
                    className="w-full text-center text-gray-600 hover:text-gray-400 text-xs transition-colors py-1"
                  >
                    Vaciar carrito
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
