import React, {useState} from 'react';
import styles from './ModalDetailComment.module.scss'
import InputMain from "../../ui/input/InputMain";
import TextArea from "../../ui/textArea/TextArea";
import Rate from "../../section/rate/Rate";
import Button from "../../ui/button/Button";
import {useParams} from "react-router-dom";
import {BASE_URL} from "../../../helper/api";
import {useDispatch} from "react-redux";
import {getProductDetail} from "../../../store/detail";

const ModalDetailComment = ({active, setActive}) => {
	const {product_detail} = useParams()
	const [name, setName] = useState('')
	const [text, setText] = useState('')
	const [rating, setRating] = useState()
	const dispatch = useDispatch()

	const feedBack = async () => {
		try {
			const res = await fetch(`${BASE_URL}/products/rate/`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"name": name,
					"product": product_detail,
					"rate": rating,
					"comment": text
				})
			})
			if (!res.ok) throw new Error(res.statusText)
			const data = res.json()
			return data
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(getProductDetail(product_detail))
		}
	}

	const onSubmit = () => {
		feedBack()
		setActive(false)
		setName('')
		setText('')
	}

	return (
		<div className={`${styles.window} ${active && styles.active}`} onClick={() => setActive(false)}>
			<div className={styles.window_alert} onClick={e => e.stopPropagation()}>
				<h1 className={styles.window_alert_title}>Izoh qoldiring</h1>
				<InputMain className={styles.window_alert_input} onChange={e => setName(e.target.value)} value={name}
									 placeholder='ismingizmi kiriting'/>
				<TextArea placeholder='izoh qoldiring' onChange={e => setText(e.target.value)} value={text}/>
				<Rate className={styles.window_alert_rate} setRate={setRating} rate={rating}/>
				<Button width='lg' onClick={onSubmit} className={styles.window_alert_btn}>
					Izohni jonatish
				</Button>
			</div>
		</div>
	);
};

export default ModalDetailComment;