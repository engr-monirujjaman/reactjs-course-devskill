import { Grid } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const MyFooter = () => {
    return (
        <>
            <Grid container 
            justifyContent={'space-between'}
            direction={'row'}>
                <Grid item marginLeft={10}
                marginY={2}>
                <footer>Copyright © 2022 By Monirujjaman.</footer>
                </Grid>
                <Grid item marginRight={50}
                marginY={2}>
                    <FacebookIcon
                    sx={{
                        marginRight: '20px'
                    }}/>
                    <GitHubIcon sx={{
                        marginRight: '20px'
                    }}/>
                    <TwitterIcon sx={{
                        marginRight: '20px'
                    }}/>
                </Grid>
            </Grid>
        </>
    );
}

export default MyFooter;