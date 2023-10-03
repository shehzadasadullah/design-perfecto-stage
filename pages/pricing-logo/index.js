import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Tab1 from "../../assets/img/icons/Basic.png";
import Tab2 from "../../assets/img/icons/Standard.png";
import Tab3 from "../../assets/img/icons/Prime.png";
import Tab4 from "../../assets/img/icons/Deluxe.png";
import { useRouter } from "next/router";
import StoreContext from "../../ContextAPi/ContextApi";
import { useState } from "react";
import { useContext } from "react";

const index = () => {
  const router = useRouter();
  const PriceContext = useContext(StoreContext);
  const ItemNameContext = useContext(StoreContext);

  useEffect(() => {
    if (typeof window === "object") {
      let home = document.querySelector(".home-section");

      // console.log(scroll, "itemscroll");
      window.onscroll = function () {
        let scroll = window.scrollY;
        //console.log(scroll,"scrollvalue");
        if (scroll > 50 && scroll < 1500) {
          home.style.backgroundColor = "#FE882B";
        } else if (scroll > 1500 && scroll < 3000) {
          home.style.backgroundColor = "#3f1084";
        } else if (scroll > 3000 && scroll < 4500) {
          home.style.backgroundColor = "#FE882B";
        } else if (scroll > 4500 && scroll < 5300) {
          home.style.backgroundColor = "#FE8800;";
        } else if (scroll > 5300 && scroll < 6100) {
          home.style.backgroundColor = "#FE88A0";
        } else if (scroll > 6100 && scroll < 6900) {
          home.style.backgroundColor = "#FE882B";
        } else if (scroll > 6900 && scroll < 7700) {
          home.style.backgroundColor = "#3f1084";
        } else if (scroll > 7700 && scroll < 8500) {
          home.style.backgroundColor = "#FE8800;";
        } else {
          home.style.backgroundColor = "#FE88A0";
        }
      };
    }
  }, []);

  useEffect(() => {
    const blobUrl = localStorage.getItem("href");
    // Replace 'imageURL' with the actual URL of the image you want to download
    const blobURL = blobUrl;

    // Fetch the Blob data
    fetch(blobURL)
      .then((response) => response.blob())
      .then((blob) => {
        // Convert Blob to Base64 encoded string
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result.split(",")[1]; // Get the Base64 data part
          // Now 'base64String' contains the Blob data as a Base64 string
          console.log("BLOB: ", base64String);
          // Store the Base64 string in localStorage
          localStorage.setItem("imageBlob", base64String);
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error fetching or converting the image:", error);
      });
  }, []);

  function handler(e, value, itemName) {
    e.preventDefault();
    PriceContext.setPrice(value);
    ItemNameContext.setItemName(itemName);
    localStorage.setItem("amountLocal", value);
    localStorage.setItem("itemName", itemName);
    router.push(
      `/payment/1?item=${encodeURIComponent(
        itemName
      )}&price=${encodeURIComponent(value)}`
    );
  }
  return (
    <>
      <Head>
        <title>Inspiring Logo Designs WithPocket-Friendly Pricing.</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div
        style={{ transition: "background 1s ease", backgroundColor: "#FE882B" }}
        className="home-section"
      >
        <Header />
        <div id="wrapper" class="wrapper">
          <div>
            <main class="page-content">
              <div
                class="brook-portfolio-area pb--60 rslide pt--130"
                data-background="#ff5b51"
                id="lb-package"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="brook-section-title mb--45 text-center">
                        <h2 class="heading-title text-white">Pricing</h2>
                        <h1 class="heading heading-h3 text-white">
                          Inspiring Logo Designs With
                          <br />
                          Pocket-Friendly Pricing
                        </h1>
                        <h6 class="heading heading-h6 text-white letter-spacing-1">
                          Affordable yet unique digital creative and design
                          services that are tailor-made according to your
                          personalized needs. We mean your business.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="pricing-tabs">
                        <ul class="nav nav-tabs">
                          <li class="nav-item">
                            {" "}
                            <a
                              class="nav-link active"
                              data-bs-toggle="tab"
                              href="#logo-tab"
                              id="logo-tab-link"
                            >
                              {" "}
                              Pricing{" "}
                            </a>{" "}
                          </li>
                        </ul>
                        <div class="tab-content">
                          <div
                            id="logo-tab"
                            class="tab-pane animated fadeIn active"
                          >
                            <br />
                            <div class="row justify-content-center gap-4 align-items-center mlr--7">
                              <div class="col-xl-5 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$9</h2>
                                    <h1>Ready Made Logo</h1>{" "}
                                    <img
                                      src={Tab1.src}
                                      loading="lazy"
                                      alt="Pricing icon"
                                    />
                                  </div>
                                  <div
                                    style={{
                                      height: "auto",
                                    }}
                                    class="price-detail"
                                  >
                                    <h5>What you will Get?</h5>
                                    <ul>
                                      <li>1 Finalized Logo</li>
                                      <li>100% Ownership</li>
                                      <li>No Print Ready .PNG File</li>
                                      <li>No Vector .EPS File</li>
                                      <li>No Editable Vector .AI File</li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                      onClick={(e) => {
                                        if (
                                          !localStorage.getItem("downloadLogo")
                                        ) {
                                          localStorage.setItem(
                                            "downloadLogo",
                                            "true"
                                          );
                                        }
                                        handler(e, "9", "Ready Made Logo");
                                      }}
                                    >
                                      Pay Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="col-xl-5 plr-7">
                                <div class="single-pricing">
                                  <div class="price-header">
                                    <h2>$399</h2>
                                    <h1>
                                      Custom Website With Professional Logo
                                    </h1>{" "}
                                    <img
                                      src={Tab1.src}
                                      loading="lazy"
                                      alt="Pricing icon"
                                    />
                                  </div>
                                  <div
                                    style={{
                                      height: "auto",
                                    }}
                                    class="price-detail"
                                  >
                                    <h5>What you will Get?</h5>
                                    <ul>
                                      <li>
                                        5 Pages Static Website with web page
                                        banners
                                      </li>
                                      <li>
                                        Company Profile Page & Product/Service
                                        Page
                                      </li>
                                      <li>Lead Inquiry Form</li>
                                      <li>Social Media Integrations</li>
                                      <li>
                                        4 Logo Design Concepts By 3 Experienced
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="price-link">
                                    {" "}
                                    <a
                                      onClick={(e) => {
                                        localStorage.removeItem("downloadLogo");
                                        handler(
                                          e,
                                          "399",
                                          "Custom Website With Professional Logo"
                                        );
                                      }}
                                      data-detail="USD-100-Item Name-Category"
                                      class="theme-btn pay-now-btn"
                                    >
                                      Order Now
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
