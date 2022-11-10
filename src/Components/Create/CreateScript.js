import { postAPI } from "../Scripts/apiCalls";
import UserContext from "../../Context/UserContext";
import { useState, useContext } from "react";

const CreateScript = () => {
  const user = useContext(UserContext);
  const [status, setStatus] = useState("");

  const savePlayer = (
    name,
    description,
    age,
    gender,
    location,
    sport,
    profilepic
  ) => {
    setStatus("saving Player...");
    let formData = new FormData();
    formData.append("profileCreator", user.userAccount);
    formData.append("playerid", user.userAccount + name);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("location", location);
    formData.append("sport", sport);
    formData.append("profilepic", profilepic);
    postAPI("player", formData).then((res) => {
      console.log(res);
      if (res !== "Server error") {
        setStatus("Done.");
      }
    });
  };

  return { status, savePlayer };
};

export default CreateScript;
