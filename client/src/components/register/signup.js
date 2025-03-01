import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <div className="container-side-content">
        {/* <img src={LoginImg} /> */}
        <div className="login">
          <div className="inner">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-interval="100"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201909/boy-330582_960_720-x640.jpg?LmD0LKbk6ek.kT8UFhoKiDkpTFtjPQBZ"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="http://www.themetrognome.in/wp-content/uploads/2015/03/Lost-children-of-India.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mc.webpcache.epapr.in/pro.php?size=large&in=https://mcmscache.epapr.in/post_images/website_326/post_26593969/full.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-user-content">
        <div className="user-content font">
          <form>
            <h3 className="">Sign Up</h3>
            <div className="username">
              <label className="usertext ">
                <b>Full Name</b>
              </label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="username">
              <label className="usertext ">
                <b>Email Address</b>
              </label>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className="password">
              <label className="usertext ">
                <b>Password</b>
              </label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="login-btn">
              <button>Sign Up</button>
            </div>
            <div className="issue">
              <span>
                Already have an account?
                <Link to="/login">
                  <button className="issue-btn ">
                    <b>Log In</b>
                  </button>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
