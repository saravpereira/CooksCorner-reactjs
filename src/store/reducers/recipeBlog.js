import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
    posts: [],
    showPost: false,
    addNewRecipe: false,
    editRecipe: false,
    selectedPostID: null,
    viewingRecipe: [],
    search: null,
    loading: true,
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_NEW_RECIPE:
            return {
                ...state,
                addNewRecipe: true
            }
        case actionTypes.HANDLE_DELETE_POST:
            return {
                ...state,
                selectedPostID: null,
                viewingRecipe: [],
                showPost: false,
            }
        case actionTypes.HANDLE_EDIT_POST:
            return {
                ...state,
                showPost: false,
                editRecipe: true,
            }
        case actionTypes.POST_SELECTED:
            return {
                ...state,
                selectedPostID: action.selectedPostID, 
                viewingRecipe: action.viewingRecipe
            }
        case actionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        case actionTypes.SHOW_POST:
            return{
                ...state,
                showPost:true
            }
        case actionTypes.CLOSE_POST:
            return {
                ...state,
                showPost: false,
                selectedPostID: null,
                viewingRecipe: [],
                addNewRecipe: false,
                editRecipe: false,
            }
        case actionTypes.SEARCH_SPACE:
            return {
                ...state,
                search: action.search
            }
        default: return state;
    }
};

export default reducer;