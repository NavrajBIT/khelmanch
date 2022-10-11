import React from 'react';
import { Card,Avatar,CardHeader,CardContent ,CardMedia,Typography, Box ,Button,AppBar,Toolbar,
Tab,Tabs,IconButton

} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import image1 from "../../Images/image350.png";
import image2 from "../../Images/image351.png";
import image3 from "../../Images/image1.png";
import imaggeArrow from "../../Images/arrow.png";
import imageSearch from "../../Images/Vector.png";
import imageReward from "../../Images/Vector2.png";
import imagevideo from "../../Images/Rectangle92.png";
import image4 from "../../Images/Rectangle789.png";
import imagepolygon from "../../Images/Polygon4.png";
import imageunsplash from "../../Images/unsplash1.png";
import KhelVideo from "../Video/KhelVideo";
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import { Link } from 'react-router-dom';


export const HomePage = () => {


  const navigate = useNavigate();

    const videoData= [    {
      name: "Dharamender Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh1J0Eqg9LnHiLd2x5DlLqQGkFLfqGgvYIQ&usqp=CAU",
      sport: "Cricket",
      src: "https://www.youtube.com/embed/-YMo78jTbJw",
      title: "Dharamender playing Cricket",
    },
    {
      name: "Harmender Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFAN7UKvo70IZwE_E99S4EiidVvU9BufSbQ&usqp=CAU",
      sport: "Hockey",
      src: "https://www.youtube.com/embed/Zp_MHWTPC6I",
      title: "Harmender playing Hockey",
    },
  
  ]
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        border="ActiveBorder"
      >
        <Card
          sx={{
            width: "1646px",
            height: "1164px",
            margin: "auto",
            mt: 0,
            background: "#ED842E",
          }}
        >
          <CardMedia
            style={{ marginTop: "0p" }}
            component="img"
            height="723px"
            image={image1}
            alt="Paella dish"
          />

          <Box>
            <CardContent>
              <Typography
                color={"white"}
                sx={{
                  fontWeight: "bold",
                  marginLeft: "229px",
                  marginTop: "50px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                }}
                variant="h4"
                component="div"
                size={50}
              >
                Explore the Top Talent in Sports
              </Typography>
            </CardContent>
          </Box>

          <Box
            style={{ zIndex: 2, marginTop: "10px", marginLeft: "250px" }}
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            border="ActiveBorder"
          >
            <Card
              sx={{
                width: "400px",
                height: "435px",
                margin: "auto",
                padding: "20px",
                mt: 5,
                boxShadow: "5px 5px 10px #ccc",
                ":hover:": { boxShadow: "20px 20px 40px #ccc" },
                background: "white",
              }}
            >
              <Box>
                <CardContent>
                  <Typography
                    color={"#ED842E"}
                    sx={{ fontWeight: "bold" }}
                    variant="h4"
                    component="div"
                  >
                    KHEL<span style={{ color: "black" }}>MANCH</span>
                  </Typography>
                </CardContent>

                <CardContent>
                  <Typography
                    size={24}
                    fontWeight={400}
                    fontFamily="Product Sans"
                    fontStyle="normal"
                    color={"#000000B2"}
                    variant="h6"
                  >
                    Decentralized Talent Scouting Platform to Identify, Rate,
                    Select and Sponsor the Talent across the Country with the
                    help of Content Creators and the People.
                  </Typography>
                  <Typography mt={5}>Based on Polygon Network</Typography>
                </CardContent>
                <Button
                  variant="contained"
                  sx={{
                    background: "#ED842E",
                    color: "white",
                    fontStyle: "normal",
                    marginLeft: "15px",
                    latterSpacing: "0.5rem",
                  }}
                >
                  Know more
                </Button>
              </Box>
            </Card>

            {/* <Card sx={{
            margin:'auto', 
            mt:0,
            marginLeft:'50px',
        }}>
      

      <CardMedia
        component="img"
        height="435px"
        image={image2}
        alt="Image"
        />
      </Card> */}
            <div style={{ marginLeft: "50px" }}>
              <img className="kheLlogo" alt="KhelManch" src={image2} />
            </div>
          </Box>
        </Card>

        <AppBar
          position="static"
          sx={{
            margin: "auto",
            marginTop: 40,
            marginBottom: 8,
            height: "88px",
            width: "991px",
            borderRadius: 8,
            padding: 2,
            background: " #ED842E",
          }}
        >
          <Toolbar>
            <Typography
              fontFamily={"Product Sans"}
              fontWeight={700}
              fontSize={50}
              fontStyle={"normal"}
              style={{
                lineHeight: "61px",
                color: "white",
                letterSpacing: "-0.02em",
              }}
              margin="auto"
            >
              Become a Content - Creator
            </Typography>
          </Toolbar>
        </AppBar>

        <Typography
          style={{
            color: "#000000",
            fontFamily: "Times New Roman",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "51.1px",
            lineHeight: "59px",
          }}
          variant="h4"
          margin="auto"
        >
          Help the Budding Talent of India
        </Typography>

        <AppBar
          position="static"
          sx={{
            margin: "auto",
            marginTop: 10,
            marginBottom: 8,
            height: "250px",
            width: "1645px",
            borderRadius: 8,
            border: "1px solid #ED842E",
            background: " transparent",
          }}
          alignItems="center"
        >
          <Toolbar>
            <Box
              marginLeft={35}
              display={"flex"}
              flexDirection="row"
              ustifyContent="space-between"
              alignItems={"center"}
            >
              <Box>
                <Typography
                  fontFamily={"Inter"}
                  fontWeight={600}
                  fontSize={46}
                  fontStyle={"normal"}
                  style={{
                    lineHeight: "56px",
                    color: "#ED842E",
                    letterSpacing: "-0.02em",
                  }}
                  margin="auto"
                >
                  Identify<br></br>{" "}
                  <span style={{ color: "black" }}>Talent</span>
                </Typography>
                <img
                  alt="KhelManch"
                  src={imageSearch}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
              </Box>

              <Box>
                <img
                  alt="KhelManch"
                  src={imaggeArrow}
                  style={{
                    width: "70px",
                    height: "70px",
                    marginLeft: "60px",
                    marginTop: "5px",
                  }}
                />
              </Box>

              <Box marginLeft={20}>
                <Typography
                  fontFamily={"Inter"}
                  fontWeight={600}
                  fontSize={46}
                  fontStyle={"normal"}
                  style={{
                    lineHeight: "56px",
                    color: "#ED842E",
                    letterSpacing: "-0.02em",
                  }}
                  margin="auto"
                >
                  Create<br></br>{" "}
                  <span style={{ color: "black" }}>Content</span>
                </Typography>
                <img
                  alt="KhelManch"
                  src={imagevideo}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
              </Box>

              <Box>
                <img
                  alt="KhelManch"
                  src={imaggeArrow}
                  style={{
                    width: "70px",
                    height: "70px",
                    marginLeft: "60px",
                    marginTop: "5px",
                  }}
                />
              </Box>

              <Box marginLeft={20}>
                <Typography
                  fontFamily={"Inter"}
                  fontWeight={600}
                  fontSize={46}
                  fontStyle={"normal"}
                  style={{
                    lineHeight: "56px",
                    color: "#ED842E",
                    letterSpacing: "-0.02em",
                  }}
                  margin="auto"
                >
                  Recieve<br></br>{" "}
                  <span style={{ color: "black" }}>Rewards</span>
                </Typography>
                <img
                  alt="KhelManch"
                  src={imageReward}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <Card
          sx={{
            width: "1646px",
            height: "670px",
            margin: "auto",
            positions: "absolute",
            mt: 0,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": { boxShadow: "20px 20px 40px #ccc" },
            backgroundImage: `url(${image4})`,
          }}
        >
          <CardContent
            sx={{
              background: "rgba(0,0,0,0.5)",
              color: "white",
              height: "100%",
              width: "100%",
              padding: "20px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box position={"absolute"} zIndex={1}>
              <img
                alt="KhelManch"
                src={imagepolygon}
                style={{
                  width: "350px",
                  height: "350px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              />
            </Box>

            <Box position={"absolute"} zIndex={2}>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "Product Sans",
                  fontSize: "normal",
                  fontSize: "45px",
                  fontWeight: "400",
                }}
                margin="auto"
              >
                Khelmanch enables people to<br></br>
                identify and select the talents<br></br>
                to next level of their career.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Typography
          style={{
            color: "black",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontSize: "64px",
          }}
          margin="auto"
          marginTop={5}
        >
          Follow the steps to join us
        </Typography>

        <Box
          sx={{
            width: "1028.92px",
            height: "647.79px",
            margin: "auto",
            marginTop: 10,
            positions: "absolute",
            mt: 10,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": { boxShadow: "20px 20px 40px #ccc" },
            padding: "20px",
            background: "#ED842E",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Typography
            style={{
              color: "white",
              fontFamily: "Inter",
              fontSize: "42.34px",
              fontWeight: "600",
              fontStyle: "normal",
            }}
            margin="auto"
          >
            <span style={{ margin: "15px" }}>Step 1. Content your wallet</span>
            <br></br>
            <span style={{ margin: "15px" }}>Step 2. Create your profile</span>
            <br></br>
            <span style={{ margin: "15px" }}>
              Step 3. Create talent's profile
            </span>
            <br></br>
            <span style={{ margin: "15px" }}>
              Step 4. Uplade talent's videos
            </span>
          </Typography>

          <Button
            variant="contained"
            sx={{
              background: "white",
              color: "black",
              marginLeft: "15px",
              fontFamily: "Product Sans",
              fontWeight: "700",
              fontStyle: "normal",
              fontSize: "28.127px",
            }}
          >
            Connect your wallet
          </Button>
          <Tabs>
            <Tab
              style={{
                color: "white",
                fontFamily: "Product Sans",
                fontStyle: "normal",
              }}
              label="Learn more about Blockchain Wallet"
            />
          </Tabs>
        </Box>

        <Box
          sx={{
            width: "1646px",
            height: "544px",
            margin: "auto",
            marginTop: 10,
            positions: "static",
            mt: 10,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": { boxShadow: "20px 20px 40px #ccc" },
            padding: "20px",
            backgroundImage: `url(${imageunsplash})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 0,
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={35}
          >
            <Box
              sx={{
                width: "500px",
                height: "450px",
                margin: "auto",
                mt: 2,
                padding: 0,
                marginLeft: 10,
                background: "#ED842E",
                boxShadow: "5px 5px 10px #ccc",
                ":hover:": { boxShadow: "20px 20px 40px #ccc" },
                borderRadius: 8,
              }}
            >
              <div className="videocontainer">
                <div key={"Dharamender playing Cricket"}>
                  <div className="videopostercontainer">
                    <img
                      className="profileimage"
                      src={
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                      }
                      alt=""
                      onClick={() => {
                        navigate("/profile");
                      }}
                    />
                    <h3>Coach Priti Kaur</h3>
                  </div>
                  <KhelVideo
                    src={"https://www.youtube.com/embed/Ctt-tZ_9KpY"}
                    title={"Dharamender playing Cricket"}
                    player={"Dharamender Singh"}
                    sport={"Cricket"}
                    rating="3.5"
                  />
                </div>
              </div>
            </Box>

            <Box
              sx={{
                width: "500px",
                height: "450px",
                margin: "auto",
                mt: 2,
                padding: 0,
                marginLeft: 10,
                background: "#ED842E",
                boxShadow: "5px 5px 10px #ccc",
                ":hover:": { boxShadow: "20px 20px 40px #ccc" },
                borderRadius: 8,
              }}
            >
              <div className="videocontainer">
                <div key={"Dharamender playing Cricket"}>
                  <div className="videopostercontainer">
                    <img
                      className="profileimage"
                      src={
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                      }
                      alt=""
                      onClick={() => {
                        navigate("/profile");
                      }}
                    />
                    <h3>Coach Priti Kaur</h3>
                  </div>
                  <KhelVideo
                    src={"https://www.youtube.com/embed/Ctt-tZ_9KpY"}
                    title={"Dharamender playing Cricket"}
                    player={"Dharamender Singh"}
                    sport={"Cricket"}
                    rating="3.5"
                  />
                </div>
              </div>
            </Box>
          </Box>
        </Box>

        <Typography
          style={{
            color: "#FE8D32",
            fontFamily: "Times New Romen",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "90px",
          }}
          margin="auto"
          mt={30}
        >
          View and Rate <br></br>
          <span style={{ color: "black", marginLeft: "100px" }}>
            the videos
          </span>
        </Typography>
        <Button
          LinkComponent={Link}
          to="/explore"
          variant="contained"
          sx={{
            marginTop: "20px",
            background: "white",
            color: "black",
            fontWeight: "bold",
            fontFamily: "Product Sans",
            fontStyle: "normal",
            marginLeft: "15px",
            height: "50px",
            width: "250px",
            borderRadius: "10px",
            border: "2px solid black",
            marginTop: "55px",
          }}
        >
          Explore More
        </Button>
      </Box>
    </div>
  );
}
