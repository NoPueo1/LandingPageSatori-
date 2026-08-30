# 🍣 Satori Sushi — Landing Page & Delivery

Landing page moderna, rápida y optimizada para **Satori Sushi**, tienda de delivery en Quillón, Chile.

Desarrollada con **Next.js 15**, **TypeScript**, **Tailwind CSS**, y **Framer Motion**.

---

## ✨ Características

- 🎬 **Hero con video interactivo:** Fondo en video (`hero.mp4`) con fallback suave y llamado a la acción.
- 🍱 **Menú interactivo completo:** Navegación por pestañas (Promos Clásicas, Premium, Rolls, Signature Salmon, Hand-Roll & Burger, Picoteos).
- 🛒 **Carrito de pedidos inteligente:** Selección de múltiples productos con contador en tiempo real, ajustes de cantidades y generación automática del mensaje formateado para WhatsApp.
- 🖼️ **Galería multimedia:** Cuadrícula con fotos reales de los rolls y reproductor de video integrado con modal interactivo.
- 📍 **Información de retiro y contacto:** Enlaces directos a Google Maps, Instagram oficial y WhatsApp.
- ⚡ **Alto rendimiento:** Optimizado para carga rápida, SEO y responsive design (móvil, tablet y escritorio).

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) 15 (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Deploy:** Listo para [Vercel](https://vercel.com/)

---

## 🚀 Inicio Rápido

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página.

### 3. Compilar para producción
```bash
npm run build
```

---

## 📁 Estructura del Proyecto

```
LandingPageSatori/
├── app/
│   ├── layout.tsx         # Layout raíz con SEO y fuentes
│   ├── page.tsx           # Ensamblado principal de la landing
│   ├── Providers.tsx      # Provider de estado global (Carrito)
│   └── globals.css        # Estilos globales y paleta de colores
├── components/
│   ├── Navbar.tsx         # Barra de navegación sticky y menú móvil
│   ├── Hero.tsx           # Sección principal con video de fondo
│   ├── About.tsx          # Historia y badges informativos
│   ├── Menu.tsx           # Pestañas y tarjetas del menú con botón Agregar
│   ├── Cart.tsx           # Carrito flotante, drawer lateral y botón WhatsApp
│   ├── Gallery.tsx        # Galería de fotos y videos con visor modal
│   ├── HowToOrder.tsx     # Pasos para pedir
│   ├── CTASection.tsx     # Llamado a la acción final
│   └── Footer.tsx         # Horarios, ubicación y enlaces
├── context/
│   └── CartContext.tsx    # Lógica y estado del carrito
├── data/
│   ├── menu.ts            # Datos tipados de todas las categorías y productos
│   └── siteConfig.ts      # Configuración de WhatsApp, Maps, Instagram y horarios
└── public/
    ├── images/            # Logo y fotografías de los rolls
    └── videos/            # Videos (hero.mp4 y video1.mp4)
```

---

## ⚙️ Personalización

- **Precios y Menú:** Edita [`data/menu.ts`](./data/menu.ts) para agregar, modificar o quitar productos y precios.
- **Redes y Contacto:** Modifica [`data/siteConfig.ts`](./data/siteConfig.ts) para actualizar el número de WhatsApp, enlace de Maps o Instagram.
- **Fotos y Videos:** Agrega o cambia archivos dentro de `public/images/` y `public/videos/`.

---

## 🌐 Despliegue en Vercel

1. Sube este repositorio a tu cuenta de **GitHub**.
2. Ingresa a [Vercel](https://vercel.com/) y selecciona **Add New Project**.
3. Importa el repositorio `LandingPageSatori`.
4. Vercel detectará Next.js automáticamente. Haz clic en **Deploy**.
