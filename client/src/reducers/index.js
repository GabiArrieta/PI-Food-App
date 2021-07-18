import {
  GET_RECIPES,
  GET_RECIPES_NAME,
  GET_RECIPES_ID,
  GET_DIETS,
  FILTER_A_TO_Z,
  FILTER_Z_TO_A,
  FILTER_HIGH_TO_LOW,
  FILTER_LOW_TO_HIGH,
  FILTER_HEALTH_LOW_TO_HIGH,
  FILTER_HEALTH_HIGH_TO_LOW,
  orderAtoZ,
  orderZtoA,
  orderLowToHigh,
  orderHighToLow,
} from "../utils/constants";

const initialState = {
  recipes: [],
  diets: [],
  loading: false,
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
        recipes: action.payload,
      };
    case GET_RECIPES_ID:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTER_A_TO_Z:
      return {
        ...state,
        recipes: orderAtoZ(state.recipes),
      };
    case FILTER_Z_TO_A:
      return {
        ...state,
        recipes: orderZtoA(state.recipes),
      };
    case FILTER_HIGH_TO_LOW:
      return {
        ...state,
        recipes: orderLowToHigh(state.recipes, "score"),
      };
    case FILTER_LOW_TO_HIGH:
      return {
        ...state,
        recipes: orderHighToLow(state.recipes, "score"),
      };
      case FILTER_HEALTH_LOW_TO_HIGH:
      return {
        ...state,
        recipes: orderLowToHigh(state.recipes, "healthScore"),
      };
    case FILTER_HEALTH_HIGH_TO_LOW:
      return {
        ...state,
        recipes: orderHighToLow(state.recipes, "healthScore"),
      };
    default:
      return state;
  }
};

export default reducer;
