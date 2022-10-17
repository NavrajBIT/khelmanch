import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export const AddVideo = () => {
    const [isEditting, setIsEditting] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const navigate = useNavigate();

  return (
    <div>
        <Box
        width={1700}
        marginLeft={13}
        marginTop={10}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        borderBottom={"3px solid #FE8D32"}
        paddingBottom={2}
        >
        <Typography
          marginLeft={95}
          variant="h4"
          fontFamily={"inherit"}
          fontStyle="normal"
          fontWeight="700"
          fontSize="35px"
          lineHeight={"42px"}
          color={"#FE8D32"}
        >
        Add Video</Typography>
        </Box>

        <Box>
            <Box
            width={1127}
            height={556}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{borderRadius: "10px", border: "1px solid black", marginTop: "50px",
            backgroundColor:"rgba(0, 0, 0, 0.05)",
            marginLeft: "400px"}}
             >
            <Typography
                variant="h4"
                fontFamily={"inherit"}
                fontStyle="normal"
                fontWeight="600"
                fontSize="35px"
                lineHeight={"42px"}
                color={"#FE8D32"}
                marginBottom={3}
            >
            Upload Video File
            </Typography>
            <Box marginLeft={12}>
            <input type="file" id="profilepic" />
            </Box>
            <Typography>
                <h3 style={{marginLeft:"70px"}}>OR</h3><br></br>
                <span style={{marginRight:"50px"}}>Drag and Drop in this area</span>
            </Typography>
             </Box>

        </Box>
        <Box
        marginLeft={53}
        marginTop={10}
        >
        <Typography
        fontFamily={"inherit"}
        fontStyle="normal"
        fontWeight="600"
        fontSize="25px"
        lineHeight={"42px"}
        color={"black"}
        >
        Video Title</Typography>
        <textarea
                style={{height: "178px", width: "1121px",borderRadius: "10px", border: "2px solid black", marginTop: "5px", }}
                name="message"
                onChange={(e) => {}}
                value={''}
                type="text"
                placeholder="Enter Video Title here"
                margin="normal"
              >

        </textarea>
        </Box>

        <Box
        width={900}
        marginLeft={60}
        marginTop={10}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}

        >
            <Box>
                <Typography
                variant="h5"
                >Sports</Typography>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"> Select Sports</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{width: "200px", height: "50px", borderRadius: "10px", border: "2px solid black", marginTop: "5px", }}
                    value={''}
                    label="Sort by"
                    onChange={(e) => {}}
                >
                    <MenuItem value={"Recent"}>Recent</MenuItem>
                    <MenuItem value={"Newer"}>Newer</MenuItem>
                    <MenuItem value={"Long"}>Long</MenuItem>
                </Select>
                </FormControl>
            </Box>
            <Box>
                <Typography
                variant="h5"
                >Player</Typography>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Player</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{width: "200px",height: "50px", borderRadius: "10px", border: "2px solid black", marginTop: "5px", }}
                    value={''}
                    label="Sort by"
                    onChange={(e) => {}}
                >
                    <MenuItem value={"Recent"}>Recent</MenuItem>
                    <MenuItem value={"Newer"}>Newer</MenuItem>
                    <MenuItem value={"Long"}>Long</MenuItem>
                </Select>
                </FormControl>
            </Box>
        </Box>
        <Button
          variant="contained"
          color="warning"
          sx={{
            marginTop: "80px",
            fontWeight: "bold",
            fontFamily: "Inter",
            fontStyle: "normal",
            marginLeft: "850px",
            height: "50px",
            width: "250px",
            borderRadius: "50px",
            marginTop: "55px",
          }}
        >
          Upload
        </Button>
    </div>
  )
}
