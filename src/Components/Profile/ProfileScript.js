import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import { getAPI, putAPI, postAPI, filterAPI } from "../Scripts/apiCalls";

const ProfileScript = () => {
  const [status, setStatus] = useState("");
  const [profileData, setProfileData] = useState({});
  const [playerData, setPlayerData] = useState([]);
  const [videoData, setVideoData] = useState([]);

  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isConnected) {
      navigate("/");
    } else {
      poppulateData();
      poppulatePlayers();
      poppulateVideo();
    }
  }, []);

  const poppulateData = () => {
    getAPI("creator/" + user.userAccount).then((res) => {
      console.log(res);
      if (res !== "Server error") {
        if (res.detail === "Not found.") {
          let formData = new FormData();
          formData.append("name", "Unnamed");
          formData.append("description", "No description provided.");
          formData.append("rating", 0);
          formData.append("address", user.userAccount);
          postAPI("creator", formData).then((res) => {
            console.log(res);
            if (res !== "Server error") {
              poppulateData();
            }
          });
        } else {
          setProfileData(res);
        }
      }
    });
  };

  const poppulatePlayers = () => {
    filterAPI("playerfilter", "profileCreator", user.userAccount).then(
      (res) => {
        console.log(res);
        if (res !== "Server error") {
          setPlayerData(res);
        }
      }
    );
  };

  const poppulateVideo = () => {
    filterAPI("contentfilter", "contentCreator", user.userAccount).then(
      (res) => {
        console.log(res);
        if (res !== "Server error") {
          setVideoData(res);
        }
      }
    );
  };

  const saveProfile = (name, description, profilepic) => {
    setStatus("Saving profile...");
    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("profilepic", profilepic);
    formData.append("rating", profileData.rating);
    formData.append("address", user.userAccount);
    const endpoint = "creator/" + user.userAccount;
    putAPI(endpoint, formData).then((res) => {
      console.log(res);
      if (res !== "Server error") {
        setStatus("Done.");
        poppulateData();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    });
  };

  const saveVideo = (formData) => {
    formData.append("contentCreator", user.userAccount);
    postAPI("content", formData).then((res) => {
      console.log(res);
      poppulateVideo();
    });
  };

  return {
    status,
    setStatus,
    profileData,
    saveProfile,
    user,
    playerData,
    saveVideo,
    videoData,
  };
};

export default ProfileScript;
