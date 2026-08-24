import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getArticleBySlug, getArticlesSortedByDate } from "../content/articles";
import { useSeo } from "../hooks/useSeo";
import { site } from "../config/site";
import { WhatsAppButton } from "../components/WhatsAppButton";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

function useArticleStructuredData(article: ReturnType<typeof getArticleBySlug>) {
  useEffect(() => {
    if (!article) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      author: {
        "@type": "Person",
        name: site.doctorName,
        jobTitle: "Dermatologista",
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [article]);
}

export function ArticleDetail() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useSeo({
    title: article
      ? `${article.title} | Dra. Janaína Martins`
      : "Artigo não encontrado | Dra. Janaína Martins",
    description: article?.description ?? "",
  });

  useArticleStructuredData(article);

  if (!article) {
    return <Navigate to="/conteudos" replace />;
  }

  const otherArticles = getArticlesSortedByDate()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <nav className="flex items-center gap-1.5 text-xs text-ink/50" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-rose-700">
            Início
          </Link>
          <ChevronRight size={12} />
          <Link to="/conteudos" className="transition hover:text-rose-700">
            Conteúdos
          </Link>
        </nav>

        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">
          {article.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-ink/50">
          <span>{site.doctorName}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.publishedAt}>
            {dateFormatter.format(new Date(`${article.publishedAt}T12:00:00`))}
          </time>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime} de leitura</span>
        </div>

        <img
          src={article.coverImage}
          alt={article.title}
          className="mt-8 aspect-16/9 w-full rounded-2xl object-cover shadow-lg"
        />

        <div className="mt-10 space-y-5">
          {article.blocks.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="pt-4 font-serif text-2xl text-ink">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="list-disc space-y-2 pl-5 marker:text-rose-400">
                  {block.items?.map((item, j) => (
                    <li key={j} className="leading-relaxed text-ink/70">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="leading-relaxed text-ink/70">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-rose-100 bg-rose-50/60 p-7 text-center">
          <h3 className="font-serif text-xl text-ink">
            Quer conversar sobre o seu caso com a Dra. Janaína Martins?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
            Atendimento exclusivamente particular, em Sorocaba/SP.
          </p>
          <div className="mt-5">
            <WhatsAppButton
              message={`Olá! Li o artigo sobre "${article.title}" no site e gostaria de agendar uma consulta.`}
            >
              Agendar pelo WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        {otherArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="font-serif text-xl text-ink">Leia também</h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  to={`/conteudos/${other.slug}`}
                  className="group overflow-hidden rounded-xl border border-rose-100 bg-white shadow-sm transition hover:shadow-md"
                >
                  <img
                    src={other.coverImage}
                    alt={other.title}
                    className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <p className="p-4 text-sm font-medium leading-snug text-ink group-hover:text-rose-700">
                    {other.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
