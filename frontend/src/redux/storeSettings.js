import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

// Configuration de la persistance avec Redux Persist
const persistSettings = {
  key: "root", // Clé pour identifier le store persisté dans le stockage
  storage, // Utilisation du stockage local pour sauvegarder les données
};

// Création du reducer persisté en utilisant Redux Persist

const persistReducers = persistReducer(persistSettings, rootReducer);

// Configuration du store Redux avec Redux Toolkit

export const store = configureStore({
  reducer: persistReducers, // Utilisation du reducer persisté
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactivation de la vérification de sérialisation pour Redux Toolkit
    }),
  devTools: true, // Activation des outils de développement Redux pour navigateur
});

// Création du persistor qui permet de persister le store Redux
export const persistor = persistStore(store);
