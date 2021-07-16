import React from 'react';
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";

//importar estilos


export default function Navbar() {
    return (
    <div>
        <div>
            <Link to='/home'>
                <img src={logo} alt="" width="230" height="90" />
            </Link>
            </div>
        <nav>    
        <ul>
            <li>
                <Link to='/home'>Home</Link>
                <Link to='/create'>Create recipe</Link>
            </li>
        </ul>
    </nav>
    </div>
    )
}