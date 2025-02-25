import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import JSZip from "jszip";
import LogoImages from "../../components/LogoImages/LogoImages";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img from "./images/image.png";
import loaderGIF from "../../assets/img/loader-gif.gif";
import ProgressBar from "react-bootstrap/ProgressBar";
import PulseLoader from "react-spinners/PulseLoader";

const index = () => {
  const router = useRouter();
  const [selectedLogo, setSelectedLogo] = useState();
  const [imageSrcs, setImageSrcs] = useState([]);
  const [imgInfo, setImgInfo] = useState();
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogoSelect = (logo) => {
    setSelectedLogo(logo);
  };

  useEffect(() => {
    async function fetchAPI() {
      try {
        const cName = localStorage.getItem("companyName");
        const cSlogan = localStorage.getItem("companySlogan");
        const cIndustry = localStorage.getItem("industryData");
        // const logoType = localStorage.getItem("logoType");
        const fontStyle = localStorage.getItem("fontStyle");
        const industryParse = JSON.parse(cIndustry);
        // const logoTypeParse = JSON.parse(logoType);
        const fontStyleParse = JSON.parse(fontStyle);
        // const array1 = [];
        const array2 = [];
        const industryID = industryParse[0].id;

        // logoTypeParse.map((item) => {
        //   array1.push(item.id);
        // });
        fontStyleParse.map((item) => {
          array2.push(item.id);
        });

        const formData = new FormData();
        formData.append("company_name", cName.toString());
        formData.append("company_slogan", cSlogan.toString());
        formData.append("industry_id", industryID);
        formData.append("logo_ids", [2]);
        formData.append("font_ids", array2);

        const requestOptions = {
          method: "POST",
          body: formData,
          redirect: "follow",
        };

        const response = await fetch(
          "https://api.designperfecto.com/logo",
          requestOptions
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const contentLength = parseInt(
          response.headers.get("Content-Length"),
          10
        );
        const reader = response.body.getReader();

        let receivedLength = 0;
        let chunks = [];

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          chunks.push(value);
          receivedLength += value.length;
          const percentage = Math.round((receivedLength / contentLength) * 100);
          setProgress(percentage);
        }

        const blob = new Blob(chunks);

        // Load the zip file using JSZip
        const zip = new JSZip();
        await zip.loadAsync(blob);

        // Process the zip file to get image data URLs
        const imageInfo = [];
        await Promise.all(
          Object.keys(zip.files).map(async (filename) => {
            if (filename.match(/\.(jpg|jpeg|png|gif)$/i)) {
              const file = zip.files[filename];
              const imgBlob = await file.async("blob");
              const imgUrl = URL.createObjectURL(imgBlob);
              imageInfo.push({ src: imgUrl, filename });
            }
          })
        );

        setImageSrcs(imageInfo);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchAPI();
  }, []);

  const disableContextMenu = (event) => {
    event.preventDefault();
  };

  const handleDownload = async (imageDataUrl, filename) => {
    localStorage.setItem("href", imageDataUrl);
    localStorage.setItem("filename", filename);
  };

  useEffect(() => {
    if (imageSrcs.length > 0) {
      handleDownload(
        selectedLogo ? selectedLogo : imageSrcs[0].src,
        imgInfo ? imgInfo : imageSrcs[0].filename
      );
    }
  }, [selectedLogo, imageSrcs, imgInfo]);

  useEffect(() => {
    if (imageSrcs.length > 0) {
      setTimeout(() => {
        handleShow();
      }, 30000);
    }
  }, [imageSrcs]);

  return (
    <>
      <Head>
        <title>Logos</title>
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
      {imageSrcs.length > 0 ? (
        <>
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
              <div
                class="step-top-sec"
                style={{
                  top: "0",
                }}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div
                      onContextMenu={disableContextMenu}
                      className="col-lg-2 d-flex bg-white flex-lg-column flex-row"
                      style={{
                        padding: "10px",
                        maxHeight: "100vh",
                        top: "0",
                        overflow: "auto",
                      }}
                    >
                      {imageSrcs.map((logo, index) => (
                        <img
                          key={index}
                          src={logo.src} // Use the converted data URL here
                          alt={`Logo ${index}`}
                          onContextMenu={disableContextMenu}
                          className={`cLogo-item bg-white text-center ${
                            selectedLogo === logo.src
                              ? "cSelected"
                              : !selectedLogo && index === 0
                              ? "cSelected"
                              : "cUnselected"
                          }`}
                          onClick={() => {
                            handleLogoSelect(logo.src);
                            setImgInfo(logo.filename);
                          }}
                        />
                      ))}
                    </div>
                    <div
                      onContextMenu={disableContextMenu}
                      className="col-lg-10 text-center bg-white overflow-auto"
                      style={{ maxHeight: "100vh" }}
                    >
                      {imageSrcs.length > 0 && (
                        <>
                          <LogoImages
                            onContextMenu={disableContextMenu}
                            imgUrl={
                              selectedLogo ? selectedLogo : imageSrcs[0].src
                            }
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div onContextMenu={disableContextMenu} id="wrapper" class="wrapper">
            <div
              class="step-wrapper bg-white step-3"
              style={{
                width: "100%",
                height: "100vh",
                position: "relative",
                backgroundColor: "#522395",
              }}
            >
              <div
                class="step-top-sec"
                style={{
                  top: "0",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#000",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={loaderGIF.src}
                    alt="Image"
                    style={{ height: "300pt" }}
                  />
                  {progress === 0 ? (
                    <PulseLoader size={30} color="#E8A055" />
                  ) : (
                    <>
                      <h1
                        style={{ color: "#E8A055" }}
                        class="heading heading-h3"
                      >
                        {Math.round(progress)}%
                      </h1>
                      <div style={{ width: "40%" }}>
                        <ProgressBar
                          style={{ height: "20pt" }}
                          variant="warning"
                          className="text-dark"
                          animated
                          now={progress}
                          // label={`${Math.round(progress)}%`}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Modal
        onContextMenu={disableContextMenu}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered // To center align the modal
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "Gazpacho",
            }}
          >
            Need Help With Your Logo?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20pt",
          }}
        >
          <img
            src={img.src}
            className="img-fluid"
            style={{ height: "200pt" }}
            alt="Image"
          />
          <p className="mt-3">
            Hire a designer to create the perfect logo for you!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <a
            onClick={handleClose}
            className="text-decoration-none"
            href="javascript:void(Tawk_API.toggle())"
          >
            <Button
              type="button"
              variant="outline-primary"
              className="rounded-pill"
            >
              Hire a Designer
            </Button>
          </a>
          <Button
            type="button"
            className="btn btn-primary rounded-pill"
            onClick={handleClose}
          >
            No, Thanks
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer onContextMenu={disableContextMenu} />
    </>
  );
};

export default index;
