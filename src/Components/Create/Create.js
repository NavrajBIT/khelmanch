import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./Create.css";
import CreateScript from "./CreateScript";

const Create = () => {
  const data = useContext(UserContext);
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(
    "data:image/jpeg;base64,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"
  );

  const { status, savePlayer } = CreateScript();

  return (
    <>
      <div className="createpage">
        <h2>Add Player Data</h2>
        <div className="playerdataformcontainer">
          <div
            className="profilepiccontainer"
            onClick={() => {
              document.getElementById("playerpicselector").click();
            }}
          >
            <img src={selectedFile} alt="" />
          </div>
          <div className="profilepictext">Upload profile pic</div>

          <div className="playerdataform">
            <input
              type="file"
              style={{ display: "none" }}
              id="playerpicselector"
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
              }}
            />
            <input type="text" placeholder="Player Name" id="playername" />
            <input
              type="number"
              placeholder="Player Age in years"
              id="playerage"
            />
            Select gender
            <select name="genderfield" id="playergender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Location" id="playerlocation" />
            <input type="text" placeholder="Address" id="playeraddress" />
            Select Sport
            <select name="" id="playersport">
              <option value="1">Cricket</option>
              <option value="2">Volleyball</option>
              <option value="3">Badminton</option>
              <option value="4">Basketball</option>
              <option value="5">Hockey</option>
              <option value="6">Athletics</option>
              <option value="7">E-Sports</option>
            </select>
            Describe player's journey
            <textarea
              name=""
              id="playerdescription"
              cols="30"
              rows="10"
            ></textarea>
            <div className="status">{status}</div>
            <button
              onClick={() => {
                let name = document.getElementById("playername").value;
                let description =
                  document.getElementById("playerdescription").value;
                let age = document.getElementById("playerage").value;
                let gender = document.getElementById("playergender").value;
                let location = document.getElementById("playerlocation").value;
                let sport = document.getElementById("playersport").value;
                savePlayer(
                  name,
                  description,
                  age,
                  gender,
                  location,
                  sport,
                  selectedFile
                );
              }}
            >
              <h3>Add Player</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Create;
