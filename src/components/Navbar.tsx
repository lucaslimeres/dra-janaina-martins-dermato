import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpeg";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { label: "Sobre", to: "/#sobre" },
  { label: "Procedimentos", to: "/#procedimentos" },
  { label: "Depoimentos", to: "/#depoimentos" },
  { label: "Conteúdos", to: "/conteudos" },
  { label: "Contato", to: "/#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Dra. Janaína Martins — Dermatologia"
            className="h-20 w-auto mix-blend-multiply"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-ink/70 transition hover:text-rose-700"
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppButton>Agendar consulta</WhatsAppButton>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-rose-100 bg-cream px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80"
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton className="mt-2 w-full">
              Agendar consulta
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
