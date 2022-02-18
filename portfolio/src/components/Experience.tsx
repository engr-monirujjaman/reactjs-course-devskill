import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item marginTop={5}>
          <SectionHeader Name="Experience" />
        </Grid>
        <Grid container item 
        justifyContent={"center"} 
        direction={'row'}
        paddingY={'30px'}
        gap={5}>
        <Box width={"450px"} bgcolor="red">
              <Card>
                <CardContent>
                  <Typography>20 Octobar 2018</Typography>
                  <Typography variant="h6" color="#FE7E11">
                    Web Developer
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: 1,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deserunt architecto maiores incidunt, accusantium ut iure
                    eum dolore aliquid facilis distinctio sed commodi non!
                    Quidem consectetur nobis repellendus repellat temporibus
                    error.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box width={"450px"} bgcolor="red">
              <Card>
                <CardContent>
                  <Typography>20 Octobar 2020</Typography>
                  <Typography variant="h6" color="#FE7E11">
                    Software Engineer
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: 1,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deserunt architecto maiores incidunt, accusantium ut iure
                    eum dolore aliquid facilis distinctio sed commodi non!
                    Quidem consectetur nobis repellendus repellat temporibus
                    error.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Experience;

<Card
  sx={{
    minWidth: "200px",
  }}
>
  <CardContent>
    <Typography>20 Octobar 2018</Typography>
    <Typography variant="h6" color="#FE7E11">
      Web Developer
    </Typography>
    <Typography
      sx={{
        marginTop: 1,
      }}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
      architecto maiores incidunt, accusantium ut iure eum dolore aliquid
      facilis distinctio sed commodi non! Quidem consectetur nobis repellendus
      repellat temporibus error.
    </Typography>
  </CardContent>
</Card>;
