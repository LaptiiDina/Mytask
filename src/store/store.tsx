
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { reducer } from "../reducer/reducer";


const initialState = JSON.parse(window.localStorage.getItem("state")||'{}');

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    window.localStorage.setItem('state', JSON.stringify(store.getState()));
})
export { store };