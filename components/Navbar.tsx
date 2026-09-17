"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#como-pedir", label: "¿Cómo pedir?" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Satori Sushi"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-black text-white hidden sm:block">
              Satori <span className="text-[#c0392b]">Sushi</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors animated-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            {count > 0 ? (
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-lg shadow-red-950/40 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Tu Pedido ({count})</span>
              </button>
            ) : (
              <a
                href="#menu"
                className="hidden sm:flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white text-sm font-bold px-4 py-2 rounded-full transition-colors duration-300"
              >
                Ver Menú
              </a>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-1 cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/5 px-6 py-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white text-lg font-semibold border-b border-white/5 pb-4"
                >
                  {link.label}
                </a>
              ))}

              {count > 0 ? (
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 bg-[#c0392b] text-white font-bold px-6 py-3 rounded-full cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Ver mi Pedido ({count})
                </button>
              ) : (
                <a
                  href="#menu"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#c0392b] text-white font-bold px-6 py-3 rounded-full"
                >
                  Ver Menú
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
