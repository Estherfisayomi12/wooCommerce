import React, { Component } from "react";
import styles from "../styles/madeSimple.module.css";
import extraStyles from "../styles/header.module.css";

class madeSimple extends Component {
  render() {
    const close = ">";
    return (
      <div className={styles.madeSimple}>
        <h2 className={styles.h2}>
          Your eCommerce <span> made simple</span>
        </h2>

        <div className={styles.madeSimplepic}>
          <div className={styles.madeSimplepic1}>
            <img src="develop2.jpeg" alt="Training" />
            <h4 className={styles.h4}>All You Need to Start</h4>
            <p className={extraStyles.p}>
              Add WooCommerce plugin to any WordPress site and set up a new
              store in minutes
            </p>
            <a href="#" className={extraStyles.blue}>
              Ecommerce for Wordpress {close}
            </a>
          </div>
          <div className={styles.madeSimplepic1}>
            <img src="madesimple2.webp" alt="Training" />
            <h4 className={styles.h4}>Customize and Extend</h4>
            <p className={extraStyles.p}>
              From subscriptions to gym classes to luxury cars, WooCommerce is
              fully customizable.
            </p>
            <a href="#" className={extraStyles.blue}>
              Browse Extensions {close}
            </a>
          </div>
          <div className={styles.madeSimplepic1}>
            <img src="madesimple3.jpeg" alt="Training" />
            <h4 className={styles.h4}>Active Community</h4>
            <p className={extraStyles.p}>
              WooCommerce is one of the fastest-growing ecommerce communities.
            </p>
            <a href="#" className={extraStyles.blue}>
              Check our Forums {close}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default madeSimple;
