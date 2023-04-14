import React, {useEffect, useState} from 'react';
import styles from './Login.module.scss'
import InputMain from "../../ui/input/InputMain";
import Button from "../../ui/button/Button";
import InputPassword from "../../ui/input/InputPassword";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../store/user";
import {useNavigate} from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch()
	const {user, error} = useSelector(state => state.user)
	const navigate = useNavigate()
	const [phoneNumber, setPhoneNumber] = useState('+998')
	const [password, setPassword] = useState('')
	const {isAuth} = user

	const register = (e) => {
		e.preventDefault()
		const user = {
			'phone': phoneNumber.substr(1),
			'password': password
		}
		dispatch(login({sign: user}))
	}

	useEffect(() => {
		isAuth && navigate('/profile')
	}, [isAuth])

	return (
		<div className={styles.login}>
			<h1>Login</h1>
			<form onSubmit={register} className={styles.login_form}>
				<InputMain
					type='tel'
					placeholder='Telefon raqamingizni tering'
					className={`${styles.login_form_input} ${error && styles.login_form_input__err}`}
					value={phoneNumber}
					err={error}
					onChange={e => setPhoneNumber(e.target.value)}
				/>
				<InputPassword
					placeholder='parolingizni tering'
					className={`${styles.login_form_input} ${error && styles.login_form_input__err}`}
					value={password}
					err={error}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button width='md' className={styles.login_form_btn}>Kirish</Button>
			</form>
			<p className={styles.login_register}>Akkauntingiz mavjut bo'lmasa <span
				onClick={() => navigate('/registration')}>registrasiyadan</span> oting</p>
		</div>
	);
};

export default Login;