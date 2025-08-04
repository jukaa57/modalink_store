# 🛍️ ModaLink - Catálogo de Produtos

Este projeto é um desafio técnico desenvolvido com **Next.js**, cujo objetivo é criar uma aplicação de catálogo de produtos com funcionalidades completas de e-commerce como:

- Visualização de produtos
- Adição ao carrinho
- Busca de produtos
- Cálculo de quantidade e valor total do carrinho
- Página de detalhes com produtos similares

## Deploy
O projeto está disponível em http://modalink.157.250.195.14.sslip.io

O Deploy foi feito em uma vps utilizando [Coolify](https://coolify.io/) para facilitar o processo de build.

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) — para estilização responsiva
- [Context API](https://reactjs.org/docs/context.html) — para gerenciamento do carrinho

---

## 📦 Funcionalidades

- ✅ Listagem de produtos
- ✅ Buscar produtos por nome ou categoria
- ✅ Adicionar/remover produtos do carrinho
- ✅ Alterar a quantidade de produtos no carrinho
- ✅ Exibir o valor total do carrinho
- ✅ Ver página de detalhes do produto
- ✅ Ver sugestões de produtos similares baseado na categoria
- ✅ Finalizar Compra

---

## 🛠️ Instalação

Clone o projeto:

```bash
git clone https://github.com/jukaa57/modalink_store.git
cd modalink_store
```

Instale as dependências:

```bash
npm install
```

Variável de ambiente

```bash
Renomeie o arquivo .env.sample para .env.local
Coloque a url da api https://fakestoreapi.com

ex: API_URL=https://fakestoreapi.com
```

Execute o servidor de desenvolvimento:

```bash
npm dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---


## 📌 Desafio

Este projeto foi desenvolvido como um desafio técnico para avaliar habilidades com:

- Next.js e SSR
- Componentização e reutilização
- Context API para estados globais
- Lógica de carrinho e manipulação de listas
