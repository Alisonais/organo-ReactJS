import './rodape.css'

const Rodape = () =>{
    return(
        <footer className='rodape'>
            <div className='rodapeRedesSociais'>
                <a href="https://pt-br.facebook.com/">
                <img src="/imagens/fb.png" alt="logo facebook" />
                </a>
                <a href="https://twitter.com/">
                <img src="/imagens/tw.png" alt="logo facebook" />
                </a>
                <a href="https://www.instagram.com/">
                <img src="/imagens/ig.png" alt="logo facebook" />
                </a>
            </div>
            <div>
                <img src="/imagens/logo.png" alt="" />
            </div>
            <div>
               <a className='rodapeAncora' href="https://github.com/Alisonais">Desenvolvido por Alison Ais</a>
            </div>
        </footer>
    )
}

export default Rodape;