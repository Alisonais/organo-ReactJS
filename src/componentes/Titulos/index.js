import './Titulos.css'

const Titulos = (props)=>{
    return(
    <h3 style={{borderColor: props.corEtiqueta,fontSize: props.size,color:props.color}} className='titulo'>{props.texto}</h3>
    )
}

export default Titulos;