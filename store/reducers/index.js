import sectionReducer from "./section";
import loggedReducer from "./isLogged";
import sidebarReducer from "./sidebar";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  sectionReducer,
  loggedReducer,
  sidebarReducer
});

export default allReducers;
