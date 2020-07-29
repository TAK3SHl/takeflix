import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setValuess] = useState([])
  const valoresIniciais ={
    nome: 'Nome',
    descricao: 'Descricao'
  }
  const [values, setValues] = useState(valoresIniciais)


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubmit(e){
        e.preventDefault()
        setValues([
          ...categorias,
          values
        ])
      }}>

        <div>

          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              onChange={function handlervalues(cat){
                setValues(cat.target.value)
              }}
            /> 
            
          </label>
        </div>

        <div>

        <label>
            Descrição:
            <input
              type="text"
              value={values.descricao}
              onChange={function handlervalues(cat){
                setValues(cat.target.value)
              }}
            /> 
            
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
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