import React, {useEffect} from 'react';
import Container from "../../ui/container/Container";
import styles from './Admin.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCartShopping, faCircleInfo, faMoneyBill, faUser, faUsers} from "@fortawesome/free-solid-svg-icons";
import DashboardNavbar from "../../section/dashboardNavbar/dashboardNavbar";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../../store/user";

const admin = [
	{
		title: 'Dastur haqida',
		icon: faCircleInfo,
		id: 1
	},
	{
		title: 'Menu',
		icon: faBars,
		id: 2
	},

	{
		title: 'Jamoa',
		icon: faUsers,
		id: 3
	},
	{
		title: 'Balans',
		icon: faMoneyBill,
		id: 4
	},
	{
		title: 'Market',
		icon: faCartShopping,
		id: 5
	},

]

const Admin = () => {
	const {user} = useSelector(state => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getUserData(user.user_id))
	}, [])

	return (
		<div className={styles.admin}>
			<DashboardNavbar/>
			<Container>
				<div className={styles.admin_content}>
					<div className={styles.admin_header}>
						<div className={styles.admin_header_avatar}>
							<FontAwesomeIcon icon={faUser}/>
						</div>
						<h2>{!user.data.name ? 'Ism' : user.data.name} {!user.data.surname ? 'Familiya' : user.data.name}</h2>
					</div>
					<div className={styles.admin_bonuses}>
						<h2>Hisobingizda</h2>
						<h3>0 bonus</h3>
						<div className={styles.admin_bonuses_body}>
							<p>Coin: 0, Tahminiy balans: 0 bonus</p>
							<div className={styles.admin_bonuses_logo}>
								<img src={!user.data.image ? "/100k.png" : user.data.image} alt="logo"/>
							</div>
						</div>
					</div>
					<div className={styles.admin_navs}>
						{admin.map(item => (
							<div className={styles.admin_navs_items} key={item.id}>
								<FontAwesomeIcon icon={item.icon}/>
								<p>{item.title}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Admin;