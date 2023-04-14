import React from "react";
import styles from "./InputMain.module.scss";

const InputMain = (props) => {
  const { type, placeholder, value, className, onSubmit, err, onChange, name } =
    props;

  return (
    <input
      className={`${styles.input} ${err && styles.input__err} ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      onSubmit={onSubmit}
    />
  );
};

export default InputMain;
