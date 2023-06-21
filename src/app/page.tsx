import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

const HomePage = (): React.ReactElement => {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
    </main>
  );
};

export default HomePage;
