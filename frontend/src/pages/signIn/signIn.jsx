import React, { useRef } from "react";
import "./signIn.scss";
import { authentication } from "../../redux/reducers/asyncThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../../components/UTILS/isEmpty";

function SignIn() {
  const signInForm = useRef(); // Création d'une référence pour le formulaire
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (e) => { // Fonction pour gérer la soumission du formulaire
    e.preventDefault();
    const data = { // Données du formulaire de connexion
      email: signInForm.current[0].value, // Valeur de l'email
      password: signInForm.current[1].value, // Valeur du mot de passe
    };
    await dispatch(authentication(data)).then((response) => { // Appel de l'action authentication avec les données comme paramètre
      const token = response.payload?.body.token; // Récupération du token d'authentification depuis la réponse
      if (!isEmpty(token)) { // Vérifie si le token n'est pas vide
        navigate("/user"); // Redirige vers la page utilisateur
      }
      signInForm.current.reset(); // Réinitialise le formulaire après la soumission
    });
  };

  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={signInForm} onSubmit={(e) => submitForm(e)}>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button class="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
