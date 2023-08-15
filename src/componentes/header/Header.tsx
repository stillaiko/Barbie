import './Header.css'

function Header(){
    return(
        <header>
            <div className='logo'></div>
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">NOTÍCIAS</a></li>
                    <li><a href="#">SOBRE</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header