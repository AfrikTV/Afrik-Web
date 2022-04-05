import sectionReducer from "./section";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  sectionReducer,
  loggedReducer,
});

export default allReducers;
