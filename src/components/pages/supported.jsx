import React, { Component } from "react";
import styles from "../styles/supported.module.css";
import trustedStyles from "../styles/trustedByAgencies.module.css";
import madeSimpleStyle from "../styles/madeSimple.module.css";

class Supported extends Component {
  render() {
    return (
      <div className={styles.supported}>
        <h2 className={madeSimpleStyle.h2}>Supported by real people</h2>
        <p className={madeSimpleStyle.p}>
          {" "}
          Adipisicing elit. Sit explicabo eos praesentium, aspernatur deserunt
          aut unde, sed cumque culpa ullam voluptatum magnam soluta
        </p>

        <div className={styles.gallery}>
          <img src="supported1.jpeg" alt="Real 1" />
          <img src="supported2.jpeg" alt="Real 2" />
          <img src="IMG_3220.HEIC" alt="Real 3" />
          <img src="trusted1.jpeg" alt="Real 4" />
          <img src="/trusted4.jpeg" alt="Real 5" />
          <img src="trusted6.jpeg" alt="Real 6" />
          <img src="supported7.jpeg" alt="Real 7" />
        </div>
      </div>
    );
  }
}

export default Supported;
