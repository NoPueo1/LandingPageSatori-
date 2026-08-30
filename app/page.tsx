import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import HowToOrder from "@/components/HowToOrder";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <HowToOrder />
      <CTASection />
      <Footer />
      <Cart />
    </main>
  );
}
