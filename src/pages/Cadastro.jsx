import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

// formulário vazio, usado como valor inicial
const formularioVazio = { patrimonio: '', anoAquisicao: '', tipo: '', sala: '' }

// página de cadastro de equipamento (e de edição, no opcional O4)
// recebo `adicionarRegistro` do App.jsx: é a função que coloca o equipamento no estado de lá.
// na rota de editar, recebo também `registros` (pra achar o equipamento) e `editarRegistro`
function Cadastro({ adicionarRegistro, registros = [], editarRegistro }) {
  // se a URL tiver :id, estou editando; se não, é um cadastro novo
  const { id } = useParams()
  const registroEditado = id ? registros.find((item) => String(item.id) === id) : null

  // no modo editar o formulário já começa preenchido com os dados do equipamento
  const [form, setForm] = useState(() =>
    registroEditado
      ? {
          patrimonio: registroEditado.patrimonio,
          anoAquisicao: String(registroEditado.anoAquisicao),
          tipo: registroEditado.tipo,
          sala: registroEditado.sala,
        }
      : formularioVazio,
  )
  const [erros, setErros] = useState({})
  const navigate = useNavigate()

  // tentou editar um id que não existe
  if (id && !registroEditado) {
    return (
      <section className="cartao-centro">
        <h1>Equipamento não encontrado</h1>
        <p>Não existe equipamento com o id <code>{id}</code> para editar.</p>
        <Link to="/equipamentos" className="botao">Voltar para a lista</Link>
      </section>
    )
  }

  // atualiza só o campo que mudou, usando o name do input
  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // confere os campos: nenhum vazio e a regra B = 0 (patrimônio com pelo menos 3 caracteres)
  function validar() {
    const novosErros = {}
    const patrimonio = form.patrimonio.trim()

    if (patrimonio === '') novosErros.patrimonio = 'Informe o patrimônio.'
    else if (patrimonio.length < 3) novosErros.patrimonio = 'O patrimônio precisa ter no mínimo 3 caracteres.'

    if (form.anoAquisicao === '') novosErros.anoAquisicao = 'Informe o ano de aquisição.'
    if (form.tipo === '') novosErros.tipo = 'Selecione o tipo.'
    if (form.sala.trim() === '') novosErros.sala = 'Informe a sala.'

    return novosErros
  }

  // roda quando clica em Salvar: valida, monta o objeto e manda pro App
  function handleSubmit(e) {
    e.preventDefault() // impede a página de recarregar
    const novosErros = validar()
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) return

    const dados = {
      patrimonio: form.patrimonio.trim(),
      anoAquisicao: Number(form.anoAquisicao),
      tipo: form.tipo,
      sala: form.sala.trim(),
    }

    if (registroEditado) {
      // editando: mantenho o mesmo id e troco só os campos
      editarRegistro({ ...registroEditado, ...dados })
    } else {
      adicionarRegistro({ id: Date.now(), ...dados })
    }
    navigate('/equipamentos')
  }

  return (
    <section className="cartao-form">
      <h1>{registroEditado ? 'Editar equipamento' : 'Cadastrar equipamento'}</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="campo">
          <label htmlFor="patrimonio">Patrimônio</label>
          <input
            id="patrimonio"
            name="patrimonio"
            type="text"
            value={form.patrimonio}
            onChange={handleChange}
            aria-invalid={Boolean(erros.patrimonio)}
            aria-describedby={erros.patrimonio ? 'erro-patrimonio' : undefined}
          />
          {erros.patrimonio && <p id="erro-patrimonio" className="erro" role="alert">{erros.patrimonio}</p>}
        </div>

        <div className="campo">
          <label htmlFor="anoAquisicao">Ano de aquisição</label>
          <input
            id="anoAquisicao"
            name="anoAquisicao"
            type="number"
            value={form.anoAquisicao}
            onChange={handleChange}
            aria-invalid={Boolean(erros.anoAquisicao)}
            aria-describedby={erros.anoAquisicao ? 'erro-anoAquisicao' : undefined}
          />
          {erros.anoAquisicao && <p id="erro-anoAquisicao" className="erro" role="alert">{erros.anoAquisicao}</p>}
        </div>

        <div className="campo">
          <label htmlFor="tipo">Tipo</label>
          <select
            id="tipo"
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            aria-invalid={Boolean(erros.tipo)}
            aria-describedby={erros.tipo ? 'erro-tipo' : undefined}
          >
            <option value="">Selecione...</option>
            <option value="Desktop">Desktop</option>
            <option value="Notebook">Notebook</option>
            <option value="Projetor">Projetor</option>
          </select>
          {erros.tipo && <p id="erro-tipo" className="erro" role="alert">{erros.tipo}</p>}
        </div>

        <div className="campo">
          <label htmlFor="sala">Sala</label>
          <input
            id="sala"
            name="sala"
            type="text"
            value={form.sala}
            onChange={handleChange}
            aria-invalid={Boolean(erros.sala)}
            aria-describedby={erros.sala ? 'erro-sala' : undefined}
          />
          {erros.sala && <p id="erro-sala" className="erro" role="alert">{erros.sala}</p>}
        </div>

        <button type="submit" className="botao">
          {registroEditado ? 'Salvar alterações' : 'Salvar'}
        </button>
      </form>
    </section>
  )
}

export default Cadastro
