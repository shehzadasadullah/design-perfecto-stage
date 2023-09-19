import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

// import gif1 from "./animations/a1.gif";
// import gif2 from "./animations/a2.gif";
// import gif3 from "./animations/a3.gif";
import gif4 from "./animations/a4.gif";
// const gifs = [gif1.src, gif2.src, gif3.src, gif4.src];
const gifs = [gif4.src, gif4.src, gif4.src];

const index = () => {
  const router = useRouter();
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 100); // Increment every 1000ms (1 second)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) router.push("/logos");
  }, [count]);

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
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 text-center">
                  {gifs.map((gif, index) => (
                    <>
                      <div
                        style={{
                          display: "flex",
                          color: "white",
                          flexDirection: "column",
                          justifyContent: "center",
                          justifyItems: "center",
                          opacity: index === currentGifIndex ? 1 : 0,
                          transition: "opacity 1s ease-in-out",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          position: "absolute",
                          top: "25%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <img
                          style={{ height: "200pt" }}
                          key={index}
                          src={gif}
                          alt="xad"
                        />

                        <h4 className="heading heading-h5 text-white">
                          {index === 0 ? (
                            <span style={{ color: "#FEA300" }}>
                              Designing your perfect Logo!
                            </span>
                          ) : index === 1 ? (
                            <span style={{ color: "#FEA300" }}>
                              Creating Your Business Cards!
                            </span>
                          ) : index === 2 ? (
                            <span style={{ color: "#FEA300" }}>
                              Planning Your Social Posts!
                            </span>
                          ) : (
                            ""
                          )}
                        </h4>
                        <h1 className="heading heading-h1 mt-5 text-white font-120 textgrad">
                          {count}%
                        </h1>
                      </div>
                    </>
                  ))}
                </div>
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
