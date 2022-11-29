import { combineReducers } from "redux";
import { setAllMoviesReducer, setPageNumberReducer } from "./ProductReducers";

const reducers = combineReducers({
    allMovies: setAllMoviesReducer,
    currentPageNumber: setPageNumberReducer,
})

export default reducers