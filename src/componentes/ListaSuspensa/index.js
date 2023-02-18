import './ListaSuspensa.css'

const ListaSuspensa = (props)=>{
    return(
        <div className='listaSuspensaDiv'>
            <label className='listaSuspensaLabel'>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor} 
                className='listaSuspensaSelect'>
                <option value=''></option>
                {props.itens.map(itens => <option key={itens}>{itens}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;