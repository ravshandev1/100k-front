import React, {useEffect, useState} from 'react'
import styles from './Navbar.module.scss'
import Container from '../../ui/container/Container'
import Icon from '../../ui/icon/Icon'
import Dropdown from '../../ui/dropdown/Dropdown'
import Logo from '../../ui/logo/Logo'
import InputSearch from '../../ui/input/InputSearch'
import {Link} from 'react-router-dom'
import Loading from "../loading/Loading";
import {useSelector} from "react-redux";

export default function Navbar() {
	const isLoading = useSelector(state => state.loading)
	const [loading, setLoad] = useState(isLoading.loading)

	useEffect(() => {
		isLoading.loading ? setLoad(true) : setLoad(false)
	}, [isLoading.loading])

	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.nav_uppersection}>
					<Container>
						<div className={styles.nav_uppersection_menu}>
							<div className={styles.nav_download}>
								<div className={styles.nav_ios}>
									<Icon type={'ios'}/>
									<p className={styles.nav_ios_text}>App store</p>
								</div>
								<div className={styles.nav_android}>
									<Icon type={'android'}/>
									<p className={styles.nav_android_text}>Google play</p>
								</div>
							</div>
							<Dropdown color='white'/>
						</div>
					</Container>
				</div>
			</nav>
			<nav className={styles.nav_down}>
				<div className={styles.nav_down_downsection}>
					<Container>
						<div className={styles.nav_down_downsection_menu}>
							<Link to={'/'}>
								<Logo className={styles.nav_downsection_logo}/>
							</Link>
							<InputSearch/>
							<Dropdown color='red' className={styles.nav_downsection_dropdown}/>
						</div>
					</Container>
				</div>
				{loading ? <Loading className={styles.loading}/> : null}
			</nav>
		</>
	)
}
