import React, { Component } from "react";
import styles from "../styles/header.module.css";

class header extends Component {
  render() {
    const close = ">";
    const or = " or ";
    return (
      <div className={styles.header}>
        <div className={styles.headerFirstHalf}>
          <h1 className={styles.h1}>
            Building exactly the eCommerce website you want.
          </h1>
          <p className={styles.p}>
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
          <p>
            <a href="#" className={styles.purple}>
              Start a New Store
            </a>{" "}
            {or}
            <a href="#" className={styles.blue}>
              Customize & Extend {close}
            </a>
          </p>
        </div>
        <div className={styles.headerSecondHalf}>
          <img src="/header2.jpg" alt="My image" />
        </div>
      </div>
    );
  }
}

export default header;
