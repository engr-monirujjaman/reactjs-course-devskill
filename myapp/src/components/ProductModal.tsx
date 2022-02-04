import { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { ProductPropsType } from "./ProductList";

type ProductModalStateType = {
  open: boolean;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default class ProductModal extends Component<
  ProductPropsType,
  ProductModalStateType
> {

  constructor(props: ProductPropsType) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Product Details
            </Typography>
            <Typography>Name: {this.props.name}</Typography>
            <Typography>Price: {this.props.price}</Typography>
            <Typography>Category: {this.props.category}</Typography>
            <Button sx={{ float: "right" }} onClick={() => this.handleClose()}>
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    );
  }
}
