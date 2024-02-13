import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/authenticationSlice";
import userReducer from "./reducers/userSlice";
import updateReducer from "./reducers/updateSlice";

const rootReducer = combineReducers({
  authentication: authReducer,
  userInfos: userReducer,
  updateUser: updateReducer,
});

export default rootReducer;
