import { Component} from "react";
import ProductList from "./components/ProductList";
import Loader from "./components/loader/Loader";

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <Loader /> : <ProductList />}
      </div>
    );
  }
}

export default App;
