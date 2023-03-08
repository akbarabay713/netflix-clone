import Banner from "../../component/banner/banner";
import Rows from "../../component/rows/rows";
import Navbar from "./../../component/navbar/navbar";
import request from "./../../request";
import styles from "./home-screen.module.css";
import React from "react";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <Navbar />
      <Banner />
      <Rows request={request} />
    </div>
  );
};

export default HomeScreen;
