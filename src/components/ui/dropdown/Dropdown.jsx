import React, {useEffect, useRef, useState} from "react";
import styles from "./Dropdown.module.scss";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../store/user";

export default function Dropdown({color, className}) {
	const [isOpen, setIsOpen] = useState(false);
	const {user} = useSelector(state => state.user)
	const {isAuth, role} = user
	const menuRef = useRef()
	const dispatch = useDispatch()

	const toggleMenu = (e) => {
		setIsOpen(prev => !prev)
		if (menuRef.current && !menuRef.current.contains(e.target)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', toggleMenu, true)
	}, [])

	return (

		<div className={`${styles.dropdown} ${className}`} ref={menuRef}>
			<button
				className={
					(color === "red" && styles.dropdown_opener_red) ||
					(color === "white" && styles.dropdown_opener)
				}
			>
				Mening profilim
			</button>
			<ul className={`${styles.dropdown_menu} ${isOpen && styles.active}`}>
				{
					isAuth ?
						(
							<>
								{role === 'admin' && <li className={styles.dropdown_menu_item}>
									<Link className={styles.dropdown_menu_link} to='/dashboard'>Admin</Link>
								</li>
								}
								<li className={styles.dropdown_menu_item}>
									<Link className={styles.dropdown_menu_link} to='/profile'>Profile</Link>
								</li>
								<li className={styles.dropdown_menu_item}>
									<Link className={styles.dropdown_menu_link} to='/support'>Support</Link>
								</li>
								<li className={styles.dropdown_menu_item}>
									<Link className={styles.dropdown_menu_link} to='/profile/wishlist'>Sevimlarim</Link>
								</li>
								<li className={styles.dropdown_menu_item}>
									<button onClick={() => dispatch(logout())}>
										Chiqish
									</button>
								</li>
							</>
						) : (
							<>
								<li className={styles.dropdown_menu_item}>
									<Link className={styles.dropdown_menu_link} to='/profile'>Profile</Link>
								</li>
								<li className={styles.dropdown_menu_item}>
									<Link className={styles.dropdown_menu_link} to='/login'>Login</Link>
								</li>
								<li className={styles.dropdown_menu_item}>
									<Link className={styles.dropdown_menu_link} to='/support'>Support</Link>
								</li>
								<li className={styles.dropdown_menu_item}>
									<Link className={styles.dropdown_menu_link} to='/profile/wishlist'>Sevimlarim</Link>
								</li>
							</>
						)
				}

			</ul>
		</div>
	);
}