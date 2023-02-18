import Titulos from '../Titulos';
import './organizacao.css'

const Organizacao = (props) =>{
    return(
        <div className='organizacao'>
            <div className='organizacaoTitulo'>
                <Titulos 
                    corEtiqueta = {"#6278F7"} 
                    texto = {'Minha Organização:'}
                    size = {'40px'} 
                    color = {"#6278F7"}
                />
            </div>
            <button className='organizacaoButton' onClick={props.botao}>
                <img className='organizacaoImage' 
                    src="/imagens/botão add-01 1.svg" 
                    alt="organizacao" 
                />
            </button>
        </div>
            
    )
}

export default Organizacao;