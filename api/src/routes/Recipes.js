const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { allRecipes, recipeId, recipesDb } = require("../controllers");


const router = Router();

//aca traigo el pedido a la api

router.get('/', async (req, res) => {
    const { name } = req.query;

   if(name) {
       const recipes = await allRecipes();
       let value = name.toLowerCase();

       //console.log(recipes);

       const busqueda = recipes.filter(r => r.title.toLowerCase().includes(value));
       console.log(busqueda);

       if(busqueda.length >= 1 ) return res.json(busqueda);
       return res.status(404).json({msg: "recipe not found"});

   } else {
       const recipes = await allRecipes();
       return res.status(200).json(recipes);
   }

});

router.get('/:id', async(req, res) => {
    const { id } = req.params;

    if (!id) return res.status(404).send("Error, recipeId not found");
    //if(id.includes('-')) return res.send('entro aca porque incluye -')
        if (id.includes('-')) {
        //busco en la DB por Id
        const db = await recipesDb();
        const busqueda = await db.find(recipe => recipe.id === id);
        return res.json(busqueda);
    
        } else {
        const recipesId = await recipeId(id);
        return res.json(recipesId);
    } 
   
});


module.exports = router;