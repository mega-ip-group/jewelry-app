import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderList.css";
function HeaderList() {
  let navigate = useNavigate();

  const LoginHandler = () => {
    navigate("/login");
  };
  const HomeHandler = () => {
    navigate("/");
  };
  return (
    <ul className="header__list">
      <li onClick={HomeHandler}>home</li>
      <li>Shop</li>
      <li>Dashboard</li>
      <li>Contact</li>
      <li onClick={LoginHandler}>Login</li>
    </ul>
  );
}

export default HeaderList;
