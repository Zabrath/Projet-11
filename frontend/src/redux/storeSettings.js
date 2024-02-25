import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

// Configuration de la persistance avec Redux Persist
const persistSettings = {
  key: "root", 
  storage, 
};

// Création du reducer persistant en utilisant Redux Persist

const persistReducers = persistReducer(persistSettings, rootReducer);

// Configuration du store Redux avec Redux Toolkit

export const store = configureStore({
  reducer: persistReducers, // Utilisation du reducer persistant
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactivation de la vérification de sérialisation pour Redux Toolkit
    }),
  devTools: true, // Activation des outils de développement Redux pour navigateur (passage en false après prod)
});


export const persistor = persistStore(store);
