import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Component } from "react";
import ProductDetail from "./ProductDetail";

export type ProductPropsType = {
  name: string;
  description: string;
  price: number;
  category: "electronic" | "others";
};

type Props = {};

type ProductStateType = {
  prodcuts: ProductPropsType[];
  modalShow: boolean;
  modalData: ProductPropsType;
};


const productData: ProductPropsType[] = [
  {
    description: "IPhone 11 Pro max",
    name: "IPhone",
    price: 10000,
    category: "electronic",
  },
  {
    description: "Samsung 12 pro",
    name: "Samsung",
    price: 10000,
    category: "electronic",
  },
  {
    description: "Huawei nova 2i",
    name: "Huawei",
    price: 50000,
    category: "electronic",
  },
];

export default class ProductList extends Component<Props, ProductStateType> {
  constructor(props: ProductPropsType) {
    super(props);
    this.state = {
      prodcuts: productData,
      modalShow: false,
      modalData: {} as ProductPropsType,
    };
  }

  onclickHandler = (product: ProductPropsType) => {
    this.setState({
        modalData: {
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price
        },
        modalShow: !this.state.modalShow 
    });
  };

  changeModalShow = () => {
    this.setState({
        modalShow: false
    });
  }

  render() {
    return (
      <div style={{ width: "100%", marginTop: 6 }}>
        <Box
          sx={{
            display: "grid",
            columnGap: 3,
            rowGap: 1,
            gridTemplateColumns: "repeat(6, 1fr)",
          }}
        >
          {this.state.prodcuts.map((product, index) => (
            <Card key={index} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Name: {product.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Price: {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => this.onclickHandler(product)}
                >
                  Details
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
        {this.state.modalShow? (
          <ProductDetail
            name={this.state.modalData.name}
            price={this.state.modalData.price}
            description={this.state.modalData.description}
            category={this.state.modalData.category}
          />
        ) : null}
      </div>
    );
  }
}
