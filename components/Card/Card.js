{
  /* <div class="p-4 text-gray-800 rounded-lg shadow-md">
<div class="mb-2">
  <p class="mb-2 text-center text-gray-600 text-white">
    " Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Similique sapiente iusto esse."
  </p>
  <div class="flex flex-row items-center justify-center">
    <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
      <img
        src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
        alt="img"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div
      style={{
        display: "flex",
        margin: 4,
        padding: 4,
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
          alt="img"
          width="15"
        />
        <img
          src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
          alt="img"
          width="15"
        />
        <img
          src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
          alt="img"
          width="15"
        />
        <img
          src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
          alt="img"
          width="15"
        />
        <img
          src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
          alt="img"
          width="15"
        />
      </div>

      <h5 style={{ color: "white" }}>John Doe</h5>
      <p class="text-sm text-white">CEO / Founder</p>
    </div>
  </div>
</div>
</div> */
}

// import * as React from "react";
// import { Card as MuiCard } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";

// export default function Card({ data }) {
//   console.log(data?.imgPath?.src);
//   return (
//     <MuiCard sx={{ maxWidth: 345 }}>
//       <CardActionArea disableRipple>
//         <CardMedia
//           component="img"
//           height="140"
//           image={data?.imgPath?.src}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography component="div" sx={{ fontSize: "18px" }}>
//             {data.heading}
//           </Typography>
//           <Typography component="div">{data.paragraph}</Typography>
//           <Typography color="text.secondary" sx={{ fontSize: "17px" }}>
//             {data.created}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </MuiCard>
//   );
// }

import React from "react";
import Redcar from "../../assets/img/redcar.jpg";
import Insta from "../../assets/img/insta-post.jpg";
import BrandImg from "../../assets/img/brand-img.jpg";
import VideoBlog from "../../assets/img/video-blog-post.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper";
const Card = () => {
  return (
    <div class="bk-blog-grid-area pb--60 rslide" id="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="brook-section-title mb--45 text-center">
              <h2 class="heading-title text-white">Reviews</h2>
              <h1 class="heading heading-h3 text-white">4.5</h1>
              <h6 class="heading heading-h6 text-white letter-spacing-1">
                Services Reviews
                <br />
              </h6>
            </div>
          </div>
        </div>

        <Swiper
          // install Swiper modules
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
          }}
          // modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="bg-color1">
            <div className="container-lg">
              <div className="row">
                <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
                  <h1 className="h1">I got my website and a logo for my…</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-2 h-2 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                    style={{ width: 20 }}
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="paragraph mb-2">
                    I got my website and a logo for my online store, and was
                    amazed with the end product. Fabulous working with such
                    great team, Thank you DesignPerfecto for providing an
                    excellent services.. 5 star :)
                  </p>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                    }}
                  >
                    <div style={{ borderRadius: "50%" }}>
                      <img
                        alt="Man"
                        src="https://avatars.githubusercontent.com/u/5442743?v=4"
                        width={70}
                        className="rounded mr-2 p-1"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div class="flex flex-col tracking-wider pl-4">
                      <label class="text-black font-bold text-base ml-2">
                        April C Campbell
                      </label>
                      <br />
                      <label class="text-black font-normal text-sm">
                      United States
                      </label>
                      <div
                        style={{
                          display: "flex",
                          margin: 4,
                          padding: 4,
                          flexDirection: "column",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-color1">
            <div className="container-lg">
              <div className="row">
                <div className="col-lg-8 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
                  <h1 className="h1">Working with Design Perfecto has been…</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-2 h-2 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                    style={{ width: 20 }}
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="paragraph mb-2 ">
                  Working with Design Perfecto has been seamless! My Project Manager Mark was attentive and informative about the process and the next steps. I signed up Tuesday evening, and by Wednesday morning, I had several designs to choose from. Upon making my choice, I was able to talk about potential edits and final touches with my PM. I enjoyed this process! It was affordable and stress-free. I will recommend other folks looking for logos and digital designs! I can't continue growing my online presence without the help of Design Perfecto. Thanks again!
                  </p>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                    }}
                  >
                    <div>
                      <img
                        alt="Man"
                        src="https://cdn-icons-png.flaticon.com/512/145/145845.png"
                        width={70}
                        className="rounded mr-2 p-1"
                      />
                    </div>
                    <div class="flex flex-col tracking-wider pl-4">
                      <label class="text-black font-bold text-base ml-2">
                        Darrel Kelly
                      </label>
                      <br />
                      <label class="text-black font-normal text-sm">
                        United States
                      </label>
                      <div
                        style={{
                          display: "flex",
                          margin: 4,
                          padding: 4,
                          flexDirection: "column",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-color1">
            <div className="container-lg">
              <div className="row">
                <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
                  <h1 className="h1">The experience with this company was…</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-2 h-2 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                    style={{ width: 20 }}
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="paragraph mb-2">
                    The experience with this company was great. The customer
                    service I received was phenomenal. They really helped bring
                    my ideas to the light with little details that I gave them.
                    I am very pleased with my new logo and a performing website.
                  </p>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                    }}
                  >
                    <div>
                      <img
                        alt="Man"
                        src="https://avatars.githubusercontent.com/u/5442743?v=4"
                        width={70}
                        className="rounded mr-2 p-1"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div class="flex flex-col tracking-wider pl-4">
                      <label class="text-black font-bold text-base ml-2">
                        Darren Moore
                      </label>
                      <br />
                      <label class="text-black font-normal text-sm">
                        United States
                      </label>
                      <div
                        style={{
                          display: "flex",
                          margin: 4,
                          padding: 4,
                          flexDirection: "column",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-color1">
            <div className="container-lg">
              <div className="row">
                <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
                  <h1 className="h1">It was amazing and easy this entire…</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-2 h-2 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                    style={{ width: 20 }}
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="paragraph mb-2">
                  It was amazing and easy this entire experience has been!! Each person you speak to or email, has very helpful insight as well as ideas. I am so amazed and happy to see the details of my ideas become reality.
                  </p>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                    }}
                  >
                    <div>
                      <img
                        alt="Man"
                        src="https://avatars.githubusercontent.com/u/5442743?v=4"
                        width={70}
                        className="rounded mr-2 p-1"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div class="flex flex-col tracking-wider pl-4">
                      <label class="text-black font-bold text-base ml-2">
                        Fly app
                      </label>
                      <br />
                      <label class="text-black font-normal text-sm">
                        United States
                      </label>
                      <div
                        style={{
                          display: "flex",
                          margin: 4,
                          padding: 4,
                          flexDirection: "column",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                          <img
                            src="https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png"
                            alt="img"
                            width="15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div class="row">
<div class="col-lg-3 col-sm-6 col-12 move-up wow mt--10">
<div class="blog-grid-minimal minimal-style-2 text-white">
<div class="post-content">
{" "}
<img src={Redcar.src} loading="lazy" />
<div class="post-content-inner">
<h4 class="heading heading-h4">
<a routerLink="">
  Best Use of Negative Spacing While Designing A Custom
  Business Logo
</a>
</h4>
<p>
{" "}
You often overhear the term ‘negative space’ and wondering
what does it exactly mean when&#8230;
</p>
<div class="post-meta">
<div class="post-date">Created By Shawn</div>
<div class="post-category">September 18, 2020</div>
<div class="post-category">
  <a routerLink="">General</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-sm-6 col-12 move-up wow mt--10">
<div class="blog-grid-minimal minimal-style-2 text-white">
<div class="post-content">
{" "}
<img src={Insta.src} loading="lazy" />
<div class="post-content-inner">
<h4 class="heading heading-h4">
<a routerLink="">
  Instagram Marketing Trends To Succeed Your Small Business
  in 2020
</a>
</h4>
<p>
{" "}
Instagram has become the preferred social media app for
young adults, as 85% of them&#8230;
</p>
<div class="post-meta">
<div class="post-date">Created By Shawn</div>
<div class="post-category">September 18, 2020</div>
<div class="post-category">
  <a routerLink="">General</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-sm-6 col-12 move-up wow mt--10">
<div class="blog-grid-minimal minimal-style-2 text-white">
<div class="post-content">
{" "}
<img src={BrandImg.src} loading="lazy" />
<div class="post-content-inner">
<h4 class="heading heading-h4">
<a routerLink="">
  Top 5 Reasons Why Creating Strong Brand Identity Is Vital
  for Small Business
</a>
</h4>
<p>
When you wish to establish a small business, you make every
possible effort for its&#8230;
</p>
<div class="post-meta">
<div class="post-date">Created By Shawn</div>
<div class="post-category">August 31, 2020</div>
<div class="post-category">
  <a routerLink="">General</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-3 col-sm-6 col-12 move-up wow mt--10">
<div class="blog-grid-minimal minimal-style-2 text-white">
<div class="post-content">
{" "}
<img src={VideoBlog.src} loading="lazy" />
<div class="post-content-inner">
<h4 class="heading heading-h4">
<a routerLink="">
  Why Video Animation Is Important For Branding Agencies
</a>
</h4>
<p>
Branding agencies have been striving to provide unique and
creative content to their clients regularly.&#8230;
</p>
<div class="post-meta">
<div class="post-date">Created By Shawn</div>
<div class="post-category">August 25, 2020</div>
<div class="post-category">
  <a routerLink="">General</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div> */}
      </div>
    </div>
  );
};

export default Card;
