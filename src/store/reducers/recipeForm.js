import * as actionTypes from "../actions/actionTypes.js";

const initialState = {
  ingredientInputs: [],
  stepInputs: [],
  name: "",
  description: "",
  ingredients: [],
  steps: [],
  imageURL: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_INGREDIENT_STEP_INPUT:
      return {
        ...state,
        ingredientInputs: ["ingredientInputs-0"],
        stepInputs: ["stepInputs-0"],
      };
    case actionTypes.INIT_PREPOPULATED_FIELDS:
      return {
        ingredientInputs: action.ingredientInputs,
        stepInputs: action.stepInputs,
        name: action.name,
        description: action.description,
        ingredients: action.ingredients,
        steps: action.steps,
        imageURL: action.imageURL,
      };
    case actionTypes.APPEND_INGREDIENT_INPUT:
      const prevIngState = [...state.ingredientInputs];
      var newIngInput = `ingredientInputs-${state.ingredientInputs.length}`;
      return {
        ...state,
        ingredientInputs: prevIngState.concat([
            newIngInput,
        ]),
      };
    case actionTypes.APPEND_STEP_INPUT:
      const prevStepState = [...state.stepInputs];
      var newStepInput = `stepInputs-${state.stepInputs.length}`;
      return {
        ...state,
        stepInputs: prevStepState.concat([newStepInput]),
      };
    case actionTypes.INGREDIENT_CHANGE:
      let updatedIngredients = [...state.ingredients];
      updatedIngredients[action.index] = action.value;
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    case actionTypes.STEP_CHANGE:
      let updatedSteps = [...state.steps];
      updatedSteps[action.index] = action.value;
      return {
        ...state,
        steps: updatedSteps,
      };
    case actionTypes.NAME_CHANGE:
      return {
        ...state,
        name: action.value,
      };
    case actionTypes.IMAGE_CHANGE:
      return {
        ...state,
        imageURL: action.value,
      };
    case actionTypes.DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.value,
      };
    case actionTypes.REMOVE_INGREDIENT:
      let ingredientsList = [...state.ingredients];
      ingredientsList.splice(action.index, 1);
      let ingredientInputsList = [...state.ingredientInputs];
      ingredientInputsList.splice(action.index, 1);
      return {
        ...state,
        ingredients: ingredientsList,
        ingredientInputs: ingredientInputsList,
      };

    case actionTypes.REMOVE_STEP:
      let stepsList = [...state.steps];
      stepsList.splice(action.index, 1);
      let stepsInputsList = [...state.stepInputs];
      stepsInputsList.splice(action.index, 1);
      return {
        ...state,
        steps: stepsList,
        stepInputs: stepsInputsList,
      };
    case actionTypes.CLOSE_EDIT:
        return {
            ingredientInputs: [],
            stepInputs: [],
            name: "",
            description: "",
            ingredients: [],
            steps: [],
            imageURL: "",
        }
    default:
      return state;
  }
};

export default reducer;
