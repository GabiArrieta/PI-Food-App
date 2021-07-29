const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { allRecipes, recipeId, recipesDb } = require("../controllers");


const router = Router();


router.post('/', async (req, res) => {
    const { title, summary, spoonacularScore, healthScore, instructions, diets } = req.body;
    //console.log(score);

    if(!title || !summary || !(diets.length >= 1)) return res.json({msg: 'faltan datos'});

  try {
    const createRecipe = await Recipe.create({
        title,
        summary,
        score: spoonacularScore,
        healthScore,
        instructions,
    });


    // const dietasTipos = await Diet.findAll({
    //   where: {
    //     title: diets,
    //   },
    // });

    // createRecipe.setDiets(dietasTipos);

    createRecipe.setDiets(diets);

    res.json(createRecipe);

  } catch (error) {
    return res.status(404).json("error al crear la receta");
  }
});


module.exports = router;

