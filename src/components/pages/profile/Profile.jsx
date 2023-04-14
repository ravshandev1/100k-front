import React, {useEffect, useState} from 'react';
import styles from './Porfile.module.scss'
import Container from "../../ui/container/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faBagShopping,
	faHeadset,
	faHeart,
	faTrash,
	faUnlockKeyhole,
	faUser,
	faUserPen
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import UserListSkeleton from "../../skeleton/userListSkeleton/userListSkeleton";
import {useNavigate} from "react-router-dom";
import {startLoading, stopLoading} from "../../../store/isLoading";
import ModalProfileDelete from "../../modal/modalProfileDelete/ModalProfileDelete";
import {getUserData} from "../../../store/user";
import {BASE_URL} from "../../../helper/api";

const Profile = () => {
	const {user} = useSelector(state => state.user)
	const [user_profile, setUserProfile] = useState(null)
	const [pending, setPending] = useState(false)
	const [activeModal, setModalActive] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {user_id} = user

	const getProfile = async () => {
		dispatch(startLoading())
		try {
			const res = await fetch(`${BASE_URL}/users/${user_id}/`, {
				method: 'GET',
			})
			if (!res.ok) {
				throw new Error(res.statusText)
			}
			const data = await res.json()
			setUserProfile(data)
		} catch (e) {
			console.log(e)
		} finally {
			dispatch(stopLoading())
		}
	}

	useEffect(() => {
		getProfile()
	}, [user_id])


	useEffect(() => {
		!user.isAuth && navigate('/login')
		user_profile && setPending(true)
	}, [user_profile])

	return (
		<div className={styles.profile}>
			<ModalProfileDelete active={activeModal} setActive={setModalActive}/>
			<Container size='md'>
				{!pending ?
					<UserListSkeleton/> :
					<div className={styles.profile_list}>
						<div className={styles.profile_list_header}>
							<div className={styles.profile_list_img}>
							{
								user_profile.image ? 
								<img src={user_profile?.image} alt="" />
								:
								<FontAwesomeIcon icon={faUser}/>
							}
							</div>
							<div className={styles.profile_list_user}>
								<h4
									className={styles.profile_list_user_number}>{pending ? '+' + user_profile.phone : 'telefon raqamingiz'}
								</h4>
								<button className={styles.profile_list_user_settings}>Sozlamalarga o'tish</button>
							</div>
						</div>
						<div className={styles.profile_list_footer}>
							<Button className={styles.profile_list_footer_btn} onClick={() => navigate('/profile/orders')}
											width='max'>
								<FontAwesomeIcon icon={faBagShopping}/> Mening buyurtmalarim
							</Button>
							<Button className={styles.profile_list_footer_btn} onClick={() => navigate('/profile/wishlist')}
											width='max'>
								<FontAwesomeIcon icon={faHeart}/> Mening sevimlarim
							</Button>
							<Button className={styles.profile_list_footer_btn} onClick={() => navigate('/support')} width='max'>
								<FontAwesomeIcon icon={faHeadset}/> Mijozlarni qo'llab-quvvatlash
							</Button>
							<Button className={styles.profile_list_footer_btn} onClick={() => navigate(`/profile/edit-profile/${user_profile.id}`)}
											width='max'>
								<FontAwesomeIcon icon={faUserPen}/> Profilni sozlash
							</Button>
							<Button className={styles.profile_list_footer_btn} onClick={() => navigate('/profile/change-password')}
											width='max'>
								<FontAwesomeIcon icon={faUnlockKeyhole}/> Parolni ozgartirish
							</Button>
							<Button width='max' onClick={() => setModalActive(true)}>
								<FontAwesomeIcon icon={faTrash}/> Profilni ochirish
							</Button>
						</div>
					</div>
				}
			</Container>
		</div>
	);
};

export default Profile;