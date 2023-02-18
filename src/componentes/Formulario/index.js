import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Titulos from '../Titulos';
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento)=>{
        evento.preventDefault();
        props.aocadastrado({
            nome,
            cargo,
            imagem,
            time,
            id:uuidv4()
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='formularioSection'>
            <form onSubmit={aoSalvar}>
                <Titulos texto='Preencha os dados para criar o card do colaborador.'/>
                <Campo 
                    type = 'text'
                    obrigatorio={true} 
                    label="Nome"
                    placeholder='Digite seu nome' 
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                    
                />
                <Campo 
                    type = 'text'
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder='Digite seu cargo' 
                    valor = {cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />
                <Campo 
                    type = 'text'
                    label="Imagem" 
                    placeholder='Digite o endereço da imagem' 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label = 'Time' 
                    itens = {props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento)=>{
                evento.preventDefault()
                props.cadastrarTime({nomeTime:nomeTime, cor:corTime})
                setNomeTime('')
                setCorTime('')
            }}>
                <Titulos texto='Preencha os dados para criar um novo time.'/>
                <Campo 
                    type = 'text'
                    obrigatorio
                    label="Nome"
                    placeholder='Digite o nome do time' 
                    valor = {nomeTime}
                    aoAlterado = {valor => setNomeTime(valor)}
                    
                />
                <Campo 
                    type = 'color'
                    obrigatorio
                    label="cor" 
                    placeholder='Digite a cor do time' 
                    valor = {corTime}
                    aoAlterado = {valor => setCorTime(valor)}
                />
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;