import {
  Scan,
  Syringe,
  Sparkle,
  Droplet,
  ScissorsLineDashed,
  Scissors,
} from "lucide-react";
import cirurgiaImg from "../assets/images/procedimento-cirurgia.jpeg";
import ultrassomImg from "../assets/images/procedimento-ultrassom.jpeg";
import { WhatsAppButton } from "./WhatsAppButton";

const services = [
  {
    icon: Scan,
    title: "Consulta dermatológica",
    text: "Avaliação completa da pele, cabelo e unhas com diagnóstico e plano de tratamento individualizado.",
  },
  {
    icon: Droplet,
    title: "Tratamento de acne e manchas",
    text: "Protocolos personalizados para acne, melasma e manchas, com acompanhamento contínuo.",
  },
  {
    icon: Syringe,
    title: "Toxina botulínica e preenchimento",
    text: "Procedimentos estéticos injetáveis com foco em resultados naturais e harmoniosos.",
  },
  {
    icon: Sparkle,
    title: "Peelings e bioestimuladores",
    text: "Rejuvenescimento e estímulo de colágeno para uma pele mais firme e saudável.",
  },
  {
    icon: ScissorsLineDashed,
    title: "Tricologia e saúde capilar",
    text: "Investigação e tratamento de queda de cabelo e demais alterações do couro cabeludo.",
  },
  {
    icon: Scissors,
    title: "Cirurgia dermatológica",
    text: "Remoção de lesões de pele com técnica cirúrgica precisa e cuidado estético na cicatrização.",
  },
];

export function Services() {
  return (
    <section id="procedimentos" className="bg-cream-dark/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
            O que tratamos
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Procedimentos e cuidados
          </h2>
          <p className="mt-4 text-ink/70">
            Da dermatologia clínica à estética, cada tratamento é pensado para a
            necessidade única de cada paciente.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-rows-2">
            <div className="group relative overflow-hidden rounded-2xl shadow-sm">
              <img
                src={cirurgiaImg}
                alt="Procedimento de cirurgia dermatológica"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-xl text-white">Cirurgia dermatológica</h3>
                <p className="mt-1 text-sm text-white/80">
                  Remoção segura de lesões, com precisão e cuidado estético.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-sm">
              <img
                src={ultrassomImg}
                alt="Procedimento estético com ultrassom microfocado"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-xl text-white">Ultrassom microfocado</h3>
                <p className="mt-1 text-sm text-white/80">
                  Efeito lifting não invasivo para firmeza e viço da pele.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="mb-4 text-sm text-ink/60">
            Não encontrou o que procura? Fale conosco e tire suas dúvidas.
          </p>
          <WhatsAppButton
            variant="outline"
            message="Olá! Gostaria de saber mais sobre os procedimentos oferecidos."
          >
            Falar com a clínica
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
