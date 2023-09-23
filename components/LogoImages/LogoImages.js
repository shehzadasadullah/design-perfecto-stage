import React, { useState } from "react";
import bg1 from "./Images/1.png";
import bg2 from "./Images/2.png";
import bg3 from "./Images/3.png";
import bg4 from "./Images/4.png";
import bg5 from "./Images/5.png";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

function LogoImages(props) {
  const router = useRouter();

  return (
    <>
      {/* bg 1 */}

      <div
        style={{
          // backgroundImage: `url(${imgbg.src})`,
          // backgroundSize: "cover",
          height: "auto",
          width: "100%",
          marginTop: "8%",
          // border: "2px solid blue",
        }}
        className="row bg-white justify-content-center align-items-center"
      >
        <h1
          style={{
            fontFamily: "Gazpacho",
          }}
          className="text-dark"
        >
          Your logo is just the beginning!
        </h1>
        <div style={{ width: "100%" }}>
          <Button
            type="button"
            variant="primary"
            className="rounded-pill fw-bold mt-4"
            onClick={() => {
              localStorage.setItem("downloadLogo", "true");
              router.push("/personal-information");
            }}
          >
            Download Your Logo! 🤍
          </Button>
        </div>
        <div
          style={{
            // border: "2px solid red",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "70%", // Adjust the width as needed
            paddingTop: "70%", // Set the padding-top to maintain a 1:1 aspect ratio
            margin: "0 auto", // Center the div horizontally
          }}
          className="text-center mt-4"
        >
          <div
            style={{
              backgroundImage: `url(${bg1.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                marginLeft: "11%",
                marginTop: "11%",
                width: "25%", // Set a fixed width
                height: "34%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* bg 2 */}

      <div
        style={{
          height: "auto",
          // border: "2px solid",
          width: "100%",
          marginTop: "-20%",
        }}
        className="row bg-white justify-content-center align-items-center"
      >
        <h4 style={{ color: "#FC6078", fontFamily: "Gazpacho" }}>
          meet your new
        </h4>
        <h1
          style={{
            fontFamily: "Gazpacho",
            marginBottom: "10%",
          }}
          className="text-dark"
        >
          Digital business card
        </h1>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "70%", // Adjust the width as needed
            paddingTop: "70%", // Set the padding-top to maintain a 1:1 aspect ratio
            margin: "0 auto", // Center the div horizontally
          }}
          className="text-center"
        >
          <div
            style={{
              backgroundImage: `url(${bg2.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                marginLeft: "40.5%",
                marginTop: "28%",
                width: "22.6%", // Set a fixed width
                height: "10%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* bg 3 */}

      <div
        style={{
          height: "auto",
          // border: "2px solid",
          width: "100%",
          marginTop: "7%",
        }}
        className="row bg-white justify-content-center align-items-center"
      >
        <h4 style={{ color: "#FC6078", fontFamily: "Gazpacho" }}>
          These can be your new
        </h4>
        <h1
          style={{
            fontFamily: "Gazpacho",
            marginBottom: "10%",
          }}
          className="text-dark"
        >
          Business cards
        </h1>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "70%", // Adjust the width as needed
            paddingTop: "70%", // Set the padding-top to maintain a 1:1 aspect ratio
            margin: "0 auto", // Center the div horizontally
          }}
          className="text-center"
        >
          <div
            style={{
              backgroundImage: `url(${bg3.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                marginLeft: "18%",
                marginTop: "34%",
                width: "38%", // Set a fixed width
                height: "21%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-25deg)",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid blue",
                marginLeft: "49%",
                marginTop: "-10%",
                width: "38%", // Set a fixed width
                height: "26%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-29deg)",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* bg 4 */}

      <div
        style={{
          height: "auto",
          width: "100%",
          // border: "2px solid",
          marginTop: "6%",
        }}
        className="row bg-white justify-content-center align-items-center"
      >
        <h4 style={{ color: "#FC6078", fontFamily: "Gazpacho" }}>Get Your</h4>
        <h1
          style={{
            fontFamily: "Gazpacho",
          }}
          className="text-dark"
        >
          Branded Logos
        </h1>
        <div
          style={{
            // border: "2px solid red",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "70%", // Adjust the width as needed
            paddingTop: "70%", // Set the padding-top to maintain a 1:1 aspect ratio
            margin: "0 auto", // Center the div horizontally
          }}
          className="text-center mt-5"
        >
          <div
            style={{
              backgroundImage: `url(${bg4.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                marginLeft: "28%",
                marginTop: "7%",
                width: "17%", // Set a fixed width
                height: "23%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid blue",
                marginLeft: "71%",
                marginTop: "-15%",
                width: "22%", // Set a fixed width
                height: "18%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid red",
                marginLeft: "5%",
                marginTop: "1%",
                width: "18%", // Set a fixed width
                height: "10%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-27deg)",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid blue",
                marginLeft: "20%",
                marginTop: "-7%",
                width: "16%", // Set a fixed width
                height: "13%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-34deg)",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* bg 5 */}

      <div
        style={{
          height: "auto",
          width: "100%",
          // border: "2px solid",
          marginTop: "-28%",
        }}
        className="row bg-white justify-content-center align-items-center"
      >
        <h4 style={{ color: "#FC6078", fontFamily: "Gazpacho" }}>Print Your</h4>
        <h1
          style={{
            fontFamily: "Gazpacho",
            marginBottom: "10%",
          }}
          className="text-dark"
        >
          Merchandise
        </h1>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "70%", // Adjust the width as needed
            paddingTop: "70%", // Set the padding-top to maintain a 1:1 aspect ratio
            margin: "0 auto", // Center the div horizontally
          }}
          className="text-center"
        >
          <div
            style={{
              backgroundImage: `url(${bg5.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                // border: "2px solid red",
                marginLeft: "13%",
                marginTop: "35%",
                width: "32%", // Set a fixed width
                height: "20%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid blue",
                marginLeft: "39%",
                marginTop: "-17%",
                width: "21%", // Set a fixed width
                height: "30%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid green",
                marginLeft: "59%",
                marginTop: "-17%",
                width: "28%", // Set a fixed width
                height: "17%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid purple",
                marginLeft: "80%",
                marginTop: "-29%",
                width: "14%", // Set a fixed width
                height: "13%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div
              style={{
                // border: "2px solid orange",
                marginLeft: "6%",
                marginTop: "-1%",
                width: "14%", // Set a fixed width
                height: "19%", // Set a fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={props.imgUrl}
                alt="Selected Logo"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* logo image */}

      <div
        style={{
          // border: "2px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "auto",
          marginTop: "-10%",
        }}
      >
        <h4 style={{ color: "#FC6078", fontFamily: "Gazpacho" }}>
          What are you waiting for?
        </h4>
        <h1
          style={{
            fontFamily: "Gazpacho",
          }}
          className="text-dark"
        >
          Get Your Logo Now
        </h1>
        <div className="mt-2" style={{ width: "100%", zIndex: "999999" }}>
          <Button
            type="button"
            variant="primary"
            className="rounded-pill fw-bold"
            onClick={() => {
              localStorage.setItem("downloadLogo", "true");
              router.push("/personal-information");
            }}
          >
            Download Your Logo! 🤍
          </Button>
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <img
            src={props.imgUrl}
            alt=""
            className="img-fluid"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default LogoImages;
