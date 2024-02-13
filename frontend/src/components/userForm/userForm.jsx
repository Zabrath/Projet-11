import React, { useRef } from "react";
import "./userForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../../redux/reducers/asyncThunk";
import { getUserInfos } from "../../redux/reducers/asyncThunk";

function UserForm(isOpen) {
  const informationsUtilisateur = useSelector((state) => state.userInfos.infos);
  const editForm = useRef();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);

  async function clickOnSubmit(e) {
    e.preventDefault();
    const putData = { userName: editForm.current[0].value };
    try {
      dispatch(putUser({ putData, token }));
    } catch (error) {
      console.log("Une erreur est survenue : " + error);
    } finally {
      dispatch(getUserInfos(token));
    }
  }

  return (
    <div className={`toggle-form ${isOpen.element ? "toggle-close" : ""}`}>

      <form ref={editForm} onSubmit={clickOnSubmit} className="userForm">
        <h2>Edit User Info</h2>
        <div className="userForm__content">
          <div className="userForm__userName">
            <label htmlFor="userName">User Name :</label>
            <input
              type="text"
              id="userName"
              defaultValue={informationsUtilisateur?.userName}
            />
          </div>
          <div className="userForm__firstName">
            <label htmlFor="firstName">First Name :</label>
            <input
              defaultValue={informationsUtilisateur?.firstName}
              type="text"
              id="firstName"
              className="lockForm"
              readOnly={true}
            />
          </div>
          <div className="userForm__lastName">
            <label htmlFor="lastName">Last Name :</label>
            <input
              defaultValue={informationsUtilisateur?.lastName}
              type="text"
              id="lastName"
              className="lockForm"
              readOnly={true}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
