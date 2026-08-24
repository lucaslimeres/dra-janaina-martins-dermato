import { Outlet } from "react-router-dom";
import { WhatsAppProvider } from "../context/WhatsAppContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ScrollToHash } from "./ScrollToHash";

export function Layout() {
  return (
    <WhatsAppProvider>
      <ScrollToHash />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppProvider>
  );
}
