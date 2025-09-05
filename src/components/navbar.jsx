import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
            <span><a href='/'><li><img src='src\components\logo.png'></img></li></a></span>
               
                <ul>
                    
                    <Link to  ='/shop'><li>Shop</li></Link>
                    <Link to ='/about'><li>About-Us</li></Link>
                    <Link to ='/contact'><li>Contact</li></Link>
                    <Link to ='/login'><li>Login/Register</li></Link>
                    <Link to ='/cart'><li>Cart</li></Link>
                </ul>

            </nav>
        </div>
    )

}

export default Navbar