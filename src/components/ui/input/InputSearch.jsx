import React from "react";
import styles from "./InputSearch.module.scss";
import search from "../../../assets/images/search.svg";

export default function InputSearch() {
    return (
        <div className={styles.input}>
            <input type="text" placeholder="qidiruv..." />
            <button>
                <img src={search} className={styles.input_icon} alt="" />
            </button>
        </div>
    );
}
