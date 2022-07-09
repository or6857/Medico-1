import React from "react";
import NavbarComp from "../Navbar/Nav";
import image from "../../assets/landingPage.svg";
import "./landing.css";
import blob1 from "../../assets/blob1.png";
import blob2 from "../../assets/blob2.png";
import blob3 from "../../assets/blob3.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <>
      <NavbarComp />
      <div className="row">
        <div className="container col-md-6">
          <img src={image} className="landingImg" alt="navbar-logo" />
        </div>

        <img className="blob1" src={blob1} />
        <img className="blob2" src={blob2} />
        <img className="blob3" src={blob3} />

        <div className="side-content col-md-6">
          <h2 className="catchy">CATCHY TITLE GOES HERE</h2>
          <br />
          <h4 className="Lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <br />
          <Link to="/explore">
            <button className="explore-btn">EXPLORE</button>
          </Link>
        </div>
      </div>
      <div className="our_services_container">
          <div className="our_services">
            <div className="service_heading">
                <h2><b>OUR SERVICES</b></h2>
            </div>
            <div className="service_box">
                <div className="item1"><h5>Lorem, ipsum.</h5></div>
                <div className="item2"><h5>Lorem, ipsum.</h5></div>
                <div className="item3"><h5>Lorem, ipsum.</h5></div>
                <div className="item4"><h5>Lorem, ipsum.</h5></div>
                <div className="item5"><h5>Lorem, ipsum.</h5></div>
                <div className="item6"><h5>Lorem, ipsum.</h5></div>
            </div>
          </div>
      </div>
      <Footer/>
      
    </>
  );
};

export default Landing;
