import React from "react";
// import { Col, Row } from 'react-bootstrap';
import { Container } from "@mui/system";
// import { useHistory } from 'react-router-dom';
import "./Service.css";
import img1 from "../../../images/men-2.png";
import img2 from "../../../images/women-2.png";
import img3 from "../../../images/kids-2.png";
const Service = () => {
  // const navigate = useHistory();
  // const handleChange = () => {
  //     navigate.push(`/jewellery`)

  return (
    <div className="service">
      <div className="service__card">
        <div className="service__info">
        <h5 style={{ color: "#f44c7a" }}>Men Accessories</h5>
        <p className="text-muted">100+ Products</p>
        <button className="btn-service">
          Shop Now <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
        <img src={img1} />
      </div>
      <div className="service__card">
        <div className="service__info">
        <h5 style={{ color: "#f44c7a" }}>Girls Accessories</h5>
        <p className="text-muted">100+ Products</p>
        <button className="btn-service">
          Shop Now <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
        <img src={img2} />
      </div>
      <div className="service__card">
        <div className="service__info">
        <h5 style={{ color: "#f44c7a" }}>kids Accessories</h5>
        <p className="text-muted">100+ Products</p>
        <button className="btn-service">
          Shop Now <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
        <img src={img3} />
      </div>
    </div>
  );
};

export default Service;
