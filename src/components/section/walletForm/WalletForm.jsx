import React from 'react';
import styles from './WalletForm.module.scss'
import InputMain from "../../ui/input/InputMain";
import Button from "../../ui/button/Button";

const WalletForm = () => {
	return (
		<form className={styles.form}>
			<div className={styles.form_header}>
				<h4>To'lovga sorov berish formasi</h4>
			</div>
			<div className={styles.form_body}>
				<label htmlFor="card_num">
					Karta raqamingizni kiriting
				</label>
				<InputMain name='card_num' className={styles.form_input} placeholder='0000 0000 0000 0000'/>
				<label htmlFor="card_num">
					Karta raqamingizni kiriting
				</label>
				<InputMain  name='card_num' className={styles.form_input} placeholder='12 000'/>
			</div>
			<div className={styles.form_footer}>
				<Button width='md'>
					Tasdiqlash
				</Button>
			</div>
		</form>
	);
};

export default WalletForm;