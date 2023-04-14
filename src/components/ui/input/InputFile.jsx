import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import styles from './InputFile.module.scss'

const InputFile = (className, onChange, value, setFile) => {


	// useEffect(() => {
	// 	console.log(image);
	// }, [image])

	return (
		<>
			<label htmlFor='file' className={`${styles.label} ${className}`}>
				<FontAwesomeIcon icon={faImage}/> rasmingiz
			</label>
			<input type="file" id='file' onChange={e => setFile(e.target.files[0])} value={value} className={styles.input}/>
		</>
	);
};

export default InputFile;