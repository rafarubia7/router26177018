import { Link, useLocation } from 'react-router-dom'

// página que aparece quando a pessoa digita um endereço que não existe
function NaoEncontrada() {
  // o useLocation me dá o caminho que foi digitado na barra de endereço
  const { pathname } = useLocation()

  return (
    <section className="cartao-centro">
      <h1>Página não encontrada</h1>
      <p>
        O caminho <code>{pathname}</code> não existe neste sistema.
      </p>
      <Link to="/" className="botao">Voltar para a Home</Link>
    </section>
  )
}

export default NaoEncontrada
