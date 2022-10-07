import React, { Component } from "react";
import styles from "../styles/products.module.css";

class Product extends Component {
  render() {
    return (
      <div className={styles.product}>
        <div className={styles.product1}>
          <p>30 day money back guarantee</p>
          <p>
            <strong>Safe and Secure</strong> online payment
          </p>
        </div>

        <div className={styles.logo}>
          <a href="#" className={styles.white}>
            <strong>WOO</strong>
          </a>
          <a href="#" className={styles.alsoWhite}>
            COMMERCE
          </a>
        </div>

        <div className={styles.product3}>
          <div className={styles.productsBox}>
            <h6>who we are</h6>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Work with us</li>
            </ul>
          </div>
          <div className={styles.productsBox}>
            <h6>woocommerce</h6>
            <ul>
              <li>Lorem</li>
              <li>ipsum</li>
              <li>carte</li>
              <li>Huster</li>
              <li>Alabama</li>
              <li>Joinus</li>
              <li>Lorem molestias</li>
            </ul>
          </div>
          <div className={styles.productsBox}>
            <h6>Other products</h6>
            <ul>
              <li>dolorum totam </li>
              <li>Eligendi </li>
              <li>Work with us</li>
              <li>voluptates </li>
            </ul>
          </div>
          <div className={styles.productsBox}>
            <h6>supports</h6>
            <ul>
              <li>Huster</li>
              <li>Alabama</li>
              <li>Joinus</li>
              <li>Work with us</li>
              <li>voluptates </li>
            </ul>
          </div>
          <div className={styles.productsBox}>
            <h6>we recommend</h6>
            <ul>
              <li>fugit </li>
              <li>magni </li>
              <li>Quis us</li>
              <li>voluptates </li>
              <li>Accusamus</li>
              <li>Ruqis</li>
              <li>recusandae natus </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
