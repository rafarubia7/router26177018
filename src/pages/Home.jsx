import { Link } from 'react-router-dom'

// página inicial do sistema
// recebo `quantidade` do App.jsx, que conta o tamanho do array de registros
function Home({ quantidade }) {
  return (
    <section className="cartao-centro">
      <h1>Laboratório de informática — Rafael</h1>
      <p>Aluno: Rafael Rubiá Oliveira Cardoso</p>
      <p className="destaque-numero">
        {quantidade} {quantidade === 1 ? 'equipamento cadastrado' : 'equipamentos cadastrados'}
      </p>
      <div className="acoes">
        <Link to="/equipamentos/novo" className="botao">Cadastrar equipamento</Link>
        <Link to="/equipamentos" className="botao botao-secundario">Ver equipamentos</Link>
      </div>
    </section>
  )
}

export default Home
