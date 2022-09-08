import { useState } from "react";
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
import Cart from "./MainView/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Contact from "./Components/Genral/Contact/Contact";
import {useEffect} from "react";
function Cont() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
      document.head.appendChild(stylesheet);
    }
  }, []);
  return (
    <div className="Contact">
      <header className="App-header">
        <div className="py-6">
          <Contact/>
        </div>
      </header>
    </div>
  );
}
function App() {
  const [showLoginINfo, setShowLoginInfo] = useState({ login: false });
  function Home() {
    return (
      <React.Fragment>
        <Banner />
        <Service />
        <InfoSection />
        <TopView />
        <MoreInfo />
        <Blog />
      </React.Fragment>
    );
  }

  return (
    <div className="app">
      <Header
        showLoginINfo={showLoginINfo}
        setShowLoginInfo={setShowLoginInfo}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              showLoginINfo={showLoginINfo}
              setShowLoginInfo={setShowLoginInfo}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/Contact" element={<Cont />} />
      </Routes>
      <div className="footer__container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
