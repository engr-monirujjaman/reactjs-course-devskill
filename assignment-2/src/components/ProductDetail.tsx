import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Loader from "./Loader";
import {ProductType} from "./Product";

type ProductDetailProps = {
    show: boolean,
    onHide: () => void,
    product: ProductType
}

const ProductDetail = (props: ProductDetailProps) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    return (
        <>
            {isLoading? <Loader/> : <ProductDetailModal {...props}/>}
        </>
      );    
}

const ProductDetailModal = (props: ProductDetailProps) => (
    <Modal
    {...props}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Product Details
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>{props.product.name}</h4>
      <p>Price: {props.product.price}</p>
      <p>Category: {props.product.category}</p>
      <p>Description: {props.product.description}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default ProductDetail;