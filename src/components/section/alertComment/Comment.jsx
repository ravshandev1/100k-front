import React, {useEffect, useState} from 'react';
import styles from "./Comment.module.scss";
import {closeAlert} from "../../../store/alert";
import Button from "../../ui/button/Button";
import {useDispatch} from "react-redux";
import InputMain from "../../ui/input/InputMain";
import TextArea from "../../ui/textArea/TextArea";
import Rate from "../rate/Rate";

const Comment = () => {
	const dispatch = useDispatch()

	return (
		<div className={styles.window} >
			<div className={styles.window_outline} onClick={() => dispatch(closeAlert())}></div>
			<div className={styles.window_alert}>
				<h1 className={styles.window_alert_title}>Izoh qoldiring</h1>
				<InputMain className={styles.window_alert_input} placeholder='ismingizmi kiriting'/>
				<TextArea placeholder='izoh qoldiring'/>
				<Rate className={styles.window_alert_rate}/>
				<Button width='lg' onClick={() => dispatch(closeAlert())} className={styles.window_alert_btn}>Izohni jonatish</Button>
			</div>
		</div>
	);
};



export default Comment;