import './Header.css'
import {Link} from 'react-router-dom'

function Header(){

    return(
        
        <header>
            <div ><Link to="/"><img className='logo1'src="/Barbie_Branco.webp" alt="" /></Link></div>
            <nav>
                <ul>
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/noticias">Noticias</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>

        
    )
}

export default Header