import Heading from "../../components/Heading";
import styles from "../app/Home.module.scss";

export const metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Heading text="Hello World!" />
    </div>
  );
};
export default Home;
