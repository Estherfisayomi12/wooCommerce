import React, { Component } from "react";
import styles from "../styles/trustedByAgencies.module.css";
import madeSimpleStyle from "../styles/madeSimple.module.css";

class Trusted extends Component {
  render() {
    return (
      <div className={styles.trusted}>
        <h2 className={madeSimpleStyle.h2}>
          Trusted by agencies <span>& store Owners</span>
        </h2>

        <p className={madeSimpleStyle.p}>
          Dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Harum, illum rem veniam consequuntur corporis saepe!
          Soluta facere quidem at reprehenderit, accusantium nisi? Ipsum beatae
          neque deserunt earum dolor quia consequatur. adipisicing elit. Eveniet
          aliquam quas iusto consequuntur commodi illum sunt saepe beatae
          perspiciatis sed molestias, aliquid delectus officia dignissimos
          obcaecati magnam? Aliquid, tempore nostrum.
        </p>
      </div>
    );
  }
}

export default Trusted;
