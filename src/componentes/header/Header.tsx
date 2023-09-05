import './Header.css'

function Header(){

let texto = "Aiko"
function mudaTexto(){
    texto = "Nana"
}

    return(

 <>
        
        <header>
            <div className='logo1'></div>
            <nav>
                <ul>
                    <li><input className='barrapesquisa' type="text" /></li>
                    <li><a href="#">PRINCIPAL</a></li>
                    <li><a href="#">NOTÍCIAS</a></li>
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </nav>
        </header>

<div>
    
    <p className='texto_digitado'>Pesquisa: {texto}</p>
</div>
        </>
    )
}

export default Header