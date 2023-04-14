import React from 'react';
import styles from "./Star.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Star = ({active, className }) => {
  return (
    <div className={`${styles.star} ${className}`} >
      <FontAwesomeIcon className={active ? styles.star_active : styles.star_icon} icon={faStar}/>
    </div>
  );
};

export default Star;