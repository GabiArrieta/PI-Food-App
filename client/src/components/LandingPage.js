import React from 'react'
import { Link } from 'react-router-dom';


function LandingPage() {
    return (
        <div>
            <div> 
            <h2> Food App ! </h2>
            </div>
            
            <div>
                <h1>Bienvenido!</h1>
                <p> Search and create your recipes</p>
            </div>
           

            <div>
                <Link to='/home'>
                    <button> Enter Site</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;
