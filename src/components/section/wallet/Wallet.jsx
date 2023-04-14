import React from 'react';
import styles from './Wallet.module.scss'

const Wallet = () => {
	return (
		<div className={styles.wallet}>
			<div className={styles.wallet_header}>
				<h4>Mening hisobim</h4>
			</div>
			<div className={styles.wallet_body}>
				<div className={styles.wallet_items}>
					ID raqamingiz:
					<span>8492232</span>
				</div>
				<div className={styles.wallet_items}>
					Bonus balans:
					<span>0 coins</span>
				</div>
				<div className={styles.wallet_items}>
					Asosiy balansda
					<span>0 so'm</span>
				</div>
				<div className={styles.wallet_items}>
					Depozit balansda:
					<span>0 so'm</span>
				</div>
				<div className={styles.wallet_items}>
					Tolap berildi:
					<span>0 so'm</span>
				</div>
			</div>
		</div>
	);
};

export default Wallet;