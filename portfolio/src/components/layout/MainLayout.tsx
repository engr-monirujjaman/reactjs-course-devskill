import { Container} from "@mui/material";
import About from "../About";
import ContactUs from "../ContactUs";
import Experience from "../Experience";
import MyFooter from "../MyFooter";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
             <Container
          maxWidth="xl"
          disableGutters={true}
          sx={{ bgcolor: "#FAFAFA", height: "100vh" }}
        >
          <Header/>
          <About/>
          <Experience/>
          <ContactUs/>
          <MyFooter/>
        </Container>
    </>
  );
};

export default MainLayout;
