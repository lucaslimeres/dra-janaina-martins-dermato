import { ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "../assets/images/toxina-botulinica.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-xs font-medium tracking-wide text-rose-700">
            <Sparkles size={14} /> Dermatologia clínica e estética
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
            Cuidado especializado para a{" "}
            <span className="italic text-rose-600">saúde e beleza</span> da sua pele
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/70 lg:mx-0">
            A Dra. Janaína Martins oferece atendimento dermatológico humanizado e
            individualizado, unindo ciência, precisão técnica e um olhar atento a cada
            detalhe da sua pele.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <WhatsAppButton message="Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Janaína Martins.">
              Agendar pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#procedimentos"
              className="text-sm font-medium text-ink/70 underline decoration-rose-300 decoration-2 underline-offset-4 transition hover:text-rose-700"
            >
              Conhecer os procedimentos
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-rose-200/70 bg-white/60 px-4 py-3 text-xs text-ink/60 sm:text-sm">
            <ShieldCheck size={18} className="shrink-0 text-rose-600" />
            <span>
              Atendimento <strong className="text-ink/80">exclusivamente particular</strong>
              {" "}— não atendemos convênios.
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-rose-200 sm:-inset-6" />
            <img
              src={heroImg}
              alt="Aplicação de toxina botulínica em consultório"
              className="aspect-3/4 w-full rounded-[2rem] object-cover shadow-2xl shadow-rose-900/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
