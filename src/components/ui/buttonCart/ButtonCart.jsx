import React, {useState} from 'react';
import styles from "./ButtonCart.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

const ButtonCart = ({className}) => {
  const [active, setActive] = useState(false)

  const clicker = () => {
    setActive(prev => !prev)
  }

  return (
    <button className={` ${active ? styles.btn__active : styles.btn}  ${className}`} onClick={() => clicker()}>
      <FontAwesomeIcon className={active ? styles.btn__active_icon : styles.btn_icon} icon={faHeart}/>
    </button>
  );
};

export default ButtonCart;