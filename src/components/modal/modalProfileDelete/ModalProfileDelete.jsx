import React from 'react'
import styles from './ModalProfileDelete.module.scss'
import Button from '../../ui/button/Button'
import {useDispatch, useSelector} from "react-redux";
import {deleteProfile} from "../../../store/user";
import {useNavigate} from "react-router-dom";

const ModalProfileDelete = ({active, setActive}) => {
	const {user_id} = useSelector(state => state.user)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const deleteUser = () => {
		dispatch(deleteProfile(user_id))
		navigate('/')
	}

	return (
		<div className={active ? styles.modal_active : styles.modal} onClick={() => setActive(false)}>
			<div className={styles.modal_content} onClick={e => e.stopPropagation()}>
				<p>profilingizni ochirishni tastiqlaysizmi?</p>
				<div className={styles.modal_content_footer}>
					<Button className={styles.modal_content_footer_btn} onClick={() => setActive(false)} width='md'>ortga</Button>
					<Button className={styles.modal_content_footer_btn} onClick={deleteUser} width='md'>ochirish</Button>
				</div>
			</div>
		</div>
	)
}

export default ModalProfileDelete
