require('dotenv').config();

const { Recipe, Diet } = require("../db");
const axios = require('axios').default;
const { API_KEY } = process.env;

const recipesDb = async () => {
    try {
        const recipesAll = await Recipe.findAll({
            include : {
                model : Diet,
                attributes: ['title']
            }
        });
        const recipes = recipesAll.map((r) => {
            return {
                id: r.id,
                title: r.title,
                summary: r.summary,
                score: r.score,
                healthScore: r.healthScore,
                instructions: r.instructions,
                diets: r.diets.map(diet => diet.title)
            };
        })
        return recipes
    } catch(error){
        console.log(error);
        return false;
    }
};


const recipesApi = async function () {
    try {
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const recipes = res.data.results;

        return recipes.map(r => {
            return {
                id: r.id,
                title: r.title,
                score: r.spoonacularScore,      
                healthScore: r.healthScore,     
                img: r.image,
                diets: r.diets,                
            };
        });

    } catch (e) {
        console.log(e);
        return [];
    };
};


const recipeId = async (id) => {
    try {
        const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const r = recipe.data;
        const recipeId = {
            id: r.id,
            title: r.title,
            score: r.spoonacularScore,      
            healthScore: r.healthScore,    
            dishTypes: r.dishTypes,      
            img: r.image,
            summary: r.summary,
            instructions: r.instructions,
            diets: r.diets                 
        };
        return recipeId;
    } catch (e) {
        return false
    };
}

const allRecipes = async () => {
    const rApi = await recipesApi()
    const rBd = await recipesDb();
    const allRecipes = [...rBd, ...rApi];

    return allRecipes;
}


let typesDiets = [
    'gluten free',
    'ketogenic',
    'dairy free',
    'lacto ovo vegetarian',
    'fodmap friendly',
    'vegan',
    'pescatarian',
    'paleolithic',
    'primal',
    'whole 30',
    'vegetarian',
];

const setDiets = async () => {
    let diets = typesDiets.map(d => { title : d});

    let dietsArray = await Diet.bulkCreate(diets);

    return dietsArray;
}

module.exports = {
    allRecipes,
    recipesApi,
    recipesDb,
    recipeId,
    setDiets
}