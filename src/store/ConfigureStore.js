import {applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/RootReducer";

export default function ConfigureStore(){
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
        
    )
}