import React from "react";
import styles from "./Container.module.scss";

export const Container = ({size, children}) => {
  return <div className={size === "md" ? styles.container_md : styles.container}>{children}</div>;
};

export default Container;
