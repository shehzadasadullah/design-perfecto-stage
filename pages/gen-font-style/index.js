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
  const [selectedStyle, setSelectedStyle] = useState(""); // Use state to store the selected style
  const [fontStyles, setFontStyles] = useState([]); // Use an array to store selected styles
  const notify = () => toast("Select at least one style!");

  const handleCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedStyle(value);
    } else {
      setSelectedStyle("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedStyle === "") {
      notify();
    } else {
      const selectedFontStyle = fontStyle.find(
        (item) => item.title.toUpperCase() === selectedStyle.toUpperCase()
      );

      if (selectedFontStyle) {
        const updatedFontStyles = [...fontStyles, selectedFontStyle];
        setFontStyles(updatedFontStyles);
        localStorage.setItem("fontStyle", JSON.stringify(updatedFontStyles));
        router.push("/logos");
      }
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
          {/* ... (your existing code for step images) */}
          <div class="step-top-sec">
            <form onSubmit={handleSubmit}>
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
                          <div class="col-md-4 col-12" key={fontStyle.id}>
                            <input
                              type="checkbox" // Use checkboxes
                              name="fontStyle" // Group checkboxes by name
                              class="step-checkbox" // Use a class for checkboxes
                              id={fontStyle.id}
                              value={fontStyle.title}
                              checked={selectedStyle === fontStyle.title} // Check if the style is selected
                              onChange={handleCheck}
                            />
                            <label class="step-label" htmlFor={fontStyle.id}>
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
                                  src={fontStyle.src.src}
                                />
                              </div>
                              <h3 class="step-heading">{fontStyle.title}</h3>
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
                  // disabled={!selectedStyle}
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
