export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";
export const GET_RECIPES_ID = "GET_RECIPES_ID";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES_FOR_DIET = "GET_RECIPES_FOR_DIET";
export const DIET_FILTER = "DIET_FILTER";
export const FILTER_A_TO_Z = "FILTER_A_TO_Z";
export const FILTER_Z_TO_A = "FILTER_Z_TO_A";
export const FILTER_HIGH_TO_LOW = "FILTER_HIGH_TO_LOW";
export const FILTER_LOW_TO_HIGH = "FILTER_LOW_TO_HIGH";
export const FILTER_HEALTH_LOW_TO_HIGH = "FILTER_HEALTH_LOW_TO_HIGH";
export const FILTER_HEALTH_HIGH_TO_LOW = "FILTER_HEALTH_HIGH_TO_LOW";

export let URL = "http://localhost:3003/"
export const LOADING = "LOADING";

export const orderAtoZ = (recipes) => {
    const sorted = recipes.sort((a, b) => {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
    return sorted;
};

export const orderZtoA = (recipes) => {
    const sorted = recipes.sort((a, b) => {
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    });
    return sorted;
};

export const orderLowToHigh = (recipes, score) => {
    const sorted = recipes.sort((a, b) => parseInt(a[score]) - parseInt(b[score]));
    return sorted;
};

export const orderHighToLow = (recipes, score) => {
    const sorted = recipes.sort((a, b) => parseInt(b[score]) - parseInt(a[score]));
    return sorted;
};
