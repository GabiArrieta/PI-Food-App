import axios from 'axios';

import {
    GET_RECIPES,
    GET_RECIPES_NAME,
    GET_RECIPES_ID,
    GET_DIETS,
    GET_RECIPES_FOR_DIET,
    SWITCH_LOADING,
    URL,
    LOADING
} from '../utils/constants';

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

export const getRecipesId = (id) => {
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const recipes = await axios.get(`${URL}recipes/${id}`);
            return dispatch({ type: GET_RECIPES_ID, payload: recipes.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_RECIPES_ID, payload: [] });
        }
    };
}

export const getDiets = () => {
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const diets = await axios.get(`${URL}types`);
            return dispatch({ type: GET_DIETS, payload: diets.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_DIETS, payload: [] })
        }
    };
};

export const getRecipesForDiet = (diet) => {
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const recipes = await axios.get(`${URL}types/${diet}`);
            return dispatch({ type: GET_RECIPES_FOR_DIET, payload: recipes.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_RECIPES_FOR_DIET, payload: [] });
        }
    };
};

export function switchLoading(boolean) {
    return function(dispatch) {
        dispatch({ type: SWITCH_LOADING, payload: boolean })
    };
};
