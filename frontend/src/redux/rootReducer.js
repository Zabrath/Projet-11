import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/authenticationSlice";

const rootReducer = combineReducers({
  authentication: authReducer,
});

export default rootReducer;
