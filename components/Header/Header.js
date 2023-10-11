import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import DesignPerfecto from "../../assets/img/webicon.png";
import { useRouter } from "next/router";
import Router from "next/router";

const Header = () => {
  const router = useRouter();
  const disableContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    // <!-- Header -->
    <>
      <nav
        onContextMenu={disableContextMenu}
        className="navbar navbar-expand-xxl navbar-dark zIndex p-3"
        style={{
          // paddingTop: "8px !important",
          // paddingBottom: "8px !important",
          backgroundColor: "#1F2327",
          zIndex: "9999 !important",
        }}
      >
        <div class="text-left flex-20">
          <div
            class="logo"
            style={
              {
                // maxWidth: "150px",
                // marginLeft: "60px",
                // marginRight: "50px",
              }
            }
          >
            {" "}
            <a
              onClick={(e) => {
                e.preventDefault();
                Router.push("/home");
              }}
            >
              {" "}
              <img
                // src="../../../assets/img/webicon.png"
                src={DesignPerfecto.src}
                alt="Images"
                loading="lazy"
                style={{ height: "50pt" }}
              />
            </a>{" "}
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse mt-3 mt-xxl-0"
          id="navbarSupportedContent"
        >
          <div class="header-flex-right flex-80 ms-5">
            <div class="">
              <ul class="mainmenu navbar-nav">
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a class="nav-link">
                    <span
                      class="link-styling"
                      onClick={(e) => {
                        e.preventDefault();
                        Router.push("/home");
                      }}
                    >
                      Home
                    </span>
                  </a>
                </li>
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a class="nav-link">
                    <span
                      class="link-styling"
                      onClick={(e) => {
                        e.preventDefault();
                        Router.push("/logo-branding");
                      }}
                    >
                      Logo & Branding
                    </span>
                  </a>
                </li>
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a class="nav-link">
                    <span
                      class="link-styling"
                      onClick={(e) => {
                        e.preventDefault();
                        Router.push("/web-design");
                      }}
                    >
                      Website
                    </span>
                  </a>
                </li>
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a class="nav-link">
                    <span
                      class="link-styling"
                      onClick={(e) => {
                        e.preventDefault();
                        Router.push("/video-animation");
                      }}
                    >
                      Video Animation
                    </span>
                  </a>
                </li>
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a
                    class="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/mobileapp");
                    }}
                  >
                    <span class="link-styling">Mobile App</span>
                  </a>
                </li>
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a
                    class="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/portfolio");
                    }}
                  >
                    <span class="link-styling">Portfolio</span>
                  </a>
                </li>
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a
                    class="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/pricing");
                    }}
                  >
                    <span class="link-styling">Pricing</span>
                  </a>
                </li>
                {/* <!--<li class="lavel-1"><a href="/blog"><span>Blog</span></a></li>--> */}
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a
                    class="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      Router.push("/about-us");
                    }}
                  >
                    <span class="link-styling">About Us</span>
                  </a>
                </li>
                {/* <!-- <li class="lavel-1"><a href="/contact"><span>Contact</span></a></li>--> */}
                <li
                  class="lavel-1 nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a class="contact-num-header nav-link">
                    {/* <i class="fa fa-phone flip-mr-5"></i>{" "} */}
                    <BsFillTelephoneFill color="#999da0" />
                    <span class="link-styling">307-212-6611</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav
        onContextMenu={disableContextMenu}
        className=" navbar-dark zIndex"
        style={{
          paddingTop: "8px !important",
          paddingBottom: "8px !important",
          backgroundColor: "#FEA300",
          zIndex: "9999 !important",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about-content text-center pt-2">
                <p>
                  <i style={{ fontSize: 20 }}>
                    First Time User? Get 20% Off On Your First Order Using Promo{" "}
                    <b>DESIGN20</b>
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
