import React, {useEffect, useState} from 'react';
import InputMain from "../../ui/input/InputMain";
import Button from "../../ui/button/Button";
import styles from './Register.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../../../store/user";
import {useNavigate} from "react-router-dom";
import InputPassword from "../../ui/input/InputPassword";

const Register = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [mobilePhone, setPhone] = useState('+998')
	const [password, setPassword] = useState('')
	const [checkPassword, setCheckPassword] = useState('')
	const {error, user} = useSelector(state => state.user)
	const {register} = user

	const handleSubmit = (e) => {
		e.preventDefault()
		const user = {
			"phone": mobilePhone.substr(1),
			"password": password,
			"password2": checkPassword
		}
		dispatch(registration({register: user}))
	}

	useEffect(() => {
		register && navigate('/login')
	}, [register])

	return (
		<div className={styles.register}>
			<h1 className={styles.register_title}>Registraciyadan otinig</h1>
			<form onSubmit={handleSubmit} className={styles.register_form}>
				<InputMain
					placeholder='telefon raqamingizni tering'
					err={error}
					className={`${styles.register_form_input} ${error && styles.register_form_input__error}`}
					onChange={e => setPhone(e.target.value)}
					value={mobilePhone}
				/>
				<InputPassword
					placeholder='parolni oylap toping'
					err={error}
					className={`${styles.register_form_input} ${error && styles.register_form_input__error}`}
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
				<InputPassword
					placeholder='parolni tastiqlang'
					err={error}
					className={`${styles.register_form_input} ${error && styles.register_form_input__error}`}
					onChange={e => setCheckPassword(e.target.value)}
					value={checkPassword}
				/>
				<Button className={styles.register_form_btn}>registraciyadan otish</Button>
			</form>
		</div>
	);
};

export default Register;