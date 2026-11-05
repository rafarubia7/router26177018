import { Link, useParams } from 'react-router-dom'

// página de detalhes de um equipamento (opcional O2)
// recebo `registros` do App.jsx, que guarda o estado, e procuro o equipamento pelo id da URL
function Detalhes({ registros }) {
  // o useParams pega o :id que está na rota /equipamentos/:id
  const { id } = useParams()

  // o id da URL vem como texto, então comparo como texto também
  const registro = registros.find((item) => String(item.id) === id)

  // se ninguém tiver esse id, aviso em vez de quebrar a página
  if (!registro) {
    return (
      <section className="cartao-centro">
        <h1>Equipamento não encontrado</h1>
        <p>Não existe equipamento com o id <code>{id}</code>.</p>
        <Link to="/equipamentos" className="botao">Voltar para a lista</Link>
      </section>
    )
  }

  return (
    <section className="cartao-form">
      <h1>{registro.patrimonio}</h1>
      <dl className="detalhes">
        <dt>Patrimônio</dt>
        <dd>{registro.patrimonio}</dd>
        <dt>Ano de aquisição</dt>
        <dd>{registro.anoAquisicao}</dd>
        <dt>Tipo</dt>
        <dd>{registro.tipo}</dd>
        <dt>Sala</dt>
        <dd>{registro.sala}</dd>
      </dl>
      <div className="acoes">
        <Link to={`/equipamentos/${registro.id}/editar`} className="botao">Editar</Link>
        <Link to="/equipamentos" className="botao botao-secundario">Voltar para a lista</Link>
      </div>
    </section>
  )
}

export default Detalhes
