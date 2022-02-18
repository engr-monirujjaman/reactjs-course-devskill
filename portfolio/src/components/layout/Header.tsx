import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { GlobalStyles } from "@mui/styled-engine";
import { bgcolor, width } from "@mui/system";
import MyImage from "../../assets/img/my_photo.png";

const Header = () => {
  return (
    <>
      <Container maxWidth="xl">
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color={"#F87A0C"}
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Logo.
          </Typography>
          <nav>
            {(["Home", "About", "Experinee", "Contact Us"] as const).map(
              (anchor) => (
                <Link
                  key={anchor}
                  variant="button"
                  color={"#F87A0C"}
                  href="#"
                  underline="none"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  {anchor}
                </Link>
              )
            )}
          </nav>
        </Toolbar>
        <Grid container minHeight={600}>
          <Grid item xs>
            <Grid
              container
              justifyContent={"center"}
              alignItems="center"
              minHeight={600}
            >
              <Grid
                item
                container
                justifyContent="center"
                alignContent={"center"}
                justifyItems="center"
                height={100}
              >
                <Box
                  sx={{
                    width: 450,
                  }}
                >
                  <Typography>Hello,</Typography>
                  <Typography variant="h4" color={"#F87A0C"}>
                    I am Monirujjaman
                  </Typography>
                  <Typography >
                    Software Engineer
                  </Typography>
                  <Button variant='contained'
                  sx={{marginTop: 2,
                  bgcolor: '#F87A0C',
                  borderRadius: '30px',
                  padding: '5px 30px'}}>HIRE</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs style={LoadProfileImage}></Grid>
        </Grid>
      </Container>
    </>
  );
};

const LoadProfileImage = {
  backgroundImage: `url(${MyImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

export default Header;
