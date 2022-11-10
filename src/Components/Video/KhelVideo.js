import React from "react";
import "./KhelVideo.css";
import ratingStar from "../../Images/rating.svg";
import viewIcon from "../../Images/view.svg";
import { useNavigate } from "react-router-dom";

const KhelVideo = (props) => {
  const navigate = useNavigate();
  return (
    <div className="khelvideocontainer">
      <div>
        <video width="420" height="236" controls>
          <source src={props.src} type="video/mp4" />
        </video>
      </div>
      <div className="videotitlecontainer">
        <h3>{props.title}</h3>
        <div className="viewscontainer">
          {props.views}
          <img src={viewIcon} alt="" />
        </div>
      </div>
      <div className="khelvideoinfo">
        <div className="playerinfo">
          <div className="playername">
            <a
              onClick={() => {
                navigate("/talent");
              }}
            >
              {props.player}
            </a>
          </div>
          <div>{props.sport}</div>
        </div>

        <div className="ratinginfo">
          <div className="ratingstars">
            <img src={ratingStar} alt="rate" />
            <img src={ratingStar} alt="rate" />
            <img src={ratingStar} alt="rate" />
            <img src={ratingStar} alt="rate" />
            <img src={ratingStar} alt="rate" />
          </div>
          {props.rating}/5
        </div>
      </div>
    </div>
  );
};

export default KhelVideo;
