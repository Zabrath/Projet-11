import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authentication = createAsyncThunk("auth", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      data
    ); // fetch post
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

export const getUserInfos = createAsyncThunk("infos", async (token) => {
  const settings = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      settings
    ); // envoi du token pour récupération des infos user
    return response.data.body;
  } catch (error) {
    throw error;
  }
});

export const putUser = createAsyncThunk("userUpdate",
  async (data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    try {
      const response = await axios.put("http://localhost:3001/api/v1/user/profile", data.putData, config); // Modification des infos utilisateur
      return response.data.body;
    } catch (error) {
      throw error
    }
  }
);
