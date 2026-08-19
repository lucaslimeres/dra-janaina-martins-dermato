import { Info } from "lucide-react";
import ctaImg from "../assets/images/dra-janaina-cta.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-rose-900 py-24 sm:py-28">
      <img
        src={ctaImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-linear-to-r from-rose-900 via-rose-900/95 to-rose-900/80" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">
          Já agendou o seu momento de cuidado?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-rose-50/80">
          Dê o primeiro passo para uma pele mais saudável. Fale agora com a equipe da
          Dra. Janaína Martins e agende sua avaliação.
        </p>

        <div className="mx-auto mt-8 flex max-w-md items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-left text-sm text-rose-50/90">
          <Info size={18} className="mt-0.5 shrink-0" />
          <p>
            Reforçamos: o atendimento é <strong>particular</strong>, sem convênios ou
            planos de saúde. Consulte-nos sobre nota fiscal para reembolso.
          </p>
        </div>

        <div className="mt-9">
          <WhatsAppButton
            variant="solid"
            className="!bg-white !text-rose-800 hover:!bg-rose-50 !shadow-none"
            message="Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Janaína Martins."
          >
            Agendar consulta agora
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
