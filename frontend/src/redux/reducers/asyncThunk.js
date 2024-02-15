// Importation des modules nécessaires depuis Redux Toolkit et Axios
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";  // Client HTTP pour effectuer des requêtes

// Action asynchrone pour gérer l'authentification de l'utilisateur
export const authentication = createAsyncThunk("auth", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      data
    ); // Envoi d'une requête POST pour l'authentification de l'utilisateur
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Identifiant ou mot de passe incorrect");
    } else {
      console.error("Erreur non traitée:", error);
      alert("Une erreur est advenue lors de la connexion");
    }
  }
});

// Action asynchrone pour récupérer les informations utilisateur
export const getUserInfos = createAsyncThunk("infos", async (token) => {
  const settings = {
    headers: {
      Authorization: `Bearer ${token}`,  // Configuration du header Authorization avec le token JWT
    },
  };
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      settings
    ); // Envoi d'une requête POST pour récupérer les informations utilisateur
    return response.data.body;
  } catch (error) {
    throw error;
  }
});

// Action asynchrone pour mettre à jour les informations utilisateur

export const putUser = createAsyncThunk("userUpdate",
  async (data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,  // Configuration du header Authorization avec le token JWT
      },
    };
    try {
      const response = await axios.put("http://localhost:3001/api/v1/user/profile", data.putData, config); // Envoi d'une requête PUT pour mettre à jour les informations utilisateur
      return response.data.body;
    } catch (error) {
      throw error
    }
  }
);
