# Laboratório de informática — Rafael

SPA em React + React Router para cadastrar e listar os equipamentos de um laboratório de informática.

- **Aluno:** Rafael Rubiá Oliveira Cardoso
- **RA:** 26177018

## Meus parâmetros

Dígitos do RA: 2, 6, 1, 7, 7, 0, 1, 8. O script `node scripts/parametros.js` mostra o cálculo.

| Parâmetro | Cálculo | Resultado |
|---|---|---|
| A (tema) | 18 (dois últimos dígitos) mod 20 | **18** → Laboratório de informática, slug `equipamentos` |
| Campos | Tabela A, linha 18 | Patrimônio (texto), Ano de aquisição (número), Tipo (Desktop, Notebook, Projetor), Sala |
| B (validação) | antepenúltimo dígito | **0** → campo principal com no mínimo 3 caracteres (com trim) |
| C (visualização) | 2+6+1+7+7+0+1+8 = 32 mod 6 | **2** → cards em grade (CSS Grid) |
| D (navbar) | 4º dígito do final = 7 → 7 mod 4 | **3** → topo, nome à esquerda, links à direita, "Equipamentos (N)" |
| Cor | 018 (três últimos dígitos) mod 360 | **h = 18** → `hsl(18, 60%, 35%)` = `#8f4424` |

## Como rodar

```bash
npm install
npm run dev     # servidor de desenvolvimento
npm run build   # build de produção
```

## Rotas

| Rota | Página |
|---|---|
| `/` | Home: nome do sistema, aluno e quantidade |
| `/equipamentos/novo` | Cadastro com validação |
| `/equipamentos` | Visualização em cards |
| `/equipamentos/:id` | Detalhes de um equipamento (opcional O2) |
| `/equipamentos/:id/editar` | Edição reaproveitando o formulário (opcional O4) |
| `*` | Página não encontrada (mostra o caminho digitado) |

## Estrutura de pastas

```
index.html
scripts/parametros.js   cálculo dos parâmetros pelo RA
src/
  main.jsx              BrowserRouter envolvendo o App
  App.jsx               estado (useState), funções e <Routes>
  index.css             --cor-principal e estilos
  components/Navbar.jsx
  components/Rodape.jsx
  pages/Home.jsx
  pages/Cadastro.jsx
  pages/Visualizacao.jsx
  pages/NaoEncontrada.jsx
  pages/Detalhes.jsx    (O2)
vercel.json, public/_redirects   (O8)
```

## Opcionais feitos

- **O3 Remover:** botão em cada card; `removerRegistro` (com `filter`) criada no App e passada por props.
- **O5 Busca:** campo na visualização que filtra pelo patrimônio enquanto digita (`filter` + `includes`, sem diferenciar maiúsculas).
- **O6 Persistência:** `localStorage` com `useEffect` + `JSON.stringify`; o estado inicial lê do `localStorage` com `try/catch` e, se não houver nada, usa os 3 de exemplo.
- **O2 Detalhes:** rota `/equipamentos/:id` com `useParams` + `find`; abre ao clicar no patrimônio do card; id inexistente mostra aviso.
- **O4 Editar:** rota `/equipamentos/:id/editar` usando o mesmo formulário do Cadastro; `editarRegistro` (com `map`) no App; a regra B continua valendo.
- **O8 Publicação:** `vercel.json` (rewrite para `/index.html`) e `public/_redirects` (Netlify). O deploy em si é manual.

## Publicação (O8)

Link: _(preencher depois do deploy)_

- **Vercel:** em vercel.com, "Add New Project", importe o repositório do GitHub e clique em Deploy (o Vite é detectado sozinho).
- **Netlify:** em app.netlify.com, "Add new site" → "Import an existing project", build command `npm run build`, publish directory `dist`.

## Como o dado flui

1. Em `Cadastro.jsx`, o formulário controlado guarda os campos num estado local e valida ao salvar.
2. Se estiver válido, chama `adicionarRegistro(novo)`, função que veio do `App.jsx` por props.
3. No `App.jsx`, `adicionarRegistro` faz `setRegistros([...registros, novo])`, atualizando o `useState` sem mutar o array.
4. O `App` passa `registros` para a `Visualizacao` (cards) e `registros.length` para a Home e a Navbar, que atualizam sem recarregar a página.

Remover e editar seguem o mesmo caminho: a página chama a função recebida por props (`removerRegistro` / `editarRegistro`) e o App atualiza o estado.
