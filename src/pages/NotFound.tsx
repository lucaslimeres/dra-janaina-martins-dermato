import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";

export function NotFound() {
  useSeo({
    title: "Página não encontrada | Dra. Janaína Martins",
    description: "A página que você procura não foi encontrada.",
  });

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32 text-center sm:pt-40">
      <span className="font-serif text-6xl text-rose-300">404</span>
      <h1 className="mt-4 font-serif text-2xl text-ink">Página não encontrada</h1>
      <p className="mt-2 max-w-sm text-ink/60">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-rose-700"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
