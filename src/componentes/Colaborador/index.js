import {BsTrash, BsSuitHeartFill, BsSuitHeart} from 'react-icons/bs'
import './colaborador.css'

const Colaborador = ({colaborador, corEtiqueta,aoDeletar, aoFavoritar})=>{

    function favoritar (){
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return(
        
        <div className='colaboradorCard'>
            <BsTrash size={35} className='deletar' 
                onClick={()=>aoDeletar(colaborador.id)} 
                style={{backgroundColor:corEtiqueta,padding:'10px',borderRadius:'10px'}}
            />
            <div className='colaboradorCabecalho' style={{backgroundColor:corEtiqueta}}>
                <img className='colaboradorImg' src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='colaboradorRodape'>
                <h4 className='colaboradorRodapeH4'>{colaborador.nome}</h4>
                <h5 className='colaboradorRodapeH5'>{colaborador.cargo}</h5>
                <div className='colaboradorFavoritar'>
                    {colaborador.favorito
                        ? <BsSuitHeartFill {...propsFavorito} color='#ff0000'/> 
                        : <BsSuitHeart {...propsFavorito} color='gray'/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;