// visualização provisória, o formato de cards entra na próxima etapa
// recebo `titulo` (constante) e `registros` (estado) do App.jsx
function Visualizacao({ titulo, registros }) {
  return (
    <section>
      <h1>{titulo}</h1>
      <p>{registros.length} registros</p>
    </section>
  )
}

export default Visualizacao
