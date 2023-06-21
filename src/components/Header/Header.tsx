import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <h1>NFTIFY</h1>
      <Navbar />
    </header>
  );
};

export default Header;
