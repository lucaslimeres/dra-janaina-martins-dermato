import {
  Scan,
  Syringe,
  Sparkle,
  Sparkles,
  Droplet,
  ScissorsLineDashed,
  Scissors,
  type LucideIcon,
} from "lucide-react";
import cirurgiaImg from "../assets/images/procedimento-cirurgia.jpeg";
import ultrassomImg from "../assets/images/procedimento-ultrassom.jpeg";
import toxinaImg from "../assets/images/toxina-botulinica.jpg";
import consultaImg from "../assets/images/consulta-dermatologica.jpg";
import acneImg from "../assets/images/acne-manchas.jpg";
import peelingImg from "../assets/images/peelings-bioestimuladores.jpg";
import tricologiaImg from "../assets/images/tricologia-capilar.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

interface Service {
  icon: LucideIcon;
  title: string;
  text: string;
  image?: string;
  imagePosition?: string;
}

const services: Service[] = [
  {
    icon: Scan,
    title: "Consulta dermatológica",
    text: "Avaliação completa da pele, cabelo e unhas, com diagnóstico e plano individualizado.",
    image: consultaImg,
  },
  {
    icon: Droplet,
    title: "Acne e manchas",
    text: "Protocolos personalizados para acne, melasma e manchas, com acompanhamento contínuo.",
    image: acneImg,
    imagePosition: "object-[50%_55%]",
  },
  {
    icon: Syringe,
    title: "Toxina botulínica e preenchimento",
    text: "Procedimentos injetáveis com foco em resultados naturais e harmoniosos.",
    image: toxinaImg,
    imagePosition: "object-[15%_58%]",
  },
  {
    icon: Sparkle,
    title: "Peelings e bioestimuladores",
    text: "Rejuvenescimento e estímulo de colágeno para uma pele mais firme e saudável.",
    image: peelingImg,
  },
  {
    icon: Sparkles,
    title: "Ultrassom microfocado",
    text: "Efeito lifting não invasivo para firmeza e viço da pele, sem cortes.",
    image: ultrassomImg,
  },
  {
    icon: ScissorsLineDashed,
    title: "Tricologia e saúde capilar",
    text: "Investigação e tratamento de queda de cabelo e alterações do couro cabeludo.",
    image: tricologiaImg,
    imagePosition: "object-[35%_60%]",
  },
  {
    icon: Scissors,
    title: "Cirurgia dermatológica",
    text: "Remoção de lesões de pele com técnica precisa e cuidado estético na cicatrização.",
    image: cirurgiaImg,
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, image, imagePosition }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${imagePosition ?? ""}`}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-100 to-rose-50">
                    <Icon size={40} strokeWidth={1.4} className="text-rose-300" />
                  </div>
                )}
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-rose-700 shadow-sm backdrop-blur-sm">
                  <Icon size={17} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{text}</p>
              </div>
            </div>
          ))}
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
