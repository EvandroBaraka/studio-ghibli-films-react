# 🎬 Studio Ghibli Films – React + TypeScript

Aplicação desenvolvida em **React** com **TypeScript** que consome a **API pública do Studio Ghibli**, exibindo uma lista dos **10 primeiros filmes em ordem alfabética** e permitindo visualizar os **detalhes completos** de cada filme em uma página interna.

O projeto foi desenvolvido como parte de um **desafio técnico**, com foco em boas práticas de componentização, tipagem, consumo de API e rotas no frontend.

---

## 🚀 Funcionalidades

- Listagem dos **10 primeiros filmes do Studio Ghibli**
- Ordenação **alfabética** dos filmes
- Página de **detalhes do filme**
- **Rotas dinâmicas** com React Router
- **Loading** durante o carregamento dos dados
- **Tratamento de erros** de requisição
- **Lazy Loading** e **Suspense** para code splitting
- Interface organizada e responsiva

---

## 🛠️ Tecnologias utilizadas

- **React**
- **TypeScript**
- **React Router DOM**
- **Fetch API**
- **Tailwind CSS** *(se aplicável)*
- **Vite** *(ou Create React App)*

---

## 📁 Estrutura do projeto

```text
src/
├── components/
│   ├── FilmCard/
│   ├── Loading/
│   ├── ErrorMessage/
│   └── Layout/
│
├── pages/
│   ├── Home/
│   └── FilmDetails/
│
├── services/
│   └── ghibliApi.ts
│
├── types/
│   └── Film.ts
│
├── utils/
│   └── sortFilms.ts
│
├── routes/
│   └── AppRoutes.tsx
│
└── App.tsx
```
---

## 🌐 API utilizada

- Studio Ghibli API

- Endpoint principal:

```html
https://ghibliapi.vercel.app/films
```
---
## 🔄 Fluxo da aplicação

1. A página **Home** realiza a requisição para buscar os filmes

2. Os dados são ordenados alfabeticamente e limitados aos 10 primeiros

3. Durante o carregamento, um componente de **Loading** é exibido

4. Em caso de erro, uma **mensagem amigável** é apresentada ao usuário

5. Ao clicar em um filme, o usuário é redirecionado para a página de detalhes

6. A página de detalhes busca o filme pelo `id` via rota dinâmica
---
## ⏳ Loading e tratamento de erros

- O carregamento dos dados é controlado por estados locais (`isLoading`)

- Erros de requisição são tratados com `try/catch`

- Em caso de erro ou resposta inválida, a aplicação exibe um componente de erro

- O erro HTTP **404** é tratado no service, retornando `null` quando o filme não é encontrado
---
## ⚛️ Lazy Loading e Suspense

- As páginas são carregadas de forma assíncrona utilizando `React.lazy`

- O componente `Suspense` é aplicado no `Layout`, exibindo o loading durante o carregamento das rotas

- Essa abordagem melhora o desempenho e reduz o bundle inicial da aplicação
---
## ▶️ Como executar o projeto
```bash
# Clone o repositório
git clone https://github.com/EvandroBaraka/studio-ghibli-films-react

# Acesse a pasta do projeto
cd studio-ghibli-films-react

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```
---
## 📌 Observações finais

Este projeto foi desenvolvido com foco em:

Organização de código

Boas práticas com React e TypeScript

Separação de responsabilidades

Tratamento completo de estados da aplicação (loading, sucesso e erro)

---
## 👨‍💻 Autor
Desenvolvido por **Evandro Passaia**

E-mail - [evandropassaia@gmail.com](mailto:evandropassaia@gmail.com)

Facebook - [Evandro Passaia](https://www.facebook.com/evandro.passaiaze)

Linkedin - [Evandro Passaia](https://www.linkedin.com/in/evandro-passaia-62b9a5269/)
