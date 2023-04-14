import React from 'react';
import Container from "../../ui/container/Container";
import styles from './dasboardNavbar.module.scss'
import {faChartPie, faLink, faStore, faHome, faDollar, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const adminNavs = [
	{
		id: 4,
		name: 'Main',
		link: '/dashboard',
		icon: faHome
	},

	{
		id: 2,
		name: 'Oqim',
		link: '/dashboard/oqim',
		icon: faLink
	},
	{
		id: 3,
		name: 'Chart',
		link: '/dashboard/chart',
		icon: faChartPie
	},
	{
		id: 1,
		name: 'Market',
		link: '/dashboard/market',
		icon: faStore
	},
	{
		id: 5,
		name: "Tol'ov",
		link: '/dashboard/pay',
		icon: faMoneyBill
	}
]

const DashboardNavbar = () => {
	return (
		<nav className={styles.navbar}>
			<Container>
				<ul className={styles.navbar_list}>
					{adminNavs.map(item => (
						<li className={styles.navbar_list_item} key={item.id}>
							<Link to={item.link}>
								<FontAwesomeIcon icon={item.icon}/>
								<p>{item.name}</p>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	);
};

export default DashboardNavbar;