import { GET_RECIPES, GET_RECIPES_NAME, GET_RECIPES_ID, GET_DIETS, ADD_RECIPE } from '../actions/index';

const initialState = {
    recipes : [],
    diets : [],
    loading: false
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case GET_RECIPES: 
            return {
                ...state, 
                recipes: action.payload
            };
         case GET_RECIPES_NAME:
             return {
                 ...state,
                 recipes: action.payload
             };
         case GET_RECIPES_ID:
             return {
                 ...state,
                 recipes: action.payload
             };
        case GET_DIETS:
            return {
                ...state,
                diets : action.payload
            };
        case ADD_RECIPE: 
            return state;
        default : 
            return state;
                   
    }
}

export default reducer;