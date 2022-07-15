import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import itensReducer from "./modules/itens/reducer";

const reducers = combineReducers({ list: itensReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
