# PROMOVE — Cursos Profissionalizantes

Site institucional em Next.js App Router e TypeScript, preparado para Vercel. Requer Node.js 22 ou 24 e npm.

## Desenvolvimento

```sh
npm ci
npm run dev
```

## Verificação e produção

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Rotas: `/`, `/sobre`, `/cursos`, `/cursos/[slug]`, `/treinamentos`, `/galeria`, `/contato`, `/politica-de-privacidade`. URLs desconhecidas exibem 404.

## Edição

- `lib/data.ts`: contatos, cursos, tópicos introdutórios, perguntas frequentes e acervo.
- `components/sections.tsx`: conteúdo institucional e seções.
- `components/ui.tsx`: catálogo, galeria, formulário, menu e introdução.
- `app/globals.css`: identidade visual, responsividade e movimento reduzido.
- `public/images`: referências fornecidas no ZIP. São tratadas como ilustrativas, sem afirmar que representam alunos ou instalações reais. A imagem de certificado demonstrativo não é exibida como credencial.

## Publicação na Vercel

Importe este repositório como projeto Next.js. Configure `NEXT_PUBLIC_SITE_URL` com a origem HTTPS real, sem barra final, antes do build de produção. Essa variável habilita URLs absolutas de Open Graph e o sitemap com domínio real. Não foi inventado domínio de produção. Sem essa variável, o sitemap fica vazio.

Antes da publicação comercial, confirme telefones (principal: 34 99182-4677), endereço, catálogo, disponibilidade, requisitos, carga horária, certificação, condições comerciais e direitos das imagens. Revise a política de privacidade com os dados do responsável. Depoimentos reais ainda não foram fornecidos. A categoria agrícola é uma proposta de capacitações a confirmar.

## Contatos e privacidade

O formulário valida os dados e abre uma mensagem estruturada no WhatsApp. O visitante conclui o envio no aplicativo. Não existe backend, banco de leads ou mensagem automática de envio concluído. O site não armazena os campos.

Eventos `promove:conversion` são emitidos no navegador para cliques de WhatsApp e formulário. O atributo `detail` informa a origem ou o curso. Nenhum serviço de analytics é conectado; para medir conversões em produção, conecte uma ferramenta com tratamento de privacidade adequado. Não transmita campos pessoais do formulário a analytics.

A introdução usa `sessionStorage` para não se repetir na sessão e respeita `prefers-reduced-motion`. Galeria com foco modal, Escape, setas e navegação por botões. Fontes Inter e Space Grotesk são servidas localmente, sem chamadas ao Google Fonts.

## Limitações intencionais

Sem vídeos fornecidos: galeria estática, sem player falso. Categorias sem registros mostram estado vazio explícito. Sem mapa incorporado até validação de localização; o link de busca/rota está disponível. Pré-requisitos, certificado e horários não confirmados são apresentados para consulta. Não há promessa de empregabilidade.

## Teste de navegador

Com o servidor em execução e Playwright instalado, execute `node scripts/smoke.cjs`. Use `CHROMIUM_PATH=/usr/bin/chromium` para um Chromium do sistema ou instale o navegador com `npx playwright install chromium`. O teste não envia mensagens; intercepta a abertura do WhatsApp no formulário.

## Correção da implantação Vercel

O commit inicial continha apenas o README e não incluía o aplicativo. A implantação precisa usar o commit com `app/`, `package.json`, `package-lock.json` e `vercel.json`. O arquivo `vercel.json` declara Next.js e os comandos de instalação/build. Na Vercel, mantenha Root Directory na raiz do repositório e Output Directory no padrão do framework (sem override). A branch de produção é `main`. Um redeploy do commit inicial não publica o site.

Na Vercel, a origem de produção disponibilizada em `VERCEL_PROJECT_PRODUCTION_URL` é usada automaticamente para metadata e sitemap quando `NEXT_PUBLIC_SITE_URL` não está definido. Para um domínio próprio, configure explicitamente `NEXT_PUBLIC_SITE_URL`.
