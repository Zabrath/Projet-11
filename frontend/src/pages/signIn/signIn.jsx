import React, { useRef } from "react";
import "./signIn.scss";
import { authentication } from "../../redux/reducers/asyncThunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../../components/UTILS/isEmpty";

function SignIn() {
  const signInForm = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      email: signInForm.current[0].value,
      password: signInForm.current[1].value,
    };
    console.log(data);

    await dispatch(authentication(data)).then((response) => {
      const token = response.payload?.body.token;
      if (!isEmpty(token)) {
        navigate("/user");
      }
      signInForm.current.reset();
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
