
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';


function App() { 
  

  const teste = [];

  const inicioTimes = ([
    {
      id:uuidv4(),
      nomeTime:'Programação',
      cor: '#57C278',
    },
    {
      id:uuidv4(),
      nomeTime:'Front-End',
      cor: '#82CFFA',
    },
    { 
      id:uuidv4(),
      nomeTime:'Data Science',
      cor: '#A6D157',
    },
    { 
      id:uuidv4(),
      nomeTime:'Devops',
      cor: '#E06B69',
    },
    { 
      id:uuidv4(),
      nomeTime:'UX e Design',
      cor: '#DB6EBF',
    },
    { 
      id:uuidv4(),
      nomeTime:'Mobile',
      cor: '#FFBA05',
    },
    { 
      id:uuidv4(),
      nomeTime:'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])
  
  localStorage.colaboradores === undefined && localStorage.setItem('colaboradores',JSON.stringify(teste));
  localStorage.times === undefined && localStorage.setItem('times',JSON.stringify(inicioTimes));
  
  const itenlocalstorage = JSON.parse(localStorage.getItem('colaboradores'));
  const timeslocalstorage = JSON.parse(localStorage.getItem('times'));
  const [times, setTimes] = useState(timeslocalstorage);
  const [colaboradores, setColaboradores] = useState(itenlocalstorage);

  const novoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    const nextColaboradores = ([...colaboradores, colaborador])
    setColaboradores(nextColaboradores)
    
    localStorage.setItem('colaboradores',JSON.stringify(nextColaboradores))
  }

  function deletarColaborador(props){
    console.log(colaboradores);
    console.log(props);
    var itenDeletado = itenlocalstorage.filter(tipo=>tipo.id !== props);
    localStorage.setItem('colaboradores',JSON.stringify(itenDeletado))
    setColaboradores(itenDeletado)
    console.log(itenDeletado);
    
    
  }

  function mudarCorTime(cor, id){
  setTimes(times.map(time => {
    if(time.id === id){
      time.cor = cor 
    }
    return time;
  }));
  }

  function cadastrarTime(novoTime){
    novoTime = {...novoTime,id:uuidv4()};
    console.log(timeslocalstorage);
    timeslocalstorage.push(novoTime);
    localStorage.setItem('times',JSON.stringify(timeslocalstorage))
    setTimes(timeslocalstorage);
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) {colaborador.favorito = !colaborador.favorito};
      return colaborador;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime = {cadastrarTime}
        times={timeslocalstorage.map(time => time.nomeTime)} 
        aocadastrado={colaborador => novoColaboradorAdicionado(colaborador)}
      />
      {timeslocalstorage.map(time => 
        <Time 
          mudarCor = {mudarCorTime}
          key={time.nomeTime}  
          time = {time.nomeTime}
          id = {time.id}  
          corEtiqueta = {time.cor} 
          colaboradores = {colaboradores.filter
          (colaborador => colaborador.time === time.nomeTime)
          }
          aoDeletar = {deletarColaborador}
          aoFavoritar = {resolverFavorito}
        />
      )} 
      <Rodape/>
    </div>
  );
}

export default App;


// colab.nome === time.nomeTime