import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const authentication = createAsyncThunk("auth",
  async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/login", data); // fetch post
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Identifiant ou mot de passe incorrect");
      } else {
        console.error("Erreur non traitée:", error);
        alert("Une erreur est advenue lors de la connexion");
      }
    }
  }
);

