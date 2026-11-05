// rodapé com meu nome e RA.
// não recebe props: os dados são fixos. Ele fica no App fora do <Routes>,
// por isso aparece em todas as páginas, até na de "não encontrada"
function Rodape() {
  return (
    <footer className="rodape">
      Rafael Rubiá Oliveira Cardoso — RA 26177018
    </footer>
  )
}

export default Rodape
