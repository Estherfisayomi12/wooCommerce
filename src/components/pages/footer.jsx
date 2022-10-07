import React, { Component } from "react";
import styles from "../styles/footer.module.css";
import headerStyles from "../styles/header.module.css";

class footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footer1}></div>
        <p className={headerStyles.p}>
          Copyright Esther 2022 Terms & Conditions Privacy Policy
        </p>
        <p className={headerStyles.p}>AUTOMATIC</p>
      </div>
    );
  }
}

export default footer;
