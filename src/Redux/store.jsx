import { configureStore } from "@reduxjs/toolkit";
import reducers from "./ReducersFolder/reducersIndex";

const store = configureStore({
    reducer: reducers,
})

export default store