import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setDesignType } from "../../redux/slogan/slogan.slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

import Image1 from "../../assets/img/logo-style/1_1.png";
import Image2 from "../../assets/img/logo-style/2_1.png";
import Image6 from "../../assets/img/logo-style/6_1.png";

const logoStyle = [
  { src: Image2, title: "Icon Based", id: 1 },
  { src: Image6, title: "Name Based", id: 2 },
  { src: Image1, title: "Initial Based", id: 3 },
];

const index = () => {
  const router = useRouter();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const notify = () => toast("Select at least one type!");

  const handleCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      if (selectedTypes.length < 2) {
        setSelectedTypes((prev) => [...prev, value]);
      } else {
        if (!selectedTypes.includes(value)) {
          e.target.checked = false;
        }
      }
    } else {
      setSelectedTypes((prev) => prev.filter((type) => type !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTypes.length === 0) {
      notify();
    } else {
      const logoType = [];
      selectedTypes.map((item) => {
        logoStyle
          .filter((itemL) => itemL.title.toUpperCase() === item.toUpperCase())
          .map((itemM) => {
            logoType.push({ id: itemM.id, logoType: itemM.title });
          });
      });
      console.log(JSON.stringify(logoType));
      localStorage.setItem("logoType", JSON.stringify(logoType));
      router.push("/gen-font-style");
    }
  };
  return (
    <>
      <Head>
        <title>Logo Styles</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <div id="wrapper" class="wrapper">
        <div
          class="step-wrapper step-3"
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            backgroundColor: "#522395",
          }}
        >
          <img
            src="https://www.logura.com/assets/img/steps/step-1/1.png"
            class="top-left-img"
          />
          <img
            src="https://www.logura.com/assets/img/steps/step-3/down.png"
            class="bottom-left-img"
          />
          <img
            src="https://www.logura.com/assets/img/steps/step-3/up.png"
            class="top-right-img"
          />
          <img
            src="https://www.logura.com/assets/img/steps/step-1/4.png"
            class="bottom-right-img"
          />
          <div class="step-top-sec">
            <form onSubmit={(e) => e.preventDefault()}>
              <div class="center-container">
                <div class="container">
                  <div class="steps-heading">
                    <h1 class="heading heading-h3 text-white">
                      Choose Your Logo Design <br />
                      Type & Preference
                    </h1>
                  </div>
                  <div class="step-options max-900px">
                    <div class="row justify-content-center">
                      {logoStyle.map((logoStyle) => {
                        return (
                          <div class="col-md-4 col-12">
                            <input
                              type="checkbox"
                              name=""
                              class="step-checkbox"
                              id={logoStyle?.id}
                              value={logoStyle?.title}
                              onClick={handleCheck}
                            />
                            <label class="step-label" htmlFor={logoStyle?.id}>
                              <div class="step-imgs step-hover">
                                <img src={logoStyle?.src?.src} />
                              </div>
                              <h3 class="step-heading">{logoStyle?.title}</h3>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="step-footer"
                style={{ position: "absolute", bottom: "70px" }}
              >
                <button
                  type="submit"
                  class="step-submit"
                  onClick={handleSubmit}
                >
                  Next &gt;&gt;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
