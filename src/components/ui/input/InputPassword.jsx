import React, {useState} from 'react';
import styles from "./InputPassword.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const InputPassword = (props) => {
	const {className, placeholder, value, err, onChange} = props
	const [showPassword, setShowPassword] = useState(false)

	const show = () => {
		setShowPassword(!showPassword)
	}

	return (
		<div className={`${className} ${styles.input_container}`}>
			<input
				type={showPassword ? 'text' : 'password'}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={`${styles.input_container_input} ${err && styles.input_container_input__err}`}
			/>
			<span className={styles.input_container_btn} onClick={show}>
				<FontAwesomeIcon className={styles.input_container_btn_icon} icon={faEye}/>
			</span>
		</div>
	);
};

export default InputPassword;