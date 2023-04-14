import React from 'react';
import styles from './editProfile.module.scss'
import Container from "../../ui/container/Container";

const EditProfile = () => {
	return (
		<div className={styles.edit_profile}>
			<Container size='md'>
				<div >
					<div className={styles.edit_profile_input}></div>
					<div className={styles.edit_profile_input}></div>
					<div className={styles.edit_profile_input}></div>
					<div className={styles.edit_profile_input}></div>
					<div className={styles.edit_profile_input}></div>
					<div className={styles.edit_profile_input}></div>
				</div>
			</Container>
		</div>
	);
};

export default EditProfile;