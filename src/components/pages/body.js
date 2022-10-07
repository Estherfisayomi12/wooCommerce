import React, { Component } from "react";
import styles from "../styles/body.module.css";
import Nav from "./nav";
import Header from "./header";
import MadeSimple from "./madeSimple";
import DevWithoutLimits from "./devWithoutLimits";
import Footer from "./footer";
import Trusted from "./trustedByAgencies";
import Supported from "./supported";
import Customize from "./customizable";
import Product from "./products";

class Body extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Nav />
        <Header />
        <MadeSimple />
        <DevWithoutLimits />
        <Trusted />
        <Supported />
        <Customize />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default Body;
