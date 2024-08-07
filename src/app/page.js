import Heading from "../../components/Heading";
import styles from "../app/Home.module.scss";
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Heading text="Hello World!" />
    </div>
  );
};
export default Home;
