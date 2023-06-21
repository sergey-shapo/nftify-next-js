import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = (): React.ReactElement => {
  return (
    <nav className={styles["main-navigation"]}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/nfts">Nfts</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
