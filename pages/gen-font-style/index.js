import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

import Childish from "../../assets/img/font-images/childish.svg";
import Smoother from "../../assets/img/font-images/smoother.svg";
import Handwritten from "../../assets/img/font-images/handwritten.svg";
import Rounded from "../../assets/img/font-images/rounded.svg";
import Texture from "../../assets/img/font-images/texture.svg";
import Brush from "../../assets/img/font-images/brush.svg";

const fontStyle = [
  { src: Childish, title: "Childish", id: 1 },
  { src: Smoother, title: "Smoother", id: 2 },
  { src: Handwritten, title: "Handwritten", id: 3 },
  { src: Rounded, title: "Rounded", id: 4 },
  { src: Texture, title: "Texture", id: 5 },
  { src: Brush, title: "Brush", id: 6 },
];

const index = () => {
  const router = useRouter();
  const [selectedStyles, setSelectedStyles] = useState([]);
  const notify = () => toast("Select at least one style!");

  const handleCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      if (selectedStyles.length < 3) {
        setSelectedStyles((prev) => [...prev, value]);
      } else {
        if (!selectedStyles.includes(value)) {
          e.target.checked = false;
        }
      }
    } else {
      setSelectedStyles((prev) => prev.filter((type) => type !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedStyles.length === 0) {
      notify();
    } else {
      const fontStyles = [];
      selectedStyles.map((item) => {
        fontStyle
          .filter((itemL) => itemL.title.toUpperCase() === item.toUpperCase())
          .map((itemM) => {
            fontStyles.push({ id: itemM.id, fontStyle: itemM.title });
          });
      });
      console.log(JSON.stringify(fontStyles));
      localStorage.setItem("fontStyle", JSON.stringify(fontStyles));
      router.push("/gen-logo-animation");
    }
  };
  return (
    <>
      <Head>
        <title>Font Styles</title>
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
                      {fontStyle.map((fontStyle) => {
                        return (
                          <div class="col-md-4 col-12">
                            <input
                              type="checkbox"
                              name=""
                              class="step-checkbox"
                              id={fontStyle?.id}
                              value={fontStyle?.title}
                              onClick={handleCheck}
                            />
                            <label class="step-label" htmlFor={fontStyle?.id}>
                              <div class="step-imgs step-hover">
                                <img
                                  style={{
                                    height: "100pt",
                                    padding: "10pt",
                                    width: "200pt",
                                    backgroundColor: "#F0F8FF",
                                    borderRadius: "10px",
                                    boxShadow:
                                      "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                  }}
                                  src={fontStyle?.src?.src}
                                />
                              </div>
                              <h3 class="step-heading">{fontStyle?.title}</h3>
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
