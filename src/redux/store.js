import {createStore, combineReducers} from "redux"
import mainPageReducer from "./reducers/mainPage-reducer";

let reducers = mainPageReducer;
let store = createStore(reducers);

export default store;