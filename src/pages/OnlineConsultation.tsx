import { useEffect } from "react";
import {
  CalendarCheck,
  ChevronDown,
  CircleCheck,
  FileText,
  Globe,
  HeartHandshake,
  House,
  Info,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Video,
  type LucideIcon,
} from "lucide-react";
import heroImg from "../assets/images/dra-janaina-about.jpg";
import ctaImg from "../assets/images/dra-janaina-cta.jpg";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { site } from "../config/site";
import { useSeo } from "../hooks/useSeo";

const whatsAppMessage =
  "Olá! Vim pelo site e gostaria de agendar uma consulta online com a Dra. Janaína Martins.";

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Globe,
    title: "De qualquer lugar do Brasil",
    text: "Consulte com a Dra. Janaína Martins de onde você estiver, sem depender de um dermatologista na sua cidade.",
  },
  {
    icon: House,
    title: "Sem deslocamento",
    text: "Sem trânsito e sem sala de espera. Você só precisa de um celular ou computador com câmera e internet.",
  },
  {
    icon: FileText,
    title: "Documentos digitais",
    text: "Receitas, pedidos de exames e orientações, quando indicados, são enviados digitalmente com assinatura eletrônica.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento próximo",
    text: "Retornos também podem ser online, facilitando o acompanhamento da evolução do seu tratamento.",
  },
];

const mainConditions: { title: string; text: string }[] = [
  {
    title: "Acne",
    text: "Avaliação do tipo e da gravidade da acne, com plano de tratamento e acompanhamento da evolução.",
  },
  {
    title: "Rosácea",
    text: "Identificação dos fatores de piora e tratamento para controlar vermelhidão, ardor e lesões no rosto.",
  },
  {
    title: "Dermatite atópica",
    text: "Controle das crises de coceira e ressecamento, com orientação de cuidados diários com a pele.",
  },
  {
    title: "Melasma e manchas na pele",
    text: "Investigação da causa das manchas e plano de clareamento, com orientação de fotoproteção.",
  },
  {
    title: "Queda de cabelo (alopecia)",
    text: "Análise do padrão de queda, do histórico e de exames, com tratamento direcionado.",
  },
  {
    title: "Dermatite seborreica e caspa",
    text: "Tratamento da descamação, da oleosidade e da coceira no couro cabeludo e no rosto.",
  },
  {
    title: "Psoríase",
    text: "Principalmente acompanhamento de pacientes com diagnóstico já estabelecido, com ajuste do tratamento ao longo do tempo.",
  },
];

const otherConditions = [
  "Dermatite de contato",
  "Coceira na pele (prurido)",
  "Dermatite das mãos",
  "Queda de cabelo após estresse, doença ou outras mudanças (eflúvio telógeno)",
  "Calvície e alopecia androgenética",
  "Micose de pele — quando a avaliação presencial ou exames complementares não forem necessários de imediato",
  "Hiperidrose (suor excessivo)",
  "Queratose pilar (pequenas bolinhas ásperas na pele)",
  "Alterações e fragilidade das unhas, nos casos em que a avaliação online seja suficiente",
  "Líquen simples crônico, especialmente em pacientes previamente avaliados",
];

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessageCircle,
    title: "Fale com a equipe",
    text: "Entre em contato pelo WhatsApp e conte brevemente o motivo da consulta.",
  },
  {
    icon: CalendarCheck,
    title: "Agende o horário",
    text: "Escolha a data e o horário mais convenientes. Você recebe as orientações para o dia da consulta.",
  },
  {
    icon: Video,
    title: "Consulta por videochamada",
    text: "A Dra. Janaína conversa sobre o seu histórico, avalia a pele pela câmera e por fotos e define a conduta.",
  },
  {
    icon: FileText,
    title: "Tratamento e retorno",
    text: "Você recebe receitas e orientações digitalmente e combina o acompanhamento da sua evolução.",
  },
];

const inPersonCases = [
  "Avaliação de pintas e sinais (dermatoscopia e mapeamento)",
  "Lesões que precisam de biópsia ou exames feitos em consultório",
  "Procedimentos estéticos e cirúrgicos",
  "Casos que exigem exame físico mais detalhado",
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "A consulta online é segura e regulamentada?",
    answer:
      "Sim. A teleconsulta é regulamentada pelo Conselho Federal de Medicina e permite avaliar com segurança muitas condições de pele, cabelo e unhas. Se, durante a consulta, a Dra. identificar a necessidade de exame presencial, você será orientado(a) sobre o melhor caminho.",
  },
  {
    question: "Atende pacientes de qualquer cidade?",
    answer:
      "Sim. O atendimento online está disponível para pacientes de todo o Brasil. Basta ter um celular ou computador com câmera e acesso à internet.",
  },
  {
    question: "As receitas e os pedidos de exames são válidos?",
    answer:
      "Sim. Receitas, pedidos de exames e outros documentos, quando indicados, são emitidos em formato digital com assinatura eletrônica e enviados para você após a consulta. Alguns medicamentos de controle especial têm regras específicas — a Dra. orienta caso a caso.",
  },
  {
    question: "O que preciso preparar para a consulta?",
    answer:
      "Escolha um local reservado e bem iluminado, com boa conexão de internet. Tenha em mãos exames anteriores e a lista de medicamentos e produtos que você usa. Fotos nítidas das lesões, feitas com luz natural, também ajudam na avaliação.",
  },
  {
    question: "A consulta online é coberta por plano de saúde?",
    answer:
      "O atendimento da Dra. Janaína Martins é exclusivamente particular, inclusive na modalidade online. Podemos fornecer nota fiscal / recibo para que você solicite reembolso, quando aplicável ao seu plano.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Clique em qualquer botão de agendamento desta página para falar com a equipe pelo WhatsApp. Vamos verificar se o seu caso pode ser atendido online e encontrar o melhor horário para você.",
  },
];

function useOnlineConsultationJsonLd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Consulta com dermatologista online",
          description:
            "Atendimento dermatológico online por videochamada para pacientes de todo o Brasil.",
          author: {
            "@type": "Person",
            name: site.doctorName,
            jobTitle: "Dermatologista",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
}

export function OnlineConsultation() {
  useSeo({
    title: "Dermatologista online para todo o Brasil | Dra. Janaína Martins",
    description:
      "Consulte com a dermatologista Dra. Janaína Martins por videochamada, sem sair de casa. Atendimento online para acne, rosácea, melasma, queda de cabelo, dermatites e psoríase.",
  });
  useOnlineConsultationJsonLd();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-xs font-medium tracking-wide text-rose-700">
              <Video size={14} /> Atendimento online para todo o Brasil
            </span>

            <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
              Consulte com uma dermatologista{" "}
              <span className="italic text-rose-600">sem sair de casa</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/70 lg:mx-0">
              Consulta por videochamada com a Dra. Janaína Martins, com o mesmo
              cuidado, atenção e plano de tratamento individualizado do
              atendimento no consultório — de qualquer lugar do país.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <WhatsAppButton message={whatsAppMessage}>
                Agendar consulta online
              </WhatsAppButton>
              <a
                href="#condicoes"
                className="text-sm font-medium text-ink/70 underline decoration-rose-300 decoration-2 underline-offset-4 transition hover:text-rose-700"
              >
                Ver o que é atendido online
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-rose-200/70 bg-white/60 px-4 py-3 text-xs text-ink/60 sm:text-sm">
              <ShieldCheck size={18} className="shrink-0 text-rose-600" />
              <span>
                Atendimento{" "}
                <strong className="text-ink/80">exclusivamente particular</strong>
              </span>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-rose-200 sm:-inset-6" />
            <img
              src={heroImg}
              alt={`${site.doctorName}, dermatologista`}
              className="aspect-3/4 w-full rounded-[2rem] object-cover shadow-2xl shadow-rose-900/10"
            />
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Consulta por videochamada
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="bg-cream-dark/60 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
              Por que consultar online
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Cuidado especializado, onde você estiver
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condições atendidas */}
      <section id="condicoes" className="scroll-mt-28 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
              O que é atendido online
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Principais condições tratadas por teleconsulta
            </h2>
            <p className="mt-4 text-ink/70">
              Condições de pele e cabelo que, na maioria dos casos, podem ser
              avaliadas e acompanhadas com segurança por videochamada.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainConditions.map(({ title, text }, index) => (
              <div
                key={title}
                className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="font-serif text-3xl italic text-rose-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-rose-100 bg-rose-50/70 p-7 sm:p-10">
            <h3 className="font-serif text-2xl text-ink">
              Outras condições que podem ser avaliadas online, conforme o caso
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
              {otherConditions.map((condition) => (
                <li key={condition} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
                  <CircleCheck size={17} className="mt-0.5 shrink-0 text-rose-500" />
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-ink/60">
              Não sabe se o seu caso pode ser atendido online? Fale com a equipe.
            </p>
            <WhatsAppButton
              variant="outline"
              message="Olá! Gostaria de saber se o meu caso pode ser atendido na consulta online com a Dra. Janaína Martins."
            >
              Tirar dúvidas pelo WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-cream-dark/60 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
              Passo a passo
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Como funciona a consulta online
            </h2>
          </div>

          <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <li
                key={title}
                className="relative rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-600 text-white">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-400">
                    Passo {index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quando o presencial é indicado */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
              Transparência
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Quando a consulta presencial é indicada
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              A teleconsulta resolve muitos casos, mas não substitui o exame
              presencial em todas as situações. Se a Dra. Janaína identificar
              essa necessidade, você será orientado(a) sobre o melhor caminho
              para o seu cuidado.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-ink/60">
              <MapPin size={17} className="mt-0.5 shrink-0 text-rose-600" />
              Atendimento presencial em {site.location.neighborhoodCity}.
            </p>
          </div>

          <ul className="space-y-3">
            {inPersonCases.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-white p-5 text-sm text-ink/70 shadow-sm"
              >
                <Info size={18} className="mt-0.5 shrink-0 text-rose-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="bg-cream-dark/60 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
              Dúvidas
            </span>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-rose-100 bg-white px-6 py-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-rose-600 transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
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
            Cuide da sua pele de onde você estiver
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-rose-50/80">
            Agende sua consulta online com a Dra. Janaína Martins e receba um
            plano de cuidado feito para você.
          </p>

          <div className="mx-auto mt-8 flex max-w-md items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-left text-sm text-rose-50/90">
            <Info size={18} className="mt-0.5 shrink-0" />
            <p>
              O atendimento online também é <strong>particular</strong>.
              Consulte-nos sobre nota fiscal para reembolso.
            </p>
          </div>

          <div className="mt-9">
            <WhatsAppButton
              variant="solid"
              className="!bg-white !text-rose-800 hover:!bg-rose-50 !shadow-none"
              message={whatsAppMessage}
            >
              Agendar consulta online
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
