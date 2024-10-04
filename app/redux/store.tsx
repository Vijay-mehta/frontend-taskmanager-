import { legacy_createStore } from "redux";
import userReducer from "./reducer";

const store = legacy_createStore(userReducer);

export default store;
