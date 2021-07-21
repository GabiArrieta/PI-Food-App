import React from 'react'
import { Link } from 'react-router-dom';

import './styled.css';

function LandingPage() {
    return (
        
        <div className="background">
            <div className='div_content'>
                <h3 className='h3'>Welcome!</h3>
                <p className='p-landing'> Search and create your recipes</p>
            </div>
           

            <div className="div_btn">
                <Link to='/home'>
                    <button className='btn'> Enter Site</button>
                </Link>
            </div>
    </div>
    );
};

export default LandingPage;
