import "./App.css";
import Header from "./Components/Genral/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./MainView/Login/Login";
import React from "react";
import Footer from "./Components/Genral/Footer/Footer";
import Banner from "./Components/Genral/Banner/Banner";
function App() {
  function Home() {
    return <React.Fragment></React.Fragment>;
    
  }
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Banner/>
      <Footer />
    </div>
  );
}

export default App;
