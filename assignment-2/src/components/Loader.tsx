import { Spinner } from "react-bootstrap";

const Loader = () => (
  <>
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Spinner animation="border" role="status" className="align-self-center">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>
  </>
)

export default Loader;
