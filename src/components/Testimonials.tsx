import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Cunha",
    text: "A doutora Janaína é muito atenciosa, ela escuta cada detalhe com atenção, tem um acolhimento incrível. Uma profissional nota 1000, as mãozinhas dela são leve e firme, que executa sua função com precisão, sem enrolação, direto ao ponto.",
  },
  {
    name: "Karine Cristiane",
    text: "Minha experiência com a Dra Janaína foi ótima! Profissional simpática, comprometida... minha dermatologista, não troco por nada!",
  },
  {
    name: "Joao Francisco",
    text: "Lugar excelente, fácil de estacionar, organizado e agradável. Dra Janaína profissional séria, comprometida, simpática... ótima médica. Só passo com ela.",
  },
  {
    name: "Celso Fabiano",
    text: "Excelente atendimento, gostei muito e recomendo a todos.",
  },
  {
    name: "Natalie Coscarelli",
    text: "Simplesmente a melhor!!!",
  },
  {
    name: "Enzo Henrique",
    text: "Ótima profissional.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
            Depoimentos
          </span>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Quem já passou por aqui
          </h2>
          <p className="mt-4 text-ink/70">
            Avaliações reais de pacientes no Google.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-rose-100 bg-white p-7 shadow-sm"
            >
              <Quote className="mb-3 text-rose-200" size={28} />
              <div className="mb-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="grow text-sm leading-relaxed text-ink/70">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-ink">
                {t.name}
                <span className="block text-xs font-normal text-ink/50">
                  Avaliação no Google
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
