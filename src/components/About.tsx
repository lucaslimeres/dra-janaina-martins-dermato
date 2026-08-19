import { Award, GraduationCap, HeartHandshake, Microscope } from "lucide-react";
import aboutImg from "../assets/images/dra-janaina-about.jpg";
import { site } from "../config/site";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação especializada",
    text: "Médica dermatologista com formação e atualização contínua em dermatologia clínica, cirúrgica e estética.",
  },
  {
    icon: Microscope,
    title: "Diagnóstico preciso",
    text: "Avaliação detalhada da pele, cabelo e unhas, com dermatoscopia e conduta baseada em evidências.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Consultas com tempo dedicado para ouvir, explicar e construir um plano de cuidado sob medida.",
  },
  {
    icon: Award,
    title: "Resultados naturais",
    text: "Procedimentos estéticos com foco em harmonia e naturalidade, respeitando as características de cada paciente.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative mx-auto max-w-md lg:mx-0">
          <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[2rem] bg-rose-100 sm:-bottom-8 sm:-right-8" />
          <img
            src={aboutImg}
            alt={`${site.doctorName}, dermatologista, em atendimento`}
            className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
            Sobre a médica
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            {site.doctorName}
          </h2>
          <p className="mt-1 text-sm text-ink/50">{site.crm}</p>

          <p className="mt-6 leading-relaxed text-ink/70">
            Com um olhar cuidadoso para cada paciente, a Dra. Janaína Martins une rigor
            técnico e sensibilidade no cuidado com a pele. Seu compromisso é oferecer
            diagnósticos precisos e tratamentos personalizados, sempre priorizando a
            saúde, o bem-estar e a autoestima de quem confia em seu trabalho.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
