import { Grid, Button, Box, Icon, TextField } from "@mui/material";
import SectionHeader from "./SectionHeader";
import MyImage from "../assets/img/my_photo.png";
import HomeIcon from "@mui/icons-material/Home";
import { borderRadius } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUs = () => {
  return (
    <>
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
        <Grid container item padding={"30px"}>
          <Grid item xs={5}>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              paddingTop={"5px"}
            >
              <Box width={"350px"} display="flex" marginY={2}>
                <EmailIcon
                  sx={{
                    border: "5px solid #FE7E11",
                    borderRadius: "50%",
                    fontSize: "45px",
                    padding: "8px",
                    boxSizing: "content-box",
                    bgcolor: "#818181",
                    color: "#FDFDFD",
                    marginRight: "20px",
                  }}
                />
                <p>md.monirujjaman@hotmail.com</p>
              </Box>
              <Box width={"350px"} display="flex" marginY={2}>
                <PhoneIcon
                  sx={{
                    border: "5px solid #FE7E11",
                    borderRadius: "50%",
                    fontSize: "45px",
                    padding: "8px",
                    boxSizing: "content-box",
                    bgcolor: "#818181",
                    color: "#FDFDFD",
                    marginRight: "20px",
                  }}
                />
                <p> +880 1631132848</p>
              </Box>
              <Box width={"350px"} display="flex" marginY={2}>
                <LocationOnIcon
                  sx={{
                    border: "5px solid #FE7E11",
                    borderRadius: "50%",
                    fontSize: "45px",
                    padding: "8px",
                    boxSizing: "content-box",
                    bgcolor: "#818181",
                    color: "#FDFDFD",
                    marginRight: "20px",
                  }}
                />
                <p>875, West SHewrapra, Dhaka, Mirpur, Bangladesh</p>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={7}
            paddingLeft={12}
            paddingTop={"20px"}
            paddingRight={"100px"}
          >
            <Box component={"form"} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-required"
                  label="Your name..."
                  sx={{
                    marginRight: "20px",
                  }}
                />
                <TextField id="outlined-required" label="Your email..." sx={{
                    width: '270px'
                }}/>
              </div>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  sx={{
                    marginTop: "25px",
                    width: "500px",
                  }}
                />
              </div>
            </Box>
            <Button
              variant="contained"
              sx={{
                marginTop: 4,
                bgcolor: "#F87A0C",
                borderRadius: "30px",
                padding: "8px 30px",
              }}
            >
              SEND MESSAGE
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
