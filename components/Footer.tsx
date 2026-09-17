import Image from "next/image";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
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
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li><a href="#menu" className="hover:text-white transition-colors">Promos Clásicas</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Promos Premium</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Rolls Individuales</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Signature Salmon</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Hand-Roll & Sushi Burger</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Picoteos</a></li>
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
