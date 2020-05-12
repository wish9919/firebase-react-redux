import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  projectReducer: projectReducer,
});

export default rootReducer;
