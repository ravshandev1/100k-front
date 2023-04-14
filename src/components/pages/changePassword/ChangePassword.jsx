import React, {useEffect, useState} from 'react';
import InputPassword from "../../ui/input/InputPassword";
import Button from "../../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {changePassword} from "../../../store/user";
import styles from "./ChangePassword.module.scss";
import {useNavigate} from "react-router-dom";

const ChangePassword = () => {
	const {user, change_password} = useSelector(state => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const {access} = user

	const onSubmit = (e) => {
		e.preventDefault()
		const user = {
			old_password: oldPassword,
			password: newPassword,
			password2: confirmPassword
		}
		dispatch(changePassword({token: access, change_form: user}))
	}

	useEffect(() => {
		change_password.status && navigate('/profile')
	}, [change_password])

	return (
		<div className={styles.change_password}>
			<h1>Parolni ogartirish</h1>
			<form onSubmit={onSubmit} className={styles.change_password_form}>
				<InputPassword
					placeholder='eski parolingizni tering'
					className={`${styles.change_password_form_input} ${change_password.error && styles.change_password_form_input__err}`}
					value={oldPassword}
					err={change_password.error}
					onChange={e => setOldPassword(e.target.value)}
				/>
				<InputPassword
					placeholder='parolingizni tering'
					className={`${styles.change_password_form_input} ${change_password.error && styles.change_password_form_input__err}`}
					value={newPassword}
					err={change_password.error}
					onChange={e => setNewPassword(e.target.value)}
				/>
				<InputPassword
					placeholder='yangi parolni qaytaring'
					className={`${styles.change_password_form_input} ${change_password.error && styles.change_password_form_input__err}`}
					value={confirmPassword}
					err={change_password.error}
					onChange={e => setConfirmPassword(e.target.value)}
				/>
				<Button width='md' className={styles.change_password_form_btn}>Kirish</Button>
			</form>

		</div>
	);
};

export default ChangePassword;