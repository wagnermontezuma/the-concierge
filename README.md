# The Concierge

Um site para serviços de concierge de luxo, oferecendo experiências exclusivas e roteiros personalizados para viagens.

## Tecnologias Utilizadas

- Next.js
- TypeScript
- TailwindCSS
- next-intl para internacionalização (i18n)

## Funcionalidades

- Design responsivo
- Suporte para múltiplos idiomas (Português e Inglês)
- Páginas para experiências e roteiros de viagens
- Seção de contato

## Como Executar

1. Clone o repositório
```bash
git clone https://github.com/wagnermontezuma/the-concierge.git
cd the-concierge
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Internacionalização

O projeto suporta os seguintes idiomas:
- Português (pt) - padrão
- Inglês (en)

Para alternar entre os idiomas, acesse a URL com o prefixo do idioma, por exemplo:
- Português: `/pt/experiencias`
- Inglês: `/en/experiences`

## Estrutura do Projeto

- `/public/images` - Imagens utilizadas no site
- `/src/app/[locale]` - Páginas da aplicação com suporte a idiomas
- `/src/components` - Componentes reutilizáveis
- `/src/i18n` - Configurações e arquivos de internacionalização
