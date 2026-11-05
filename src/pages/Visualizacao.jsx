import { useState } from 'react'
import { Link } from 'react-router-dom'

// visualização no formato C = 2: cards em grade (CSS Grid), um card por equipamento
// recebo `titulo` (uma constante) e `registros` (o estado) do App.jsx,
// e também `removerRegistro`, a função do App que tira um equipamento do estado
function Visualizacao({ titulo, registros, removerRegistro }) {
  // texto da busca, fica só aqui na página (não precisa ir pro App)
  const [busca, setBusca] = useState('')

  // se não tiver nenhum equipamento, mostro um aviso com link pro cadastro
  if (registros.length === 0) {
    return (
      <section className="cartao-centro">
        <h1>{titulo}</h1>
        <p>Nenhum equipamento cadastrado ainda.</p>
        <Link to="/equipamentos/novo" className="botao">Cadastrar o primeiro</Link>
      </section>
    )
  }

  // filtra pelo patrimônio enquanto digita, sem ligar pra maiúscula/minúscula
  const termo = busca.trim().toLowerCase()
  const filtrados = registros.filter((registro) =>
    registro.patrimonio.toLowerCase().includes(termo),
  )

  return (
    <section>
      <h1>{titulo}</h1>

      <div className="busca">
        <label htmlFor="busca">Buscar por patrimônio</label>
        <input
          id="busca"
          type="search"
          placeholder="Ex.: PAT-0001"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {filtrados.length === 0 ? (
        <p className="aviso">Nenhum equipamento encontrado para &quot;{busca}&quot;.</p>
      ) : (
        <div className="grade-cards">
          {/* uso o id como key, nunca o índice do array */}
          {filtrados.map((registro) => (
            <article key={registro.id} className="card">
              {/* clicar no patrimônio abre a página de detalhes */}
              <h2>
                <Link to={`/equipamentos/${registro.id}`} className="link-card">
                  {registro.patrimonio}
                </Link>
              </h2>
              <span className="etiqueta">{registro.tipo}</span>
              <dl>
                <dt>Ano de aquisição</dt>
                <dd>{registro.anoAquisicao}</dd>
                <dt>Sala</dt>
                <dd>{registro.sala}</dd>
              </dl>
              <div className="acoes-card">
                <Link to={`/equipamentos/${registro.id}/editar`} className="botao botao-pequeno">
                  Editar
                </Link>
                <button
                  type="button"
                  className="botao botao-perigo"
                  onClick={() => removerRegistro(registro.id)}
                >
                  Remover
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Visualizacao
