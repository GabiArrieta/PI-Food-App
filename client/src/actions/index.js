import axios from 'axios';

import {
    GET_RECIPES,
    GET_RECIPES_NAME,
    GET_RECIPES_ID,
    GET_DIETS,
    FILTER_A_TO_Z,
    FILTER_Z_TO_A,
    FILTER_HIGH_TO_LOW,
    FILTER_LOW_TO_HIGH,
    URL,
    FILTER_HEALTH_LOW_TO_HIGH,
    FILTER_HEALTH_HIGH_TO_LOW,
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
    try {
        const rta = await axios.get(`${URL}recipes/${id}`);
        dispatch({type: GET_RECIPES_ID, payload: rta.data})
    } catch (err) {
        console.log(err);
    }
    }
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

export const filterAtoZ = () => {
    return {
        type : FILTER_A_TO_Z
    };
};

export const filterZtoA = () => {
    return {
        type : FILTER_Z_TO_A
    };
};

export const filterHighToLow = () => {
    return {
        type: FILTER_HIGH_TO_LOW,
    };
};

export const filterLowToHigh = () => {
    return {
        type: FILTER_LOW_TO_HIGH,
    };
};

export const filterScoreHealthHigh = () => {
    return {
        type: FILTER_HEALTH_LOW_TO_HIGH,
    };
};

export const filterScoreHealthLow = () => {
    return {
        type: FILTER_HEALTH_HIGH_TO_LOW,
    };
};