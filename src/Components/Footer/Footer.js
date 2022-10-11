import React from 'react'
import {Box, Typography, Button,TextField} from "@mui/material";
import { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
// import "./Login.css"



const Footer = () => {

  const [inputs, setinput] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setinput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#262626",
          color: "#fff",
          marginTop: "100px",
          flexDirection: "row",
        }}
      >
        {/* Box -1 Contact Us */}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "50px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent={"center"}
              padding={3}
              margin="auto"
              marginTop={5}
              borderRadius={5}
            >
              <Typography
                fontFamily={"ui-monospace"}
                variant="h5"
                padding={3}
                textAlign={"center"}
              >
                Contact Us
              </Typography>

              <TextField
                style={{ background: "white", width: "350px" }}
                name="name"
                onChange={handleChange}
                value={inputs.name}
                type="text"
                placeholder="Name"
                margin="normal"
              />
              <TextField
                style={{ background: "white", width: "350px" }}
                name="email"
                onChange={handleChange}
                value={inputs.email}
                type="email"
                placeholder="Email"
                margin="normal"
              />
              <textarea
                style={{ height: "187px", width: "350px" }}
                name="message"
                onChange={handleChange}
                value={inputs.message}
                type="text"
                placeholder="Write a Message"
                margin="normal"
              ></textarea>
              <Button
                type="submit"
                variant="contained"
                sx={{ borderRadius: 3, marginTop: 3 }}
                color="warning"
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Box>

        {/* Box -2 */}

        <Box>
          <Typography
            fontFamily={"ui-monospace"}
            variant="h5"
            padding={3}
            textAlign={"center"}
          >
            Contact Details
          </Typography>

          <Box
            sx={{
              width: "480px",
              height: "360px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "50px",
              border: "1px solid #fff",
              borderRadius: "5px",
            }}
          >
            <Typography
              style={{
                marginRight: "55px",
                fontSize: "21px",
                fontWeight: "500",
              }}
              fontFamily={"Inter"}
              fontStyle={"normal"}
              padding={3}
              textAlign={"center"}
            >
              <LocalPhoneIcon style={{ marginRight: "5px" }} /> +91 1234567890
              <br></br>
            </Typography>
            <Typography
              style={{
                marginRight: "55px",
                fontSize: "21px",
                fontWeight: "500",
              }}
              fontFamily={"Inter"}
              fontStyle={"normal"}
              padding={3}
              textAlign={"center"}
            >
              <LocalPhoneIcon style={{ marginRight: "5px" }} /> +91 1234567890
            </Typography>
            <Typography
              style={{ fontSize: "21px", fontWeight: "500" }}
              fontFamily={"Inter"}
              fontStyle={"normal"}
              padding={3}
              textAlign={"center"}
            >
              <EmailIcon style={{ marginRight: "5px" }} /> khelmanch@gmail.com
            </Typography>
            <Typography
              style={{ fontSize: "21px", fontWeight: "500" }}
              fontFamily={"Inter"}
              fontStyle={"normal"}
              padding={3}
              textAlign={"center"}
            >
              <EmailIcon style={{ marginRight: "5px" }} /> khelmanch@gmail.com
            </Typography>
          </Box>
        </Box>

        {/* Box -3 */}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "50px",
          }}
        >
          <Typography
            fontFamily={"ui-monospace"}
            variant="h5"
            padding={3}
            textAlign={"center"}
          >
            Made By{" "}
            <img
              src="https://beimagine.tech/wp-content/uploads/2022/04/BITlogo.png"
              alt="BIT"
              width="350px"
              height="350px"
            />
          </Typography>
        </Box>
      </Box>

      <div
        className="footer_bg"
        style={{
          background: "black",
          color: "white",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="copyright" style={{}}>
          Copyright © 2022 Beyond Imagination Technologies Pvt. Ltd. All right
          reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer