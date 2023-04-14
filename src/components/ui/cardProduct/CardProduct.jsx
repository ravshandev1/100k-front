import React from 'react'
import styles from './CardProduct.module.scss'
import {Link} from "react-router-dom";

const productCard = (props) => {
	const {img, name, price, src, widthMax} = props
	return (
		<div className={`${styles.card} ${widthMax === true && styles.card_max}`}>
			<Link className={styles.card_link} to={src}>
				<div className={styles.card_body}>
					<div className={styles.card_body_img}>
						<img src={img} alt='error'/>
					</div>
					<div className={styles.card_body_name}>{name}</div>
					<div className={styles.card_body_price}>{price}<span> so'm</span></div>
				</div>
			</Link>
		</div>
	)
}

export default React.memo(productCard)
