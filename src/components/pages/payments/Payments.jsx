import React from 'react';
import styles from './Payments.module.scss'
import Container from "../../ui/container/Container";
import Wallet from "../../section/wallet/Wallet";
import WalletForm from "../../section/walletForm/WalletForm";
import DashboardNavbar from "../../section/dashboardNavbar/dashboardNavbar";

const Payments = () => {
	return (
		<>
			<DashboardNavbar/>
			<div className={styles.pay}>
				<Container>
					<div className={styles.pay_body}>
						<Wallet/>
						<WalletForm/>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Payments;