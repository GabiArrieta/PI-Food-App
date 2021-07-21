const { Router } = require('express');
const { Recipe, Diet } = require("../db");
const { allRecipes, recipeId, recipesDb } = require("../controllers");

const { searchForDiets } = require('./utils.js')


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

});

router.get('/:type', async (req, res) => {
    const { type } = req.params;
    const recipeDiet = await searchForDiets(type);
    
    if (recipeDiet) return res.json(recipeDiet);
    return res.status(404).json({ msg: "We're so sorry, diet type is not valid" })
});


module.exports = router;