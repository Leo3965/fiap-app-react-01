import React from "react";
import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, ...props }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
