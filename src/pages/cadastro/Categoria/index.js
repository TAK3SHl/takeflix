import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([])
  
  const valoresIniciais ={
    nome: '',
    descricao: ''
  }
  const [values, setValues] = useState(valoresIniciais)
  
  function setValue(key, value){
    setValues({
      ...values,
      [key]: value, //nome: 'valor'
    })
  }

  function handleChange(infoEvento){
    const { value} = infoEvento.target
    setValue(infoEvento.target.getAttribute('name'), value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubmit(e){
        e.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])
        setValues(valoresIniciais)
      }}>

        <FormField 
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          label="Descrição"
          type=""
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;