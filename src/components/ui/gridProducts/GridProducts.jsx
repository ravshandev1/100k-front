import React from 'react';
import styles from "./GridProducts.module.scss"

const GridProducts = ({className,children}) => {
	return (
		<div className={`${styles.grid} ${className}`}>
			{children}
		</div>
	);
};

export default GridProducts;