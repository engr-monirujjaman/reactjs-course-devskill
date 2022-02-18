import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from '../assets/img/my_photo.png';

const ProfileImage = () => (
    <>
        <Grid 
        container 
        height={350}
        justifyContent='center'
        justifyItems='center'>
            <Grid alignItems='center'
            alignSelf='center' 
            sx={{
                    height: 200,
                    width: 200,
                    bgcolor: '#263347',
                    border: '5px solid #FEFDFC',
                    borderRadius: '50%',
                    display: 'flex'
                }}>
                <Box style={LoadProfileImage} sx={{
                    height: 170,
                    width: 170,
                    margin: 'auto',
                    borderRadius: '50%'
                }}></Box>
            </Grid>
        </Grid>
    </>
);

const LoadProfileImage = {
backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
export default ProfileImage;