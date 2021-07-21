import {
  GET_RECIPES,
  GET_RECIPES_NAME,
  GET_RECIPES_ID,
  GET_DIETS,
  GET_RECIPES_FOR_DIET,
  SWITCH_LOADING,
} from "../utils/constants";

const initialState = {
  recipes: [],
  recipesByName: [],
	recipeById: {},
  diets: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPES_NAME:
      return {
        ...state,
        recipesByName: action.payload,
      };
    case GET_RECIPES_ID:
      return {
        ...state,
        recipeById: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
      case SWITCH_LOADING:
            return {
                ...state,
                loading: action.payload
            };
      case GET_RECIPES_FOR_DIET:
            return {
                ...state,
                loading: false,
                recipes: action.payload
            };
    default:
      return state;
  }
};

export default reducer;
