import React from "react";
import styles from "./Icon.module.scss";
import ios from "../../../assets/images/ios.svg";
import android from "../../../assets/images/android.svg";

export default function Icon({ type }) {
    return (
        <i className={styles.icon}>
            <img
                src={(type === "ios" && ios) || (type === "android" && android)}
                alt=""
            />
        </i>
    );
}
