import React from "react";
import styles from "./Radio.module.css";

function Radio({ ...props }) {
  return (
    <input
      className={styles.customRadio}
      type="radio"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

export default Radio;
