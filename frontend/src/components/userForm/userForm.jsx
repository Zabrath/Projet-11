import React, { useRef } from "react";
import "./userForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../../redux/reducers/asyncThunk";
import { getUserInfos } from "../../redux/reducers/asyncThunk";

function UserForm(isOpen) { // Définition du composant fonctionnel UserForm avec isOpen comme prop
  const informationsUtilisateur = useSelector((state) => state.userInfos.infos); // Sélection des informations utilisateur depuis le state du Redux store
  const editForm = useRef(); // Création d'une référence useRef pour le formulaire
  const dispatch = useDispatch(); // Initialisation de la fonction dispatch pour envoyer des actions à Redux
  const token = useSelector((state) => state.authentication.token); // Sélection du token d'authentification depuis le state du Redux store

  async function clickOnSubmit(e) { // Fonction asynchrone pour gérer la soumission du formulaire
    e.preventDefault();
    const putData = { userName: editForm.current[0].value }; // Création d'un objet putData avec le nom d'utilisateur à mettre à jour
    try {
      dispatch(putUser({ putData, token })); // Appel de l'action putUser avec les données à mettre à jour et le token comme paramètres
    } catch (error) {
      console.log("Une erreur est survenue : " + error); // Gestion des erreurs potentielles lors de la mise à jour
    } finally {
      dispatch(getUserInfos(token)); // Mise à jour des informations utilisateur après la soumission réussie du formulaire
    }
  }

  return (
    <div className={`toggle-form ${isOpen.element ? "toggle-close" : ""}`}> {/* Formulaire utilisateur avec une classe conditionnelle basée sur isOpen */}
      <form ref={editForm} onSubmit={clickOnSubmit} className="userForm"> {/* Formulaire avec une référence et une fonction de soumission */}
        <h2>Edit User Info</h2> 
        <div className="userForm__content"> 
          <div className="userForm__userName"> 
            <label htmlFor="userName">User Name : </label>
            <input
              type="text"
              id="userName"
              defaultValue={informationsUtilisateur?.userName} // Valeur par défaut du nom d'utilisateur
            />
          </div>
          <div className="userForm__firstName"> 
            <label htmlFor="firstName">First Name : </label> 
            <input
              defaultValue={informationsUtilisateur?.firstName} // Valeur par défaut du prénom
              type="text"
              id="firstName"
              className="lockForm"
              readOnly={true} // Champ en lecture seule
            />
          </div>
          <div className="userForm__lastName">
            <label htmlFor="lastName">Last Name : </label>
            <input
              defaultValue={informationsUtilisateur?.lastName} // Valeur par défaut du nom de famille
              type="text"
              id="lastName"
              className="lockForm"
              readOnly={true} // Champ en lecture seule
            />
          </div>
          <div> 
            <button className="edit-button">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UserForm;
