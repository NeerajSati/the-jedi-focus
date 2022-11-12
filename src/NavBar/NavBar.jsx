import React from "react";
import "./navbar.css";
import { TbSearch } from "react-icons/tb";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell, BsYoutube } from "react-icons/bs";
import { MdMic } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
function NavBar() {
  return (
    <div className="df navbar">
      <div className="df navbarLeft">
        <div className="df navbarHam">
          <GiHamburgerMenu />
        </div>
        <div className="df navbarBanner">
          <div className="df navbarLogo">
            <BsYoutube />
          </div>
          <div className="df navbarLogoText">JediTube</div>
        </div>
      </div>
      <div className="df searchDiv">
        <input
          className="df searchBar"
          placeholder="Search"
          onChange={(e) => {
            if (e.nativeEvent.data !== null)
              e.target.value = "You think this will work?";
          }}
        ></input>
        <div className="df searchIconDiv">
          <TbSearch />
        </div>
        <div className="df navbarIcons searchMic">
          <MdMic />
        </div>
      </div>
      <div className="df navbarRight">
        <div className="df navbarIcons">
          <RiVideoAddLine />
        </div>
        <div className="df navbarIcons">
          <BsBell />
        </div>
        <div
          className="df navbarIcons"
          style={{ backgroundColor: "#3d0066", color: "white" }}
        >
          <GiPlagueDoctorProfile />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
