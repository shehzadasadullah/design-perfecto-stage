import React, { useEffect } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Payment from "../../../components/Payment/Payment";
import { Helmet } from "react-helmet";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("success");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      console.log("SUCCESS OF PAYMENT", search);
      if (search === "true" || search === true) {
        const downloadLogo = localStorage.getItem("downloadLogo");
        if (downloadLogo && downloadLogo === "true") {
          Swal.fire(
            "Congrats!",
            "Payment Paid Successfully, Your Download has Started!",
            "success"
          );
          localStorage.removeItem("downloadLogo");

          // Retrieve the Base64 string from localStorage
          const base64String = localStorage.getItem("imageBlob");

          if (base64String) {
            // Convert Base64 string back to a Blob
            const byteCharacters = atob(base64String);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: "image/png" }); // Set the appropriate MIME type

            // Create a link element for downloading
            const a = document.createElement("a");
            const fileName = "logo.png"; // Set your desired file name
            a.href = URL.createObjectURL(blob);
            a.download = fileName; // Set the file name for download

            // Trigger a click event to initiate the download
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();

            // Clean up the temporary Blob URL
            URL.revokeObjectURL(a.href);
          }
          router.replace("/home");
        } else {
          localStorage.removeItem("amountLocal");
          Swal.fire(
            "Congrats!",
            "Your payment is successfully processed",
            "success"
          );
          router.replace("/home");
        }
      }
      if (search === "false" || search === false) {
        const downloadLogo = localStorage.getItem("downloadLogo");
        if (downloadLogo && downloadLogo === "true") {
          Swal.fire("Error!", "Payment Failed", "error");
          localStorage.removeItem("downloadLogo");
          router.replace("/logos");
        } else {
          localStorage.removeItem("amountLocal");
          Swal.fire("Error!", "Payment Failed", "error");
          router.replace("/home");
        }
      }
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>Payment</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <Payment />
      <Footer />
    </>
  );
};

export default index;
