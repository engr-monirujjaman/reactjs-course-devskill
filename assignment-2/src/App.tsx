import { useState, useEffect} from "react";
import Product from "./components/Product";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <>{isLoading ? <Loader /> : <Product />}</>;
};

export default App;
