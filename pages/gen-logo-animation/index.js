import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import GIF from "../../assets/img/animation-gif.gif";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/logos");
    }, 12200);
  }, []);

  return (
    <>
      <Head>
        <title>Generating Logo</title>
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
            backgroundColor: "#000",
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
            <div
              style={{ height: "auto", width: "100%", overflow: "hidden" }}
              className="row justify-content-center align-items-center"
            >
              <div className="col-12 text-center">
                <img src={GIF.src} alt="GIF" style={{ height: "450pt" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
