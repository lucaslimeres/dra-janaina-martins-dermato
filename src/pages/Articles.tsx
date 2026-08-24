import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getArticlesSortedByDate } from "../content/articles";
import { useSeo } from "../hooks/useSeo";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function Articles() {
  useSeo({
    title: "Conteúdos sobre dermatologia | Dra. Janaína Martins",
    description:
      "Artigos da Dra. Janaína Martins sobre saúde da pele, cirurgias dermatológicas, psoríase, tratamentos estéticos e cuidados dermatológicos.",
  });

  const articles = getArticlesSortedByDate();

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-600">
            Conteúdos
          </span>
          <h1 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Artigos sobre saúde da pele
          </h1>
          <p className="mt-4 text-ink/70">
            Informação confiável, escrita com base na prática clínica da Dra. Janaína Martins,
            para te ajudar a entender melhor a sua pele.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <Link to={`/conteudos/${article.slug}`} className="block overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mt-4 font-serif text-xl leading-snug text-ink">
                  <Link
                    to={`/conteudos/${article.slug}`}
                    className="transition hover:text-rose-700"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="mt-3 grow text-sm leading-relaxed text-ink/60">
                  {article.description}
                </p>

                <div className="mt-5 flex items-center justify-between text-xs text-ink/50">
                  <time dateTime={article.publishedAt}>
                    {dateFormatter.format(new Date(`${article.publishedAt}T12:00:00`))}
                  </time>
                  <span>{article.readingTime} de leitura</span>
                </div>

                <Link
                  to={`/conteudos/${article.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-rose-700"
                >
                  Ler artigo <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
