const { Router } = require('express');
const { Recipe, Diet } = require("../db");
//const { setDiets } = require('../controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// let typesDiets = [
//     {title: 'gluten free'},
//     {title: 'ketogenic'},
//     {title: 'dairy free'},
//     {title: 'lacto ovo vegetarian'},
//     {title: 'fodmap friendly'},
//     {title: 'vegan'},
//     {title: 'pescatarian'},
//     {title: 'paleolithic'},
//     {title: 'primal'},
//     {title: 'whole 30'},
//     {title: 'vegetarian'},
// ];

router.get('/', async (req, res) => { 
    const types = await Diet.findAll({
        attributes: ['id', 'title', 'description']
    });
    return res.status(200).json(types);
    // let total = await Diet.findAll({
    //     attributes: ['id', 'title', 'description']
    // });
    // if(total.length > 0 ){
    //     return res.json(response).status(200);
    // } else {
    //     let crear = await Diet.bulkCreate(typesDiets);
    //     return res.json(crear);
    //  }

    //  let totalTypes = await Diet.findAll();
    // let dietArreglo = await setDiets();

    // totalTypes.length ? res.status(200).send(totalTypes) : res.status(200).send(dietArreglo);

});


module.exports = router;