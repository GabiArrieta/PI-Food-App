import axios from 'axios';

export let GET_RECIPES = "GET_RECIPES";
export let GET_RECIPES_NAME = "GET_RECIPES_NAME";
export let GET_RECIPES_ID = "GET_RECIPES_ID";
export let GET_DIETS = "GET_DIETS";
export let URL = "http://localhost:3002/"
export const LOADING = "LOADING";


export const getRecipes = () => {
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const recipes = await axios.get(`${URL}recipes`);
            return dispatch({ type: GET_RECIPES, payload: recipes.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_RECIPES, payload: [] })
        }
    };
};

export const getRecipesName = (name) => async (dispatch) => { 
    try {
        const rta = await axios.get(`${URL}recipes?name=${name}`);
        dispatch({type: GET_RECIPES_NAME, payload: rta.data});
    } catch (err) {
        console.log(err);
    }
}

export const getRecipesId = (id) => async (dispatch) => {
    try {
        const rta = await axios.get(`${URL}recipes/${id}`);
        dispatch({type: GET_RECIPES_ID, payload: rta.data})
    } catch (err) {
        console.log(err);
    }
}

export const getDiets = async (dispatch) => {
    try {
        const rta = await axios.get(`${URL}diets`);
        dispatch({type: GET_DIETS, payload: rta.data})
    } catch(err){
        console.log(err);
    }
}