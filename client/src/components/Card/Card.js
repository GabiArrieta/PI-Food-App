
import React from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill, BsHeartFill, BsHeartHalf, BsHeart, BsStarHalf, BsStar } from 'react-icons/bs'

import recipeImg from '../../img/recipeImg.png';
import './card.css';

const Card = ({ id, title, score, healthScore, image, diets }) => {

    console.log(title, score, healthScore, image, diets );
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

    return (
    <div className='container'>
        <Link className='link' to={`/recipes/${id}`}>
            <div className='card' >
                <div className='card-image'>
                {image ? <img src={image} alt="not found" /> : <img src={recipeImg} alt='recipe' className='card-image'/>  } 
                </div>

                <div className='card-text' >
                <h1 className="title">{title}</h1>
                <li>Diet Types:
                        {diets && diets.map(d => <text> {d},</text>
                        )}
                    </li>
                    </div>

                    <div className='card-stats'>
                    <div className='stat'>
                        {scoreStar.map(e => <BsStarFill />)}
                        {(score % 10 > 0) && <BsStarHalf />}
                        {scoreStarTotal.map(e => <BsStar />)}
                        <p className='text'>Score: {score}</p>
                    </div>
                    <div className="stat" >
                        {scoreHeart.map(e => <BsHeartFill />)}
                        {(healthScore % 10 > 0) && <BsHeartHalf />}
                        {scoreHeartTotal.map(e => <BsHeart />)}
                        <p className='text'>Health Score: {healthScore}</p>
                    </div>
                    
                </div>
            </div>
        </Link>
    </div>
    );
};

export default Card;