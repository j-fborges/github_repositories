![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> [!TIP]
> Acess the website at [https://github-repositories-nmqweerar-joaotallers-projects.vercel.app/](https://github-repositories-nmqweerar-joaotallers-projects.vercel.app/)

# Github Repositories Explorer - Simple SPA with GitHub API consumption

Um projeto simples de SPA com consumo da API do GitHub e listagem dos repositórios e favoritos de um usuário com filtragem da query por nome dos repositórios e um explorador das issues de e outros dados desses repositórios.

>EN:
>A simple SPA project for consuming GitHub API and browsing a user's repos and starred repos with repo name string query filtering for results.

## Setup local do projeto:
> Local Setup:

Faça a clonagem go repositório:

	git@github.com:j-fborges/github_repositories.git

 

Instale as dependências:

	npm install

 

Crie o arquivo `.env` na raiz do projeto e configure as variáveis de ambiente como no exemplo `.env.example`:

	VITE_GITHUB_API_ACESS_TOKEN=your-github-api-acess-token
	VITE_GITHUB_USER_PROFILE=your-github-profile-here
 
> [!IMPORTANT]
> O seu login em `VITE_GITHUB_USER_PROFILE`
> 
> Token de acesso ao GitHub API em `VITE_GITHUB_USER_PROFILE`
> 
> O seu **Token de acesso ao API do Github pode ser gerado em: [GitHub Personal Acess Tokens](https://github.com/settings/personal-access-tokens)**



Rode o servidor local:

	npm run dev



## Memorial Descritivo do projeto:
> Project Overview:

### Estrutura em:
>Structure in:

- **React**
- **TypeScript**
- **Vite**
- **Zustand**
- **TailwindCSS**
- **TanStack's React Query**

 ### Metodologias e conceitos usados para estruturação do código:
 >Methodologies used for the code structure

**Architecture & component structure**

- **SOLID**
- **KISS**
- **YAGNI**
- **DRY**
 
 **CSS & Styling:**
 
- **BEM** - "Block - Element - Modifyier"
- **SMACSS** - "Scalable and Modular Architecture for CSS"
- **OOCSS** - "Object Oriented CSS"

### Hierarquia de componentes e hooks:

O projeto possui estrutura escalavel empregando o uso de padrões de engenharia se baseando no principio de única responsabilidade.

A estrutura componentizada é separada em 3 partes principais, cada uma com seu próprio hook para requisição de informações _não redundante_: 

- Informação do Usuário
- Listagem e filtro de repositórios
- Explorador de Repositórios

Os componentes e subcomponentes (todos eles ***functional components em TSX***) lidam com responsabilidades isoladas, variando entre Renderização de Layout, Conteúdo, Gestão de condicionais, e Controle de Estados.

Alguns componentes usam do padrão ***"Decorador"(Component Wrappers)*** na renderização de conteúdo de componentes seriados.

O consumo de dados externos é feita através da API GraphQL do Github empregando um padrão ***"Fachada"*** para a execução da requisição e filtragem do resultados por parametros através de ***hooks***.

### Nomemclatura de classes CSS e estilização:

Estilização através de TailwindCSS e classes nomeadas no padrão `block__element--modifyer` visando o futuro aninhamento (post-css) baseado na **_componentização_ e _estilização_ orientada ao objeto** assim como a reutilização de _utility classes_ customizadas.
