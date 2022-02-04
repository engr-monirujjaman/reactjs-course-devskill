import * as React from "react";
import { ProductPropsType } from "./ProductList";
import Loader from "./loader/Loader";
import ProductModal from "./ProductModal";

type ProductDetailStateType = {
  isLoading: boolean;
};

export default class ProductDetail extends React.Component<
  ProductPropsType,
  ProductDetailStateType
> {
  constructor(props: ProductPropsType) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return <>{this.state.isLoading ? <Loader /> : <ProductModal name={this.props.name} description={this.props.description} price={this.props.price} category={this.props.category}/>}</>;
  }
}
