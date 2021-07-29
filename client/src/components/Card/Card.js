
import React from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill, BsHeartFill, BsHeartHalf, BsHeart, BsStarHalf, BsStar } from 'react-icons/bs'

import recipeImg from '../../img/recipeImg.png';
import './card.css';

const Card = ({ id, title, score, healthScore, image, diets }) => {

    //console.log('dietas de la card', diets );
    let scoreStar = [];
    let scoreHeart = [];
    let scoreStarTotal = [];
    let scoreHeartTotal = [];
    let totalStar = (10 - Math.floor(score / 10)) - (score % 10 > 0 ? 1 : 0);
    let totalHeart = (10 - Math.floor(healthScore / 10)) - ((healthScore % 10 > 0) ? 1 : 0);
    for (let i = 0; i < Math.floor(score / 10); i++) {
        scoreStar.push(i);
    };
    for (let i = 0; i < Math.floor(healthScore / 10); i++) {
        scoreHeart.push(i);
    };
    for (let i = 0; i < totalStar; i++) {
        scoreStarTotal.push(i);
    };
    for (let i = 0; i < totalHeart; i++) {
        scoreHeartTotal.push(i);
    };

    const getDiets = function () {
		let arrayDiets = [];
		if (diets) {
			for(let diet of diets) {
				typeof diet === 'object' ? arrayDiets.push(diet.title) : arrayDiets.push(diet);
			}
		}
		return arrayDiets.length ? arrayDiets.join(', ') : 'not found'
	}

    return (
    <div className='container'>
        <Link className='link' to={`/recipes/${id}`}>
            <div className='card' >
                <div className='card-image'>
                {image ? <img src={image} alt="not found" /> : <img src={recipeImg} alt='recipe' className='card-image'/>  } 
                </div>

                <div className='card-text' >
                <h1 className="title">{title}</h1>

                <h4 className='card-diets'>{getDiets()}</h4>
                     </div>

                    <div className='card-stats'>
                    <div className='stat'>
                        {scoreStar.map(e => <BsStarFill />)}
                        {(score % 10 > 0) && <BsStarHalf />}
                        {scoreStarTotal.map(e => <BsStar />)}
                        <p className='text-stats'>Score: {score}</p>
                    </div>
                    <div className="stat" >
                        {scoreHeart.map(e => <BsHeartFill />)}
                        {(healthScore % 10 > 0) && <BsHeartHalf />}
                        {scoreHeartTotal.map(e => <BsHeart />)}
                        <p className='text-stats'>Health Score: {healthScore}</p>
                    </div>
                    
                </div>
            </div>
        </Link>
    </div>
    );
};

export default Card;