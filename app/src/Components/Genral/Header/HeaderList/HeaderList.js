import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderList.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function HeaderList({ showLoginINfo, setShowLoginInfo }) {
  let navigate = useNavigate();

  const LoginHandler = () => {
    navigate("/login");
  };
  const HomeHandler = () => {
    navigate("/");
  };
  return (
    <ul className="header__list">
      {showLoginINfo.login && (
        <li
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon />
        </li>
      )}
      <li onClick={HomeHandler}>home</li>
      <li>Shop</li>

      <li>Dashboard</li>
      <li>Contact</li>
      {showLoginINfo.login ? (
        <li
          onClick={() => {
            setShowLoginInfo({ login: false });
          }}
        >
          Logout
        </li>
      ) : (
        <li onClick={LoginHandler}>Login</li>
      )}
      {showLoginINfo.login && <li>Hi Mr {showLoginINfo.name}</li>}
    </ul>
  );
}

export default HeaderList;
