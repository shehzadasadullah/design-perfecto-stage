import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Head from "next/head";
import {
  setBusinessName,
  setSloganHere,
} from "../../redux/slogan/slogan.slice";
import { useDispatch } from "react-redux";

const index = () => {
  const router = useRouter();
  const { businessName: businessNameValue } = router?.query;
  console.log(businessNameValue);
  const [name, setName] = useState(businessNameValue);
  const [slogan, setSlogan] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setName(businessNameValue);
  }, [router?.query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBusinessName(name));
    dispatch(setSloganHere(slogan));
    localStorage.setItem("companyName", name);
    localStorage.setItem("companySlogan", slogan);
    router.push("/gen-industry");
  };
  return (
    <>
      <Head>
        <title>Generate Logo</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <div id="wrapper" class="wrapper" style={{ position: "relative" }}>
        <div
          class="step-wrapper step-1"
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
            src="https://www.logura.com/assets/img/steps/step-1/2.png"
            class="bottom-left-img"
          />
          <img
            src="https://www.logura.com/assets/img/steps/step-1/3.png"
            class="top-right-img"
          />
          <img
            src="https://www.logura.com/assets/img/steps/step-1/4.png"
            class="bottom-right-img"
          />
          <div class="step-top-sec">
            <form style={{ margin: "0" }} onSubmit={handleSubmit}>
              <div class="center-container">
                <div class="container">
                  <div class="steps-heading">
                    <h1 class="heading heading-h3 text-white">
                      Please Add A Catchy Business <br />
                      Name With Your Logo Design
                    </h1>
                  </div>
                  <div class="step-options">
                    <div class="row">
                      <div class="col-12">
                        <input
                          type="text"
                          class="step-input cnam e"
                          placeholder="Write Your Company Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div class="col-12">
                        <input
                          type="text"
                          class="step-input"
                          placeholder="Slogan Here (Optional)"
                          value={slogan}
                          onChange={(e) => setSlogan(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="step-footer"
                style={{ position: "absolute", bottom: "70px" }}
              >
                <button disabled={name === ""} class="step-submit">
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
