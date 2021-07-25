import React from 'react';
import { Link } from "react-router-dom";
import './styled.css';
import createR from '../../img/createR.gif';

export default function Navbar() {
    return (
      
    <div className="navbar">
        <div className="nav-logo">
            <Link to='/' className="brand-text-navbar">
                <img src={createR} alt="" width="280" height='250'/>
                {/* <h2>Food App</h2> */}
            </Link>
            </div>

        <nav className="navbar-right">    
        <ul className='list'>
            <li className='list-item'>    
                <Link to='/home' className='link'>🔶Home</Link>
                <Link to='/create' className='link'>🥣Create Recipe</Link>     
                </li>
            </ul>
    </nav>
    </div>

    )
}