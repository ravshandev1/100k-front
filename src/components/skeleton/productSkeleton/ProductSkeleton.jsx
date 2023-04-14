import React from 'react';
import styles from './ProductSkeleton.module.scss'

const ProductSkeleton = () => {
	return (
		<div className={styles.product}>
			<div className={styles.product_img}></div>
			<div className={styles.product_name}></div>
			<div className={styles.product_price}></div>
		</div>
	);
};

export default ProductSkeleton;