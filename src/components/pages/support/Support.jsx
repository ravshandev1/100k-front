import React from 'react';
import Container from "../../ui/container/Container";
import styles from './Support.module.scss'

const Support = () => {
	return (
		<div className={styles.support}>
			<Container size='md'>
				<div className={styles.support_body}>
					<h2 className={styles.support_title}>Murojat uchun</h2>
					<div className={styles.support_call__center}>Call center : <span>+998 97 319 53 19</span></div>
					<div className={styles.support_email}>Elektron poshta : <span>karolvernulsa@gmail.com</span></div>
					<div className={styles.support_telegram}>Telgram : <span>@Salomberdiyev_Bobur</span></div>
				</div>
			</Container>
		</div>
	);
};

export default Support;