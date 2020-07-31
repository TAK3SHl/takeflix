import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

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
    const {value} = infoEvento.target
    setValue(infoEvento.target.getAttribute('name'), value)
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost') ? 
      'http://localhost:3333/categorias'
      :
      'https://takeflix.herokuapp.com/categorias'; 
    fetch(URL)
      .then(async (respostaDoServer) =>{
      if(respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        setCategorias(resposta);
        return; 
      }
      throw new Error('Não foi possível pegar os dados');
      })
       
  }, []);

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
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
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