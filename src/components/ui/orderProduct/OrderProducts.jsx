import React from 'react';
import styles from './OrderProduct.module.scss'

const OrderProducts = (props) => {

	const {image, product_name, product_price, status, created_date, address, comment} = props

	return (
		<div className={styles.product}>
			<div className={styles.product_header}>
				<div className={styles.product_image}>
					<img src={image} alt=""/>
				</div>
				<div className={styles.product_info}>
					<p>nomi: <span>{product_name}</span></p>
					<p>nari: <span>{product_price} so'm</span></p>
					<p>status: <span>{status}</span></p>
				</div>
			</div>
			<hr/>
			<div className={styles.product_body}>
				<p>vohti: <span>{created_date}</span></p>
				<p>adress: <span>{address}</span></p>
				<p>comment: <span>{comment}</span></p>
			</div>
		</div>
	);
};

export default OrderProducts;