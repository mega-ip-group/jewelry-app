import "./App.css";
import Header from "./Components/Genral/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./MainView/Login/Login";
import Signup from "./MainView/Signup/Signup";
import React from "react";
import Footer from "./Components/Genral/Footer/Footer";
import Banner from "./Components/Genral/Banner/Banner";
import Service from "./Components/Genral/Service/Service";
import Blog from "./Components/Genral/Blog/Blog";
import TopView from "./Components/Genral/TopView/TopView";
import MoreInfo from "./Components/Genral/MoreInfo/MoreInfo";
import InfoSection from "./Components/Genral/InfoSection/InfoSection";
function App() {
  function Home() {
    return (
      <React.Fragment>
        <Banner />
        <Service/>
        <InfoSection/>
        <TopView/>
        <MoreInfo/>
        <Blog/>
      </React.Fragment>
    );
  }
  return (
    <div className="app">
      <Header />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <div className="footer__container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
