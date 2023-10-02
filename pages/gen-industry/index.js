import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Restaurants from "../../assets/img/c-industries/Restaurants.png";
import Fitness from "../../assets/img/c-industries/Fitness.png";
import Transport from "../../assets/img/c-industries/Transport.png";
import Dental from "../../assets/img/c-industries/Dental.png";
import Games from "../../assets/img/c-industries/Games.png";
import Photography from "../../assets/img/c-industries/Photography.png";
import Fashion from "../../assets/img/c-industries/Fashion.png";
import Technology from "../../assets/img/c-industries/Technology.png";
import Plumbing from "../../assets/img/c-industries/Plumbing.png";
import HAVC from "../../assets/img/c-industries/HAVC.png";
import Construction from "../../assets/img/c-industries/Construction.png";
import Realtor from "../../assets/img/c-industries/Realtor.png";
import LawFirm from "../../assets/img/c-industries/Law.png";
import Community from "../../assets/img/c-industries/Community.png";
import Animal from "../../assets/img/c-industries/Animal.png";
import Education from "../../assets/img/c-industries/Education.png";
import Event from "../../assets/img/c-industries/Event.png";
import Landscaping from "../../assets/img/c-industries/Landscaping.png";
import Jewellers from "../../assets/img/c-industries/Jewellers.png";
import Travel from "../../assets/img/c-industries/travel.png";
import Salon from "../../assets/img/c-industries/Salon.png";

const industry = [
  { src: Restaurants, title: "Restaurants", id: 1 },
  { src: Fitness, title: "Fitness", id: 2 },
  { src: Transport, title: "Transport", id: 3 },
  { src: Dental, title: "Dental", id: 5 },
  { src: Games, title: "Games", id: 6 },
  { src: Photography, title: "Photography", id: 7 },
  { src: Fashion, title: "Fashion", id: 8 },
  { src: Technology, title: "Technology", id: 9 },
  { src: Plumbing, title: "Plumbing", id: 10 },
  { src: HAVC, title: "HAVC", id: 11 },
  { src: Construction, title: "Construction", id: 12 },
  { src: Realtor, title: "Realtor", id: 13 },
  { src: LawFirm, title: "Law Firm", id: 14 },
  { src: Community, title: "Community", id: 15 },
  { src: Jewellers, title: "Jewellers", id: 16 },
  { src: Education, title: "Education", id: 17 },
  { src: Event, title: "Event", id: 18 },
  { src: Landscaping, title: "Landscaping", id: 19 },
  { src: Animal, title: "Animal", id: 20 },
  { src: Travel, title: "Travel", id: 21 },
  { src: Salon, title: "Salon", id: 22 },
];

const index = () => {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const notify = () => toast("At-least one industry is required!");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIndustry === "") {
      notify();
    } else {
      const industryData = [];
      industry
        .filter(
          (item) => item.title.toUpperCase() === selectedIndustry.toUpperCase()
        )
        .map((item) => {
          industryData.push({ id: item.id, industry: item.title });
        });
      console.log(JSON.stringify(industryData));
      localStorage.setItem("industryData", JSON.stringify(industryData));
      router.push("/gen-font-style");
    }
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setSelectedIndustry(e.target.value);
    } else {
      setSelectedIndustry("");
    }
  };
  return (
    <>
      <Head>
        <title>Select Industry</title>
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
      <div id="wrapper" class="wrapper" style={{ position: "relative" }}>
        <div
          class="step-wrapper step-2"
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
          {/* <img
            src="https://www.logura.com/assets/img/steps/step-2/down.png"
            class="bottom-left-img"
          /> */}
          {/* <img
            src="https://www.logura.com/assets/img/steps/step-2/up.png"
            class="top-right-img"
          /> */}
          <img
            src="https://www.logura.com/assets/img/steps/step-1/4.png"
            class="bottom-right-img"
          />
          <div class="step-top-sec">
            <form onSubmit={(e) => e.preventDefault()}>
              <div class="center-container">
                <div class="container mb-5">
                  <div class="steps-heading">
                    <h1 class="heading heading-h3 text-white">
                      Pick Your Industry
                    </h1>
                  </div>
                  <div class="step-options step-options-mobile-view">
                    <div class="row">
                      {industry.map((industryItem) => {
                        return (
                          <div class="col-md-2 col-6">
                            <input
                              type="radio"
                              name="industry"
                              class="step-checkbox"
                              id={industryItem?.id}
                              onClick={handleCheck}
                              value={industryItem?.title}
                              checked={selectedIndustry === industryItem?.title}
                            />
                            <label
                              class="step-label"
                              htmlFor={industryItem?.id}
                            >
                              <div class="step-imgs">
                                <img
                                  src={industryItem?.src?.src}
                                  style={{ height: "50pt" }}
                                />
                              </div>
                              <h3 class="step-heading">
                                {industryItem?.title}
                              </h3>
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
                <button class="step-submit" onClick={handleSubmit}>
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
