import React from 'react';
import styles from './CategorySkeleton.module.scss'
const CategorySkeleton = () => {
	return (
		<div className={styles.category}>
			<div className={styles.category_img}></div>
			<div className={styles.category_description}></div>
		</div>
	);
};

export default CategorySkeleton;