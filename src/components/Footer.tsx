import logo from "../assets/images/logo.jpeg";
import { site } from "../config/site";
import { InstagramIcon } from "./icons/InstagramIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-100 bg-cream-dark/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-8">
        <img
          src={logo}
          alt="Dra. Janaína Martins — Dermatologia"
          className="h-20 w-auto mix-blend-multiply"
        />
        <p className="text-xs text-ink/50">{site.specialty} · {site.crm}</p>

        <div className="flex items-center gap-5 text-ink/60">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition hover:text-rose-700"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        <p className="max-w-lg text-xs leading-relaxed text-ink/40">
          Atendimento exclusivamente particular — não atendemos convênios ou planos de
          saúde.
        </p>

        <p className="text-xs text-ink/40">
          © {year} {site.doctorName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
