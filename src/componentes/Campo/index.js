
import './Campo.css'

// let valor = []

function Campo (props) {

    const aodigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
    }

    var teste = '... precisa de ajuda? ligue 123456789'
    return(       
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                value={props.valor} 
                onChange={aodigitado} 
                required={props.obrigatorio} 
                placeholder={`${props.placeholder}${teste}`}
            />
        </div>
    )
}

export default Campo;