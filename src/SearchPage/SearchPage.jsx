import React from "react";
import "./searchpage.css";
import { BsYoutube } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const navigate = useNavigate();
  const submitHandle = (e) => {
    e.preventDefault();
    let url = e.target[0].value;
    let videoId = url.split("/watch?v=")[1];
    if (videoId) {
      console.log("fiouabw");
      navigate(`/video/${videoId}`);
    } else {
      toast.error("Invalid URL!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="df fdc searchpage">
        <div className="df searchBanner">
          <div className="df searchLogo">
            <BsYoutube />
          </div>
          <div className="df searchLogoText">JediTube</div>
        </div>
        <div className="searchInstruction">Paste youtube video link here!</div>
        <form className="df fdc" onSubmit={submitHandle}>
          <input className="mainSearchBar" placeholder="https://" />
          <button className="mainSearchBtn" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchPage;
