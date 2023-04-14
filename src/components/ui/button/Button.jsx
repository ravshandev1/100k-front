import React from 'react';
import styles from "./Button.module.scss"

const Button = ({children, width, onClick, className, type}) => {
	return (
		<button onClick={onClick}
						className={`
						${styles.btn}
					  ${width === 'max' && styles.btn_max}
						${width === 'md' && styles.btn_md}
						${width === 'lg' && styles.btn_lg}
						${type === 'select' && styles.select}
					  ${className}
					  `}>
			{children}
		</button>
	);
};

export default Button;