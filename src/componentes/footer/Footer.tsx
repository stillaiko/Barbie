export default Footer

import './Footer.css'

function Footer(){
    return(
       <footer>

<nav className='nav2'>
    
    <div>
    <div className='L'></div>
    <div className='mattel'>©2023 Matel</div>
    </div>
   

    <ul className='ul1'>
        <h1 className='H'>PRODUCTS</h1>
    <li><a className='liF' href="#">MAKEUP</a></li>
    <li><a className='liF' href="#">DOLLS</a></li>
    <li><a className='liF' href="#">ACCESSORIES</a></li>
    <li><a className='liF' href="#">CLOTHES</a></li>
    <li><a className='liF' href="#">SHOES</a></li>
    <li><a className='liF' href="#">MOVIES</a></li>
    </ul>

    <ul className='ul2'>
        <h1 className='H'>COMPANY</h1>
    <li><a className='liF' href="#">MOBILE APP</a></li>
    <li><a className='liF' href="#">SERVICES</a></li>
    <li><a className='liF' href="#">ABOUT US</a></li>
    </ul>

    <ul className='ul3'>
        <h1 className='H'>CUSTOMER SERVICE</h1>
    <li><a className='liF' href="#">HOW TO ORDER</a></li>
    <li><a className='liF' href="#">CONTACT US</a></li>
    <li><a className='liF' href="#">DEVOLUTION</a></li>
    </ul>

    <ul className='ul4'>
        <h1 className='H'>TERMS AND CONDITIONS</h1>
    <li><a className='liF' href="#">PRIVACY STATEMENT</a></li>
    <li><a className='liF' href="#">COOKIES AND TECHNOLOGY</a></li>
    <li><a className='liF' href="#">ACCESSIBILITY STATEMENT</a></li>
    <li><a className='liF' href="#">COOKIE PREFERENCES</a></li>
    </ul>

    

</nav>

       </footer>
    )
}
