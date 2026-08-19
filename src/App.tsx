import { WhatsAppProvider } from "./context/WhatsAppContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { CtaSection } from "./components/CtaSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  return (
    <WhatsAppProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}

export default App;
