import React from "react";
import "./Navbar.css";
// import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import TelegramIcon from "@mui/icons-material/Telegram";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExploreIcon from "@mui/icons-material/Explore";

function Navbar() {
  return (
    <div className="navbar">
      <div className="image">
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeZlY853PI90CQCMxyHlgu6ji-nbOTZoXXeCWKBo8eYMHuQqUtzj07DCc0FBBnWTv2g8&usqp=CAU"
          alt=""
        />
      </div>
      <div className="box">
        <i class="fa fa-search icon"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="tabs">
        <div className="tab">
          <a href="/">
            <HomeIcon />
          </a>
        </div>
        <div className="tab">
          <a href="/">
            <TelegramIcon />
          </a>
        </div>
        <div className="tab">
          <a href="/">
            <ExploreIcon />
          </a>
        </div>
        <div className="tab">
          <a href="/">
            <AddBoxOutlinedIcon />
          </a>
        </div>

        <div className="tab">
          <a href="/">
            <FavoriteBorderOutlinedIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
