import { ActionTypes } from "./ActionTypes";

export const setSelectedMovie = (movie)=> {
    return {
        type: ActionTypes?.SELECTED_MOVIE,
        payload: movie,
    }
}

export const removeSelectedMovie = (movie)=> {
    return {
        type: ActionTypes?.REMOVE_SELECTED_MOVIE,
        payload: movie,
    }
}

export const setAllMovies = (movies)=> {
    return {
        type: ActionTypes?.SET_MOVIES,
        payload: movies,
    }
}

export const removeSetMovies = ()=> {
    return {
        type: ActionTypes?.REMOVE_SET_MOVIES,
    }
}

export const setPageNum = (number)=> {
    return {
        type: ActionTypes?.SET_PAGE_NUM,
        payload: number,
    }
}

export const increasePageNum = (number)=> {
    return {
        type: ActionTypes?.INCREASE_PAGE_NUM,
        payload: number,
    }
}

export const decreasePageNum = (number)=> {
    return {
        type: ActionTypes?.DECREASE_PAGE_NUM,
        payload: number,
    }
}