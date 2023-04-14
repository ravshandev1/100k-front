import React from 'react';
import styles from './User.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const User = ({name, img, className}) => {
	return (
		<div className={`${styles.user} ${className}`}>
			<div className={styles.user_img}>
				{!img ? <FontAwesomeIcon icon={faUser}/> : <img src={img} alt='user icon error'/>}
			</div>
			<div className={styles.user_name}>
				{name}
			</div>
		</div>
	);
};

export default User;