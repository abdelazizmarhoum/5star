import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { CartProvider } from "@/context/CartContext";

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-cream" style={{ backgroundColor: "#FAFAF9" }}>
          <Header />
          <main>
            <Hero />
            <Menu />
            <Reviews />
            <Location />
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
