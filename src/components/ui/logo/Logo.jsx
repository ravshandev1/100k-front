import React from "react";
import styles from "./Logo.module.scss";
// import logo from "../../../assets/images/100k.png";
import logo from '../../../assets/images/logo.svg'
export default function Logo({className}) {
    return (
        <div className={`${styles.logo} ${className}`} >
            <img src={logo} alt="" />
        </div>
    );
}
