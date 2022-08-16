import React from "react";
import "./Home.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

function InstaFeed({ prop, props }) {
  return (
    <div className="home">
      <div className="home-body">
        {/* <div className="user">
          <div className="users">
            <img className="photo" src={props.url} alt="" />
            <a>{props.username}</a>
          </div>
        </div> */}

        <div className="home-bottom">
          <div className="feed">
            <div className="feed-post">
              <div className="post">
                <div className="post-top">
                  <img src={prop.url1} alt="" />
                  <div className="info">
                    <p>{prop.name}</p>
                  </div>
                </div>
                <div className="post-mid">
                  <img src={prop.url2} alt="" />
                </div>
                <div className="post-bottom">
                  <div className="btns">
                    <div className="btn">
                      <FavoriteBorderOutlinedIcon />
                    </div>
                    <div className="btn">
                      <ChatOutlinedIcon />
                    </div>
                    <div className="btn">
                      <NearMeOutlinedIcon />
                    </div>
                  </div>
                  <div className="save">
                    <div className="saved">
                      <BookmarkBorderOutlinedIcon />
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="likes">{prop.like}</div>
                    <div className="caption">
                      {prop.name}
                      <p>{prop.usercaption}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstaFeed;
