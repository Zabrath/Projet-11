import React, { useEffect, useState } from "react";
import "./user.scss";
import ViewTransaction from "../../components/viewTransaction/viewTransaction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfos } from "../../redux/reducers/asyncThunk";
import { isEmpty } from "../../components/UTILS/isEmpty";
import UserForm from "../../components/userForm/userForm";

function User() {
  const token = useSelector((state) => state.authentication.token);


  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(token)){
      navigate("/user")
      dispatch(getUserInfos(token))
    }
  }, []);

function toggleForm() {
  setIsOpen((prevIsOpen) => !prevIsOpen)

}

  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
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