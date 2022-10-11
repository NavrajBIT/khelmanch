import React from 'react';
import { useState } from 'react';
import {Box, Typography, Button,TextField} from "@mui/material"

export const Footer = () => {

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
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#3b3737",
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
                style={{ background: "white" }}
                name="name"
                onChange={handleChange}
                value={inputs.name}
                type="text"
                placeholder="Name"
                margin="normal"
              />
              <TextField
                style={{ background: "white" }}
                name="email"
                onChange={handleChange}
                value={inputs.email}
                type="email"
                placeholder="Email"
                margin="normal"
              />
              <TextField
                style={{ background: "white" }}
                name="message"
                onChange={handleChange}
                value={inputs.message}
                type="text"
                placeholder="Type Your message"
                margin="normal"
              />
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
        <Box
          sx={{
            width: "100%",
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
            fontFamily={"ui-monospace"}
            variant="h5"
            padding={3}
            textAlign={"center"}
          >
            Contact Details
          </Typography>
          <Typography
            fontFamily={"ui-monospace"}
            variant="h6"
            padding={3}
            textAlign={"center"}
          >
            Phone: +91 1234567890
          </Typography>
          <Typography
            fontFamily={"ui-monospace"}
            variant="h6"
            padding={3}
            textAlign={"center"}
          >
            Email:khelmanch@gmail.com
          </Typography>
          <Typography
            fontFamily={"ui-monospace"}
            variant="h6"
            padding={3}
            textAlign={"center"}
          >
            Website: www.khelmanch.com
          </Typography>
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

      {/* Copyright */}

      <Box
        sx={{
          width: "100%",
          height: "80px",
          background: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          © 2022 Beyond Imagination Technologies Pvt.Ltd. All right reserved{" "}
        </Typography>
      </Box>
    </div>
  );
}
    

