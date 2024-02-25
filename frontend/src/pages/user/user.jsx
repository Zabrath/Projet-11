import React, { useEffect, useState } from "react";
import "./user.scss";
import ViewTransaction from "../../components/viewTransaction/viewTransaction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfos } from "../../redux/reducers/asyncThunk";
import { isEmpty } from "../../components/UTILS/isEmpty";
import UserForm from "../../components/userForm/userForm";

function User() { // Définition du composant User
  const token = useSelector((state) => state.authentication.token); // Sélection du token d'authentification depuis le state du Redux store

  const [isOpen, setIsOpen] = useState(true); // État local pour contrôler l'affichage du formulaire de modification d'utilisateur

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  useEffect(() => { // Effet secondaire pour charger les informations utilisateur lors du montage du composant
    if (!isEmpty(token)){ // Vérifie si le token n'est pas vide
      navigate("/user"); // Redirige vers la page utilisateur
      dispatch(getUserInfos(token)); // Appel de l'action getUserInfos pour récupérer les informations utilisateur
    }
  }, []); // Tableau de dépendances vide pour exécuter l'effet une seule fois après le montage du composant (évite un bug)

  function toggleForm() { // Fonction pour basculer l'affichage du formulaire de modification d'utilisateur
    setIsOpen((prevIsOpen) => !prevIsOpen); // Inverse la valeur de isOpen
  }

  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br/>Tony Jarvis!</h1>
        <button className="edit_button" onClick={toggleForm}>Edit</button>
      <UserForm element={isOpen}/>

      </div>
      <h2 class="sr-only">Accounts</h2>
      <ViewTransaction
        title={"Argent Bank Checking (x8349)"}
        ammount={"$2,082.79"}
        description={"Available Balance"}
      />
      <ViewTransaction
        title={"Argent Bank Savings (x6712)"}
        ammount={"$10,928.42"}
        description={"Available Balance"}
      />
      <ViewTransaction
        title={"Argent Bank Credit Card (x8349"}
        ammount={"$184.30"}
        description={"Current Balance"}
      />
    </main>
  );
}

export default User;