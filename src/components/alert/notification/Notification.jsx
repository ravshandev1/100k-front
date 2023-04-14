import React from "react";
import styles from "./Notification.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Notification = ({ active, setActive }) => {
  const { alert } = useSelector((state) => state.user);

  return (
    <div
      className={`${styles.alert} ${active && styles.active} ${
        !alert.status ? styles.error : styles.success
      } `}
    >
      <p className={styles.alert_body}>{alert.message}</p>
      <button className={styles.alert_btn} onClick={() => setActive(false)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default Notification;
