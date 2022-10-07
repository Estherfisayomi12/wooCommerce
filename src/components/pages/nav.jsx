import React, { Component } from "react";
import styles from "../styles/nav.module.css";

class nav extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.navbar1}>
          <div className={styles.logo}>
            <a href="#" className={styles.brown}>
              WOO
            </a>
            <a href="#">COMMERCE</a>
          </div>
          <div className={styles.products}>
            <ul className={styles.productsLists}>
              <li>
                <a href="#">Sell</a>
              </li>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Develop</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.navbar2}>
          <a href="#" className={styles.navbar2Link}>
            Log In
          </a>
          <a href="#" className={styles.purpleButton}>
            Get Started
          </a>
        </div>
      </div>
    );
  }
}

export default nav;
