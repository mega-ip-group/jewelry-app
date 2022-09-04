import "./App.css";
import Header from "./Components/Genral/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./MainView/Login/Login";
import React from "react";
function App() {
  function Home() {
    return <React.Fragment>I'm at home</React.Fragment>;
  }
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
