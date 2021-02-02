import * as actionTypes from './actionTypes';

export const initIngredientStepInput = () => {
    return {
        type: actionTypes.INIT_INGREDIENT_STEP_INPUT
    }
}

export const initPrepopulatedFields = (viewingRecipe) => {
    return {
        type: actionTypes.INIT_PREPOPULATED_FIELDS,
        ingredientInputs: [...viewingRecipe.ingredients],
        stepInputs: [...viewingRecipe.steps],
        name: viewingRecipe.name,
        description: viewingRecipe.description,
        ingredients: [...viewingRecipe.ingredients],
        steps: [...viewingRecipe.steps],
        imageURL: viewingRecipe.imageURL,
    }
}

export const appendIngredientInput = () => {
    return {
        type: actionTypes.APPEND_INGREDIENT_INPUT,
    }
}

export const appendStepInput = () => {
    return {
        type: actionTypes.APPEND_STEP_INPUT,
    }
}

export const ingredientFieldChange = (i, event) => {
    return {
        type: actionTypes.INGREDIENT_CHANGE,
        index: i,
        value: event.target.value 
    }
}

export const stepFieldChange = (i, event) => {
    return {
        type: actionTypes.STEP_CHANGE,
        index: i,
        value: event.target.value 
    }
}

export const nameChange = (event) => {
    return {
        type: actionTypes.NAME_CHANGE,
        value: event.target.value 
    }
}

export const imageChange = (event) => {
    return {
        type: actionTypes.IMAGE_CHANGE,
        value: event.target.value 
    }
}

export const descriptionChange = (event) => {
    return {
        type: actionTypes.DESCRIPTION_CHANGE,
        value: event.target.value 
    }
}

export const removeIngredient = (i) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        index: i
    }
}

export const stepIngredient = (i) => {
    return {
        type: actionTypes.REMOVE_STEP,
        index: i
    }
}

export const closeEditDialog = () => {
    return {
        type: actionTypes.CLOSE_EDIT
    }
}