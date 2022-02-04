import { useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import ProductDetail from "./ProductDetail";

export type ProductType = {
  name: string;
  price: number;
  category: "electronic" | "other";
  description: string;
};

const productList: ProductType[] = [
  {
    name: "Samsung 12 pro",
    price: 15000,
    category: "electronic",
    description: "Ram 8GB, Processor sanpdragon",
  },
  {
    name: "IPhone 12 pro max",
    price: 15000,
    category: "electronic",
    description: "Ram 8GB, Processor sanpdragon, camera 100 Pixel",
  },
];

const Product = () => {
  const [products] = useState<ProductType[]>(productList);
  const [showModal, setShowModal] = useState(false);
  const [productDetail, setProductDetail] = useState({} as ProductType);

  const showProductDeitail = (product: ProductType) => {
    setProductDetail(product);
    setShowModal(true);
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Stack direction="horizontal" gap={3}>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onClick={() => showProductDeitail(product)}
              />
            ))}
          </Stack>
        </Col>
      </Row>
      {showModal ? (
        <ProductDetail
          show={showModal}
          onHide={() => setShowModal(false)}
          product={productDetail}
        />
      ) : null}
    </Container>
  );
};

type ProductCardPropsType = {
  product: ProductType;
  onClick: () => void;
};

const ProductCard = (props: ProductCardPropsType) => {
  return (
    <Card
      bg="info"
      text="dark"
      style={{ width: "18rem" }}
      className="mb-2"
      onClick={props.onClick}
    >
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          <strong>Price: </strong> <label>{props.product.price}</label>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
