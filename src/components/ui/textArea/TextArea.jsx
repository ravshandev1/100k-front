import React from 'react';
import styles from './TextArea.module.scss'

const TextArea = ({className, placeholder, onChange, value}) => {
	return (
		<textarea className={`${styles.text_area} ${className}`} placeholder={placeholder} onChange={onChange}
							value={value}></textarea>
	);
};

export default TextArea;