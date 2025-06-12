import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "../reducers/index";
import logger from "redux-logger";

const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export default store;