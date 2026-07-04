<div align="center">

# AumigosSocial

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Victory](https://img.shields.io/badge/Victory-9C4EFF?style=flat-square)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=flat-square&logo=css3&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)


</div>

## Sobre

Rede social de fotos de pets, desenvolvida durante o curso de **React da Origamid**. Usuários se cadastram, fazem login, publicam fotos, comentam nas fotos de outros usuários e acompanham estatísticas de acesso do próprio perfil, tudo consumindo uma API REST externa com autenticação por JWT.

## O que aprendi / O que pratiquei

- **Autenticação com JWT e persistência de sessão**: login gera um token guardado no `localStorage`, e um `autoLogin` no `useEffect` valida esse token a cada carregamento da aplicação, evitando pedir login de novo a cada refresh.
- **Context API para estado global de usuário**: `UserContext` + `UserStorage` centralizam dados do usuário logado, estado de loading/erro e as funções de login/logout, disponíveis para qualquer componente sem prop drilling.
- **Rotas protegidas**: `ProtectedRoute` verifica o estado de login antes de renderizar páginas restritas (como `/conta`), redirecionando para `/login` quando necessário, e lidando também com o estado "ainda não sei" (login indefinido) enquanto o token está sendo validado.
- **Hooks customizados reutilizáveis**:
  - `useFetch` padroniza chamadas à API (loading, erro, resposta) em um único hook, evitando repetir a mesma lógica de `try/catch/finally` em cada componente.
  - `useForm` centraliza validação de campos (email, senha com regex de força, números) e mensagens de erro, reaproveitado em todos os formulários da aplicação.
  - `useMedia` observa media queries do CSS via `matchMedia`, permitindo adaptar comportamento de componentes ao tamanho de tela direto em JavaScript.
- **Abstração das chamadas de API**: o arquivo `api.jsx` isola toda a montagem de URL, headers e body de cada endpoint (login, usuário, fotos, comentários, senha, estatísticas), deixando os componentes livres de detalhes de implementação da API.
- **Upload de arquivos com `FormData`**: envio de fotos usando `multipart/form-data` em vez de JSON, para lidar com upload de imagem.
- **Visualização de dados com Victory**: gráficos de pizza e de barras (`VictoryPie`, `VictoryBar`) para exibir estatísticas de acesso do usuário, com os dados da API transformados no formato esperado pela biblioteca.
- **CSS Modules** em cada componente, evitando conflito de classes e mantendo o estilo escopado por arquivo.


## Como rodar

```bash
# Clone o repositório
git clone https://github.com/niusdev/AumigosSocial.git

# Entre na pasta do projeto
cd AumigosSocial

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```

> Não é necessário `.env` — a URL da API já está definida em `src/api.jsx`, apontando para a API pública de testes da Origamid.

## Estrutura do projeto

```
src/
├── App.jsx                  # Rotas da aplicação
├── UserContext.jsx          # Context de autenticação
├── UserStorage.jsx          # Provider com login, logout e autoLogin
├── api.jsx                  # Definição de todos os endpoints da API
├── hooks/
│   ├── useFetch.jsx          # Hook genérico de requisição
│   ├── useForm.jsx           # Hook de validação de formulários
│   └── useMedia.jsx          # Hook de media query
└── components/
    ├── Header.jsx / Footer.jsx
    ├── Home.jsx
    ├── Login/                # Login, cadastro e recuperação de senha
    ├── Feed/                 # Feed de fotos e modal
    ├── Photo/                # Página de foto, comentários e exclusão
    ├── User/                 # Perfil, posts e gráficos de estatísticas
    └── Helpers/               # Loading, erro, imagem e rota protegida
```
## Autor

Feito por **Vinícius Gomes Damascena**

[![GitHub](https://img.shields.io/badge/GitHub-niusdev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/niusdev)