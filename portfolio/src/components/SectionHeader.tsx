import { Typography, Box, Divider } from "@mui/material";

type SectionHeaderProps = {
    Name: string;
  };
  
  const SectionHeader = ({ Name }: SectionHeaderProps) => {
    return (
      <>
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#656565",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {Name}
          </Typography>
          <Divider
            sx={{
              bgcolor: "#F87A0C",
              height: "4px",
            }}
          />
          <Divider
            variant="middle"
            sx={{
              bgcolor: "#686868",
              height: "4px",
              marginTop: "4px",
            }}
          />
        </Box>
      </>
    );
  };

  export default SectionHeader;