import './Botao.css';

const Botao = (props)=>{
    return(
        <div className='btnDiv'>
            <button className='btnButton'>
                {props.children}
            </button>
        </div>
    )
}

export default Botao;