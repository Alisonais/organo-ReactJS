import Colaborador from '../Colaborador';
import Titulos from '../Titulos';
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    
    return ( 
        props.colaboradores.length > 0 &&
        <section className='time' style={{backgroundColor: hexToRgba(props.corEtiqueta, '0.5') }}>
            <input onChange={evento => props.mudarCor(evento.target.value,props.id)} value={props.corEtiqueta}  type="color" className='inputCor' />
            <Titulos corEtiqueta = {props.corEtiqueta} texto = {props.time}/>
            <div className='cardsColaboradores'>
                {props.colaboradores.map(colaborador =>{
                return (<Colaborador 
                    key={colaborador.nome} 
                    colaborador = {colaborador}
                    corEtiqueta = {props.corEtiqueta}
                    aoDeletar = {props.aoDeletar}
                    aoFavoritar = {props.aoFavoritar}
                />)
                }
                )
                }
            </div>
        </section>
    )
}

export default Time;