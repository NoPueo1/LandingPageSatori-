import Image from "next/image";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Satori Sushi"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <div className="font-black text-lg">Satori Sushi</div>
                <div className="text-[#c0392b] text-xs tracking-widest">
                  EQUILIBRIO Y SABOR
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              El mejor sushi delivery de Quillón. Rolls frescos preparados con
              ingredientes de calidad.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">
              Menú
            </h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>🍱 Promos Clásicas</li>
              <li>⭐ Promos Premium</li>
              <li>🌀 Rolls Individuales</li>
              <li>🐟 Signature Salmon</li>
              <li>🌯 Hand-Roll & Sushi Burger</li>
              <li>🍟 Picoteos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#c0392b] shrink-0" />
                  WhatsApp — Hacer pedido
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-[#c0392b] shrink-0" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 text-[#c0392b] shrink-0" />
                  Punto de retiro — Quillón
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Clock className="w-4 h-4 text-[#c0392b] shrink-0" />
                {siteConfig.schedule}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm">
            © 2025 Satori Sushi — Quillón, Chile
          </p>
          <p className="text-gray-700 text-xs">
            Hecho con cariño y mucho sabor
          </p>
        </div>
      </div>
    </footer>
  );
}
