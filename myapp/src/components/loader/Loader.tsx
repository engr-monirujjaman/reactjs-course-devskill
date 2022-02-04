import ReactLoading from "react-loading";
import styles from './Loader.module.css'

const Loader = () => (
  <div className={styles.container}> 
    <ReactLoading type="spinningBubbles" color="#17e610" height={"10%"} width={"10%"} />
  </div>
);

export default Loader;