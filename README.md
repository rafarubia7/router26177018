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
```

## Opcionais feitos

Nenhum até agora.

## Como o dado flui

1. Em `Cadastro.jsx`, o formulário controlado guarda os campos num estado local e valida ao salvar.
2. Se estiver válido, chama `adicionarRegistro(novo)`, função que veio do `App.jsx` por props.
3. No `App.jsx`, `adicionarRegistro` faz `setRegistros([...registros, novo])`, atualizando o `useState` sem mutar o array.
4. O `App` passa `registros` para a `Visualizacao` (cards) e `registros.length` para a Home e a Navbar, que atualizam sem recarregar a página.
