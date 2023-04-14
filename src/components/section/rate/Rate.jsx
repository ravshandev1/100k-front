import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faFaceGrinBeam,
	faFaceGrinSquint,
	faFaceGrinStars,
	faFaceRollingEyes,
	faFaceSadCry,
} from "@fortawesome/free-solid-svg-icons";
import styles from './Rate.module.scss'

const Rate = ({className,rate ,  setRate}) => {
	const [emoji] = useState([
		{icon: faFaceRollingEyes},
		{icon: faFaceSadCry},
		{icon: faFaceGrinBeam},
		{icon: faFaceGrinStars},
		{icon: faFaceGrinSquint}
	])


	return (
		<div className={`${styles.rate} ${className}`}>
			{emoji.map((item, index) => {
				return (
					<button key={index} className={`${styles.rate_btn} ${rate === (index + 1) && styles.active}`} onClick={() => setRate(index + 1)}>
						<FontAwesomeIcon className={styles.rate_icon} icon={item.icon}/>
					</button>
				)
			})}
		</div>
	);
};


// <label key={index} >
// 	<input
// 		type="radio"
// 		value={ratingValue}
// 		onClick={() => setRating(ratingValue)}/>
// 	<FontAwesomeIcon
// 		icon={faStar}
// 		className={`${styles.rate_star}
// 							${ratingValue <= rating ? styles.rate_star__active : styles.rate_star__disabled}`
// 		}/>
// </label>

export default Rate;