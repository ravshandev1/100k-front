import React from "react"
import styles from './userListSkeleton.module.scss'

const userListSkeleton = (props) => (
	<div className={styles.profile_list}>
		<div className={styles.profile_list_header}>
			<div className={styles.profile_list_img}>
			</div>
			<div className={styles.profile_list_user}>
				<div className={styles.profile_list_user_name}>

				</div>
				<div className={styles.profile_list_user_number}></div>
			</div>
		</div>
		<div className={styles.profile_list_address}>
			<div className={styles.profile_list_address_town}>

			</div>
			<div className={styles.profile_list_address_street}>

			</div>
		</div>
		<div className={styles.profile_list_footer}>
			<div className={styles.profile_list_footer_btn}></div>
			<div className={styles.profile_list_footer_btn}></div>
			<div className={styles.profile_list_footer_btn}></div>
			<div className={styles.profile_list_footer_btn}></div>
			<div className={styles.profile_list_footer_btn}></div>
			<div className={styles.profile_list_footer_btn}></div>
		</div>
	</div>
)

export default userListSkeleton

