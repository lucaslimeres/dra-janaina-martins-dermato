import { Clock, MapPin } from "lucide-react";
import { site } from "../config/site";
import { InstagramIcon } from "./icons/InstagramIcon";
import { WhatsAppButton } from "./WhatsAppButton";

export function Contact() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
            Contato
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Vamos conversar
          </h2>
          <p className="mt-4 text-ink/70">
            Estamos prontos para te atender. Entre em contato pelo WhatsApp e agende
            sua consulta.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-rose-100 bg-white p-7 text-center shadow-sm">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-700">
              <MapPin size={20} />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-ink">Endereço</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {site.location.addressLine}
              <br />
              {site.location.neighborhoodCity}
            </p>
            <a
              href={site.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-rose-700 underline underline-offset-4"
            >
              Ver no mapa
            </a>
          </div>

          <div className="rounded-2xl border border-rose-100 bg-white p-7 text-center shadow-sm">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-700">
              <Clock size={20} />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-ink">Horário</h3>
            <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-ink/60">
              {site.hours.map((h) => (
                <p key={h.day}>
                  {h.day}: {h.time}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-rose-100 bg-white p-7 text-center shadow-sm">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-700">
              <InstagramIcon size={20} />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-ink">Instagram</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Acompanhe dicas de cuidado com a pele e novidades da clínica.
            </p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-rose-700 underline underline-offset-4"
            >
              {site.instagram.handle}
            </a>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton message="Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Janaína Martins.">
            Agendar pelo WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
