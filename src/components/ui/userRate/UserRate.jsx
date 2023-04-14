import React, {useState} from 'react';
import styles from './UserRate.module.scss'
import Star from "../star/Star";

const UserRate = (props) => {
  const {name, star, description} = props
  const [stars] = useState([false, false, false, false, false])
  return (
    <div className={styles.user_rate__card}>
      <div className={styles.user_rate__card_header}>
        <h1 className={styles.user_rate__card_name}>{name}</h1>
        <div className={styles.user_rate__card_stars}>
          {stars.map((item, index) => {
            index < star ? item = true : item = false
            return (
              <Star active={item} key={index}/>
            )
          })}
        </div>
      </div>
      <p className={styles.user_rate__card_description}>{description}</p>
    </div>
  );
};

export default UserRate;