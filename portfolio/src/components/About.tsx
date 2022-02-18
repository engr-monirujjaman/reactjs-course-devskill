import { Grid, Box, Button } from "@mui/material";
import MyImage from "../assets/img/my_photo.png";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        bgcolor: "#F0F0F0",
      }}
    >
      <Grid item marginTop={"50px"}>
        <SectionHeader Name="About Me" />
      </Grid>
      <Grid container item paddingBottom={"40px"}>
        <Grid item xs={5}>
          <Box
            sx={{
              padding: "30px 80px",
            }}
          >
            <Box
              width={"200px"}
              sx={{
                paddingLeft: "170px",
              }}
            >
              <img
                src={MyImage}
                alt=""
                style={{
                  transform: "scaleX(-1)",
                  width: "250px",
                  height: "auto",
                  borderRight: "5px solid #F98E0C",
                  borderBottom: "5px solid #F98E0C",
                  backgroundColor: "#FAFAFA",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={7}
          paddingLeft={12}
          paddingTop={"20px"}
          paddingRight={"100px"}
        >
          <p>Hello I am Monirujjaman, I am a Software Engineer</p>
          <small
            style={{
              paddingRight: "60px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            possimus debitis sit, consequuntur eligendi eveniet ipsa pariatur
            obcaecati repellat libero provident? Quos repellendus fugiat
            inventore adipisci?
          </small>
          <p>
            Name: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Md.
            Monirujjaman
          </p>
          <p>
            Email: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            md.monirujjaman@hotmail.com
          </p>
          <p>
            Phone: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;+880
            1631132484
          </p>
          <p>Date of Birth: &emsp; &emsp; &emsp; &emsp; &nbsp; 20-Oct-1994 </p>
          <p>Nationality: &emsp; &emsp; &emsp; &emsp; &emsp; Bangladeshi</p>
          <p>
            Address: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Dhaka, Bangladesh
          </p>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              bgcolor: "#F87A0C",
              borderRadius: "30px",
              padding: "5px 30px",
            }}
          >
            HIRE
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginTop: 2,
              bgcolor: "#EEEEEE",
              borderRadius: "30px",
              padding: "5px 15px",
              marginLeft: "30px",
            }}
          >
            DOWNLOAD CV
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
