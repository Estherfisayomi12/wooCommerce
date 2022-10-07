import React, { Component } from "react";
import styles from "../styles/devWithoutLimits.module.css";
import headerStyles from "../styles/header.module.css";
import madeSimpleStyles from "../styles/madeSimple.module.css";

class devWithoutLimits extends Component {
  render() {
    return (
      <div className={styles.devWithout}>
        <div className={styles.devPart1}>
          <img src="develop1.webp" alt="Image of tech sis" />
          <div className={styles.devPartUnder}>
            <h4 className={madeSimpleStyles.h4}>
              Develop <span>Without limits</span>{" "}
            </h4>
            <p className={headerStyles.p}>
              Lorem ipsum dolor sit amet consectetur adipisicntium commodi optio
              fugiat odio aspernatur, illo rem quas facere nesciunt
              perspiciatis. At eligendi perspiciating elit. Laudantium debitis
              assumenda dolorum similique autem doloremque nemo magnam expedita
              nobis eos, excepturi optio ea ab, ad iure! Minima corporis qui
              cumque.
            </p>
            <a href="#" className={headerStyles.purple}>
              Read the Documentation
            </a>
          </div>
        </div>
        <div className={styles.devPart2}>
          <div className={styles.devPartUnder}>
            <h4 className={madeSimpleStyles.h4}>
              Know our <span>global Community</span>{" "}
            </h4>
            <p className={headerStyles.p}>
              Gnam expedita nobis eos, excepturi optio ea ab, ad Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Laudantium debitis
              assumenda dolorum Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Iusto pariatur praeseis voluptas, odio labore
              eum in. similique autem doloremque nemo maiure! Minima corporis
              qui cumque.
            </p>
            <a href="#" className={headerStyles.purple}>
              Read the Documentation
            </a>
          </div>
          <img src="develop2.jpeg" alt="Image of tech sis" />
        </div>
      </div>
    );
  }
}

export default devWithoutLimits;
