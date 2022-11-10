import React, { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import KhelVideo from "../Video/KhelVideo";
import ratingStar from "../../Images/ratingwhite.svg";
import ProfileScript from "./ProfileScript";
import { postAPI } from "../Scripts/apiCalls";
import userEvent from "@testing-library/user-event";

const Profile = () => {
  const [isEditting, setIsEditting] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [uploadededImage, setUploadedImage] = useState("");
  const [uploadededVideo, setUploadedVideo] = useState("");
  const navigate = useNavigate();
  const {
    status,
    setStatus,
    profileData,
    saveProfile,
    user,
    playerData,
    saveVideo,
    videoData,
  } = ProfileScript();

  const EditProfile = () => {
    return (
      <div className="editprofile">
        <div className="editprofileSection">
          <button onClick={() => setIsEditting(false)}>
            <h2>X</h2>
          </button>
          <div className="status">{status}</div>
          <div className="editform">
            <label htmlFor="profilepic">Profilepic:</label>
            <input
              type="file"
              id="profilepic"
              onChange={(e) => setUploadedImage(e.target.files[0])}
            />
          </div>
          <div className="editform">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter name" />
          </div>
          <div className="editform">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            onClick={() => {
              // setIsEditting(false);
              let name = document.getElementById("name").value;
              let description = document.getElementById("description").value;
              let profilepic = uploadededImage;
              saveProfile(name, description, profilepic);
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  };
  const AddVideo = () => {
    return (
      <div className="editprofile">
        <div className="editprofileSection">
          <button onClick={() => setIsAdding(false)}>
            <h2>X</h2>
          </button>
          <div className="editform">
            <label htmlFor="profilepic">Upload Video:</label>
            <input
              type="file"
              id="video"
              onChange={(e) => {
                setUploadedVideo(e.target.files[0]);
              }}
            />
          </div>
          <div className="editform">
            <label htmlFor="name">Title:</label>
            <input type="text" id="name" placeholder="Enter video title" />
          </div>
          <div className="editform">
            <label htmlFor="description">Sport:</label>
            <select name="" id="sport">
              <option value="1">Cricket</option>
              <option value="2">Volleyball</option>
              <option value="3">Badminton</option>
              <option value="4">Basketball</option>
              <option value="5">Hockey</option>
              <option value="6">Athletics</option>
              <option value="7">E-Sports</option>
            </select>
          </div>
          <div className="editform">
            Select player:
            <select name="" id="playerid">
              {playerData.map((player) => {
                return (
                  <option
                    value={player.playerid}
                    key={player.name + player.sport}
                  >
                    {player.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            onClick={() => {
              let formData = new FormData();
              formData.append(
                "player",
                document.getElementById("playerid").value
              );
              formData.append("name", document.getElementById("name").value);
              formData.append("file", uploadededVideo);
              formData.append("sport", document.getElementById("sport").value);
              saveVideo(formData);
            }}
          >
            Upload
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="profilepage">
        <div className="profileSection">
          <div className="imageSection">
            <img src={profileData.profilepic} alt={profileData.name} />
          </div>
          <div className="dataSection">
            <h1>{profileData.name}</h1>
            <h3>{profileData.description}</h3>

            {user.userAccount === profileData.address && (
              <button
                onClick={() => {
                  setIsEditting(true);
                }}
              >
                <h2>Edit Profile</h2>
              </button>
            )}

            <div className="profileratinginfo">
              <div className="profileratingstars">
                <img src={ratingStar} alt="rate" />
                <img src={ratingStar} alt="rate" />
                <img src={ratingStar} alt="rate" />
                <img src={ratingStar} alt="rate" />
                <img src={ratingStar} alt="rate" />
              </div>
              {profileData.rating}/5
            </div>
          </div>
        </div>
        {isEditting && <EditProfile />}
        {isAdding && <AddVideo />}
        <div className="profilefunctionality">
          <button
            onClick={() => {
              navigate("/createtalent");
            }}
          >
            <h1>Add Player</h1>
          </button>
          <button
            onClick={() => {
              setIsAdding(true);
            }}
          >
            <h1>Add Videos</h1>
          </button>
        </div>
        <div className="profilesectionheading">
          <h2>Players added by you</h2>
        </div>
        <div className="talentSection">
          {playerData.map((player) => {
            return (
              <div className="talent" key={player.name}>
                <div
                  className="talentimage"
                  onClick={() => {
                    navigate("/talent/" + player.playerid);
                  }}
                >
                  <img src={player.profilepic} alt={player.name} />
                </div>
                <h3>{player.name}</h3>
                <h4>{player.sport}</h4>
              </div>
            );
          })}
        </div>
        <div className="profilesectionheading">
          <h2>Videos added by you</h2>
        </div>
        <div className="videoSection">
          {videoData.length > 0 &&
            videoData.map((video) => {
              return (
                <div className="videocontainer" key={video.title}>
                  <KhelVideo
                    src={video.file}
                    title={video.title}
                    player={video.name}
                    sport={video.sport}
                    rating={video.rating}
                    views={video.views}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Profile;
