import React, { useState } from "react";
import heart from "../../assets/img/heart.png";
import Router from "next/router";
import { setBusinessName } from "../../redux/slogan/slogan.slice";
import { useSelector, useDispatch } from "react-redux";
import logosImage from "../../assets/img/logos-image.webp";

const HeroSection = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBusinessName(name));
    Router.push(`/generate-logo?businessName=${name}`);
  };
  return (
    <div
      style={{ backgroundColor: "#343A40" }}
      class="revolution-slider-area slider-bg-1 slider-bg-2 rslide home-banner-s pb--60 home-margin"
      data-background="#fe882b"
    >
      <div class="revolution-slider">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 mt-5 text-center d-block d-md-none">
              <img
                style={{
                  width: "70%",
                  height: "70%",
                }}
                src={logosImage.src}
                alt=""
              />
            </div>
            <div class="col-lg-7 d-none d-md-block">
              <div class="inner pt--190 pb--230 text text-lg-start text-center">
                <h1 class="heading heading-h1 text-white font-120 textgrad">
                  Create a Logo you love <br /> in minutes{" "}
                  <img src={heart.src} class="heart-img" />
                </h1>
                <h5 class="heading heading-h1 text-white font-120 textgrad mt-2">
                  Just type in your name and industry, choose which style <br />{" "}
                  you love <br /> and voila - you've got a logo!
                </h5>
                <div class="bkseparator--15"></div>
                <div class="black-bg-banner-2">
                  <div class="slider-btn">
                    <form id="brief-form" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="cname"
                        placeholder="Enter a logo name"
                        class="banner-input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autofocus
                      />
                      <button
                        class="banner-input-submit"
                        type="submit"
                        style={{ backgroundColor: "#fea300" }}
                      >
                        Get Started
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 text-center d-none d-md-block">
              <img className="img-fluid" src={logosImage.src} alt="" />
            </div>
            <div class="col-12 d-block d-md-none">
              <div class="inner mt-5 p-0 mb-5 text text-lg-start text-center">
                <h1 class="heading heading-h1 text-white font-120 textgrad">
                  Create a Logo you love <br /> in minutes{" "}
                  <img src={heart.src} class="heart-img" />
                </h1>
                <h5 class="heading heading-h1 text-white mt-2 font-120 textgrad">
                  Just type in your name and industry, choose which style <br />{" "}
                  you love <br /> and voila - you've got a logo!
                </h5>
                <div class="bkseparator--15"></div>
                <div class="black-bg-banner-2">
                  <div class="slider-btn">
                    <form id="brief-form" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="cname"
                        placeholder="Enter a logo name"
                        class="banner-input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autofocus
                      />
                      <button
                        class="banner-input-submit"
                        type="submit"
                        style={{ backgroundColor: "#fea300" }}
                      >
                        Get Started
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="basic-modern-dots white-dots" id="banner-dots-link">
          <div class="dot first-circle"></div>
          <div class="dot second-circle"></div>
          <div class="dot third-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
