import React from 'react';
import styles from "./Category.module.scss"
import {Link} from "react-router-dom";

const Category = ({img, description, src, count}) => {
	return (
		<div className={styles.category}>
			<Link className={styles.category_src} to={src}>
				<div className={styles.category_menu}>
					<div className={styles.category_menu_img}><img src={img} alt="category"/></div>
					<div className={styles.category_menu_description}>{description} <span>({count})</span></div>
				</div>
			</Link>
		</div>
	);
};

export default React.memo(Category);