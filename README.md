# Dra. Janaína Martins — Site

Landing page da Dra. Janaína Martins, médica. Site novo,
construído em React, para substituir o site antigo (WordPress) que saiu do
ar. Objetivo: atrair novos pacientes e converter visitas em contato via
WhatsApp, deixando claro que o atendimento é **particular** (sem convênios).

## Stack técnica

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build e dev server
- [React Router](https://reactrouter.com/) — roteamento client-side (`/`, `/consulta-online`, `/conteudos`, `/conteudos/:slug`)
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização (via `@tailwindcss/vite`, sem `tailwind.config.js`; tokens em `src/index.css`)
- [lucide-react](https://lucide.dev/) — ícones
- [oxlint](https://oxc.rs/) — lint

Sem backend, sem banco de dados, sem CMS — é um site 100% estático (SPA com
poucas rotas: a landing page e a página de artigos). O "envio de formulário"
é, na verdade, um redirecionamento para o WhatsApp com mensagem pré-preenchida.
Os artigos de `/conteudos` são conteúdo estático embutido no código (sem CMS),
pensados para não mudar com frequência.

## Como rodar

```bash
npm install
npm run dev       # http://localhost:5173
```

Outros comandos:

```bash
npm run build     # gera build de produção em dist/
npm run preview   # serve o build de produção localmente
npm run lint      # roda o oxlint
```

## Estrutura do projeto

```
src/
├── assets/images/        # fotos usadas no site
├── pages/
│   ├── Home.tsx           # monta as seções da landing page (/)
│   ├── Articles.tsx       # listagem de artigos (/conteudos)
│   ├── ArticleDetail.tsx  # artigo individual (/conteudos/:slug)
│   └── NotFound.tsx
├── content/
│   └── articles.ts        # ⚠️ conteúdo de todos os artigos (ver abaixo)
├── components/            # seções da landing page + componentes de UI
│   ├── Layout.tsx          # Navbar + Footer + WhatsApp compartilhados entre rotas
│   ├── ScrollToHash.tsx    # scroll suave até âncoras da home ao navegar
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx        # procedimentos/tratamentos
│   ├── Testimonials.tsx    # depoimentos reais (Google)
│   ├── CtaSection.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── WhatsAppButton.tsx
│   └── icons/
├── context/
│   └── WhatsAppContext.tsx   # lógica do modal de confirmação + wa.me
├── hooks/
│   └── useSeo.ts           # define <title> / meta description por página
├── config/
│   └── site.ts             # ⚠️ TODOS os dados de negócio (ver abaixo)
├── App.tsx                  # definição das rotas
├── main.tsx                 # monta o BrowserRouter
└── index.css                # design tokens do Tailwind v4 (@theme)
```

## Antes de publicar em produção — checklist

Os dados de negócio ficam centralizados em **`src/config/site.ts`** (é o
único arquivo que precisa mudar — todo o site lê os dados dali). Já estão
preenchidos com informações reais, exceto:

- [ ] E-mail de contato (`email`) — ainda placeholder, não foi fornecido
- [ ] Revisar/trocar as fotos de banco de imagens usadas em "Procedimentos"
      (consulta, acne, peelings, tricologia) por fotos reais da clínica quando
      a Dra. Janaína enviar (ver `src/assets/images/`)
- [ ] Configurar domínio próprio e SSL na hospedagem escolhida
- [ ] Configurar o rewrite de SPA no host (ver seção "Deploy" abaixo) —
      sem isso, `/conteudos` e as páginas de artigo dão 404 ao acessar a URL direto
- [ ] Adicionar Google Analytics / Meta Pixel, se for usar mídia paga

## Como funciona o CTA de WhatsApp

Todo botão de "Agendar consulta" / "Falar no WhatsApp" passa por
`useWhatsApp().requestWhatsApp()` (ou pelo componente `<WhatsAppButton>`),
que abre um modal de confirmação reforçando que o atendimento é
**exclusivamente particular** antes de redirecionar para `wa.me`. Isso é
proposital — a cliente pediu que ficasse muito claro que não há atendimento
por convênio, para evitar contatos de pacientes que buscam esse tipo de
atendimento.

Não crie links diretos `<a href="https://wa.me/...">` fora desse fluxo — use
sempre `WhatsAppButton` ou o hook `useWhatsApp`.

## Página de Conteúdos (`/conteudos`)

Blog estático de artigos sobre dermatologia. Acessível pelo menu, mas não faz
parte do fluxo de seções da landing page.

- Todo o conteúdo (título, descrição, categoria, imagem de capa, texto em
  blocos de heading/parágrafo/lista) vive em **`src/content/articles.ts`**.
  Para adicionar, editar ou remover um artigo, esse é o único arquivo a mexer.
- Cada artigo tem um `slug` que vira a URL: `/conteudos/<slug>` — escolha
  slugs curtos e descritivos (bons para SEO), sempre em minúsculas e com
  hífen.
- `ArticleDetail.tsx` define `<title>`/meta description por artigo
  (`useSeo.ts`) e injeta dados estruturados (JSON-LD `MedicalWebPage`) para
  ajudar na indexação e exibição em resultados de busca do Google.
- O CTA de WhatsApp ao final de cada artigo usa o mesmo `WhatsAppButton` /
  modal de confirmação do resto do site — a regra de "atendimento particular"
  vale aqui também.

## Design

- Paleta e fontes definidas em `src/index.css` (bloco `@theme` do Tailwind v4):
  tons de rosa (`rose-50` a `rose-900`), fundo `cream`, texto `ink`, detalhe
  `gold`.
- Tipografia: `Cormorant Garamond` (serifada, títulos) + `Jost` (sans-serif,
  corpo de texto), carregadas via Google Fonts no `index.html`.
- Referência visual usada no design: site da Dra. Adriana Rodrigues
  (dermatologista) — layout de landing page única, seções de hero, sobre,
  procedimentos, depoimentos e contato.

## Origem do conteúdo

O site antigo (WordPress) não tinha banco de dados disponível — só os
arquivos estáticos, em `../legacy-site/`. As fotos da médica e de
procedimentos usadas aqui foram extraídas de lá
(`wp-content/uploads/2026/...`). Os depoimentos em `Testimonials.tsx` são
avaliações reais do Google, transcritas a partir de prints encontrados na
mesma pasta. Ver `../CLAUDE.md` para mais detalhes sobre o material de
referência.

## Deploy

O projeto é um build estático (`npm run build` gera `dist/`), então pode ser
publicado em qualquer host de arquivos estáticos — Vercel, Netlify,
Cloudflare Pages, ou até hospedagem compartilhada tradicional apontando para
o conteúdo de `dist/`. Nenhuma variável de ambiente é necessária.

**Importante — rewrite de SPA:** como o site usa rotas client-side (React
Router) para `/conteudos` e `/conteudos/:slug`, o host precisa redirecionar
qualquer caminho para `index.html` (senão acessar essas URLs direto, ou dar
F5 nelas, retorna 404). Já incluído no repositório:

- **Vercel**: `vercel.json` (rewrite automático, zero configuração extra).
- **Netlify**: `public/_redirects` (copiado para `dist/` no build).
- **Outro host** (Apache, Nginx, hospedagem compartilhada): configurar
  manualmente uma regra equivalente a "qualquer rota não encontrada serve
  `index.html` com status 200".
