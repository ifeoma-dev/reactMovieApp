import { ActionTypes } from "../ActionsFolder/ActionTypes";

const initialState = {
    allMovies: [],
    selectedMovie: {},
    pageNumber: 1,
}

// reducer for setting movies
export const setAllMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes?.SET_MOVIES:
            const moviesArray = [...payload];
            return {...state, allMovies: [...moviesArray]}
            
        case ActionTypes?.REMOVE_SET_MOVIES:
            return {...state, allMovies: []}
    
        default:
            return state;
    }
}

export const setPageNumberReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes?.SET_PAGE_NUM:
            return {...state, pageNumber: payload}

        case ActionTypes?.INCREASE_PAGE_NUM:
            const pageNumbr = state?.pageNumber + payload;
            return {...state, pageNumber: pageNumbr}

        case ActionTypes?.DECREASE_PAGE_NUM:
            const pageNum = state?.pageNumber - payload;
            return {...state, pageNumber: pageNum}
            
        default:
            return state;
    }
}