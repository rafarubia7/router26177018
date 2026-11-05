import { Link } from 'react-router-dom'

// visualização no formato C = 2: cards em grade (CSS Grid), um card por equipamento
// recebo `titulo` (uma constante) e `registros` (o estado) do App.jsx
function Visualizacao({ titulo, registros }) {
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

  return (
    <section>
      <h1>{titulo}</h1>
      <div className="grade-cards">
        {/* uso o id como key, nunca o índice do array */}
        {registros.map((registro) => (
          <article key={registro.id} className="card">
            <h2>{registro.patrimonio}</h2>
            <span className="etiqueta">{registro.tipo}</span>
            <dl>
              <dt>Ano de aquisição</dt>
              <dd>{registro.anoAquisicao}</dd>
              <dt>Sala</dt>
              <dd>{registro.sala}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Visualizacao
