import React, { Component } from "react";
import styles from "../styles/customizable.module.css";
import madeStyles from "../styles/madeSimple.module.css";
import headerStyles from "../styles/header.module.css";

class Customize extends Component {
  render() {
    return (
      <div className={styles.customize}>
        <h4 className={madeStyles.h4}>
          {" "}
          WooCommerce - the most customizable eCommerce platform for building
          your online business.
        </h4>
        <a href="#" className={headerStyles.purple}>
          GET STARTED
        </a>
      </div>
    );
  }
}

export default Customize;
