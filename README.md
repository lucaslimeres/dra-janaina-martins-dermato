# Dra. Janaína Martins — Site

Landing page da Dra. Janaína Martins, médica dermatologista. Site novo,
construído em React, para substituir o site antigo (WordPress) que saiu do
ar. Objetivo: atrair novos pacientes e converter visitas em contato via
WhatsApp, deixando claro que o atendimento é **particular** (sem convênios).

## Stack técnica

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build e dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização (via `@tailwindcss/vite`, sem `tailwind.config.js`; tokens em `src/index.css`)
- [lucide-react](https://lucide.dev/) — ícones
- [oxlint](https://oxc.rs/) — lint

Sem backend, sem banco de dados, sem CMS — é um site 100% estático (SPA de
uma página só). O "envio de formulário" é, na verdade, um redirecionamento
para o WhatsApp com mensagem pré-preenchida.

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
├── assets/images/        # fotos usadas no site (extraídas do site antigo)
├── components/           # todas as seções e componentes de UI
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx      # procedimentos/tratamentos
│   ├── Testimonials.tsx  # depoimentos reais (Google)
│   ├── CtaSection.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── WhatsAppButton.tsx
│   └── icons/
├── context/
│   └── WhatsAppContext.tsx   # lógica do modal de confirmação + wa.me
├── config/
│   └── site.ts            # ⚠️ TODOS os dados de negócio (ver abaixo)
├── App.tsx                 # monta as seções na ordem final da página
├── main.tsx
└── index.css               # design tokens do Tailwind v4 (@theme)
```

## Antes de publicar em produção — checklist

Todos os dados abaixo são placeholders e **precisam** ser confirmados com a
cliente e atualizados em **`src/config/site.ts`** (é o único arquivo que
precisa mudar — todo o site lê os dados dali):

- [ ] Número real de WhatsApp (`whatsapp.number`, formato `55DDDNÚMERO`, só dígitos)
- [ ] Endereço real da clínica (`location.addressLine`, `neighborhoodCity`, `mapsUrl`)
- [ ] CRM/RQE real da médica (`crm`)
- [ ] Instagram real (`instagram.handle`, `instagram.url`)
- [ ] E-mail de contato (`email`)
- [ ] Revisar/trocar imagens genéricas se a cliente enviar fotos novas (ver `src/assets/images/`)
- [ ] Configurar domínio próprio e SSL na hospedagem escolhida
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
