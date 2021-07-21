const { allRecipes, recipeId, recipesDb } = require("../controllers");

const searchForDiets = async (diet) => {
    const recipes = await allRecipes();
    const dietsFilter = recipes.filter(recipe => {
        let check = false;
        recipe.diets.forEach(e => {
            if (e.toLowerCase().includes(diet.toLowerCase())) check = true;
        })

        return check;
    });
    return dietsFilter;
};

module.exports = {searchForDiets};