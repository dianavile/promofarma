import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">PromoFarma</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Productos</Link></li>
                        <li><Link to="/cart">Mi Cesta</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;
