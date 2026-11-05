import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Visualizacao from './pages/Visualizacao.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

// aqui ficam todas as rotas do sistema
function App() {
  return (
    <main className="conteudo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipamentos/novo" element={<Cadastro />} />
        <Route path="/equipamentos" element={<Visualizacao />} />
        {/* o * pega qualquer caminho que não existe */}
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </main>
  )
}

export default App
