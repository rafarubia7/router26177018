import { NavLink } from 'react-router-dom'

// Navbar no layout D = 3: nome do sistema na esquerda, links na direita
// e a quantidade de registros ao lado do link da visualização.
// recebo `quantidade` do App.jsx, que conta quantos registros tem no estado
function Navbar({ quantidade }) {
  // essa função decide a classe do link: se ele está ativo ganha um estilo diferente
  const classeDoLink = ({ isActive }) => (isActive ? 'nav-link ativo' : 'nav-link')

  return (
    <header className="navbar">
      <NavLink to="/" end className="nav-marca">
        Laboratório de informática — Rafael
      </NavLink>
      <nav className="nav-links" aria-label="Menu principal">
        {/* o `end` faz o Home só ficar ativo quando estou exatamente em "/" */}
        <NavLink to="/" end className={classeDoLink}>Home</NavLink>
        <NavLink to="/equipamentos/novo" className={classeDoLink}>Cadastro</NavLink>
        <NavLink to="/equipamentos" end className={classeDoLink}>
          Equipamentos ({quantidade})
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
