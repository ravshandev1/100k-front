import React from 'react';
import styles from './DetailSkeleton.module.scss'
import Container from "../../ui/container/Container";

const DetailSkeleton = () => {
	return (
		<div className={styles.detail}>
			<Container size='md'>
				<div className={styles.detail_header}>
					<div className={styles.detail_name}></div>
					<div className={styles.detail_price}></div>
				</div>
				<div className={styles.detail_body}>
					<div className={styles.detail_left__side}></div>
					<div className={styles.detail_right__side}></div>
				</div>
				<div className={styles.detail_footer}></div>
			</Container>
		</div>
	);
};

export default DetailSkeleton;