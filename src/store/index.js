import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import cReducer from "./reducer";

//devtools开启
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//applyMiddleware导入插件
const store = createStore(cReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
