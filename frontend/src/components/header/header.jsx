import React from "react";
import "./header.scss";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../UTILS/isEmpty";
import { logout } from "../../redux/reducers/authenticationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const dispatch = useDispatch();
  const token = useSelector(
    (state) => state.authentication.token || localStorage.getItem("token")
  );
  const dataUser = useSelector((state) => state.userInfos.infos);

  function logOut() {
    dispatch(logout(token));
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isEmpty(token) ? (
          <Link className="main-nav-item" to="/signIn">
            <FontAwesomeIcon className="main-nav-icone" icon={faUserCircle} />
            Sign In
          </Link>
        ) : (
          <>
            <Link to="/user" className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              {dataUser?.userName}
            </Link>

            <Link to="/" className="main-nav-item" onClick={logOut}>
              <FontAwesomeIcon icon={faUserCircle} />
              logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
