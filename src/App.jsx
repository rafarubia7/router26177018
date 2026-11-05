import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Rodape from './components/Rodape.jsx'
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Visualizacao from './pages/Visualizacao.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

// 3 equipamentos de exemplo pra lista não começar vazia.
// o primeiro tem meu RA no campo complementar (sala)
const registrosIniciais = [
  { id: 1, patrimonio: 'PAT-0001', anoAquisicao: 2021, tipo: 'Desktop', sala: 'Lab 26177018' },
  { id: 2, patrimonio: 'PAT-0002', anoAquisicao: 2023, tipo: 'Notebook', sala: 'Sala 12' },
  { id: 3, patrimonio: 'PAT-0003', anoAquisicao: 2019, tipo: 'Projetor', sala: 'Auditório' },
]

// o App é o "dono" dos dados: ele guarda o estado e passa pras páginas por props
function App() {
  // aqui fica a lista de equipamentos do sistema inteiro
  const [registros, setRegistros] = useState(registrosIniciais)

  // constante que mando pra Visualização usar como título
  const titulo = 'Lista de equipamentos'

  // quantidade calculada aqui e mandada pra Home e pra Navbar
  const quantidade = registros.length

  // essa função recebe o equipamento novo que veio do formulário
  // e cria um array NOVO com ele no fim (sem mexer no array antigo)
  function adicionarRegistro(novo) {
    // console.log pra mostrar no vídeo que o dado chegou no App
    console.log('adicionarRegistro recebeu:', novo)
    setRegistros([...registros, novo])
  }

  return (
    <>
      <Navbar quantidade={quantidade} />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home quantidade={quantidade} />} />
          <Route
            path="/equipamentos/novo"
            element={<Cadastro adicionarRegistro={adicionarRegistro} />}
          />
          <Route
            path="/equipamentos"
            element={<Visualizacao titulo={titulo} registros={registros} />}
          />
          {/* o * pega qualquer caminho que não existe */}
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      {/* fora do Routes, então aparece em todas as páginas */}
      <Rodape />
    </>
  )
}

export default App
