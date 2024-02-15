import { combineReducers } from "@reduxjs/toolkit"; // Fonction pour combiner plusieurs reducers en un seul
// Importation des reducers individuels
import authReducer from "./reducers/authenticationSlice";
import userReducer from "./reducers/userSlice";
import updateReducer from "./reducers/updateSlice";

// Combinaison de tous les reducers individuels en un seul rootReducer
const rootReducer = combineReducers({
  authentication: authReducer,
  userInfos: userReducer,
  updateUser: updateReducer,
});

export default rootReducer;
