import React, { useState } from "react";
import "./Categories.css";
import KhelVideo from "../Video/KhelVideo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAPI } from "../Scripts/apiCalls";
const Categories = () => {
  const navigate = useNavigate();
  const [videosData, setVideosData] = useState([]);

  const profileUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80";

  useEffect(() => {
    poppulateVideo();
  }, []);

  const poppulateVideo = async () => {
    getAPI("content").then((res) => {
      if (res !== "Server error") {
        let newVideosData = res;
        newVideosData.map(async (video) => {
          await getAPI("creator/" + video.contentCreator).then((res) => {
            // console.log(res);
            if (res !== "Server error") {
              video.creatorName = res.name;
              video.creatorRating = res.rating;
              video.creatorImage = res.profilepic;
            }
          });

          await getAPI("player/" + video.player).then((res) => {
            // console.log(res);
            if (res !== "Server error") {
              video.playerName = res.name;
            }
          });
        });
        console.log(newVideosData);
        setVideosData(newVideosData);
      }
    });
  };
  return (
    <>
      <div className="explorepage">
        <button
          onClick={() => {
            console.log(videosData);
          }}
        >
          Videos Data
        </button>
        <div className="heading">
          <h2>
            Khelmanch enables people to identify and select the talents to next
            level of their career.
            <p>All you have to do is : View and Rate the Videos</p>
          </h2>
        </div>
        <div className="explorepagecontent">
          <div className="sidebar">
            <div className="categoryheading">
              <h2>Categories</h2>
            </div>
            <div className="category">
              <h3>Cricket</h3>
            </div>
            <div className="category">
              <h3>Volleyball</h3>
            </div>
            <div className="category">
              <h3>Badminton</h3>
            </div>
            <div className="category">
              <h3>Basketball</h3>
            </div>
            <div className="category">
              <h3>Hockey</h3>
            </div>
            <div className="category">
              <h3>Athletics</h3>
            </div>
            <div className="category">
              <h3>E-Sports</h3>
            </div>
          </div>

          <div className="videocontainer">
            {videosData.map((video) => {
              return (
                <div key={video.name}>
                  <div className="videopostercontainer">
                    <div className="contentcreatorcontainer">
                      <img
                        src={video.creatorImage}
                        alt={video.creatorName}
                        onClick={() => {
                          navigate("/profile");
                        }}
                      />
                      <h3>{video.creatorName}</h3>
                    </div>
                    <h5>{video.creatorRating}/5</h5>
                  </div>
                  <KhelVideo
                    src={video.file}
                    title={video.name}
                    player={video.playerName}
                    sport={video.sport}
                    rating={video.rating}
                    views={video.view_count}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
