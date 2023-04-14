import React, {useState} from 'react'
import Button from '../../ui/button/Button'
import styles from './ModalFlowCreate.module.scss'
import InputMain from "../../ui/input/InputMain";
import {useSelector} from "react-redux";
import {BASE_URL} from "../../../helper/api";

const ModalFlowCreate = (props) => {
	const {product_id, active, setActive} = props
	const {user} = useSelector(state => state.user)
	const [name, setName] = useState('')
	const {access} = user

	const createFlow = async () => {
		try {
			const res = await fetch(`${BASE_URL}/api/v1/orders/stream/`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${access}`,
				},
				body: JSON.stringify({
					"name": name,
					"product": product_id
				})
			})
			if (!res.ok) throw Error(res.statusText)
			setActive(false)
		} catch (e) {
			console.log(e)
			setActive(true)
		}
	}

	const submitData = (e) => {
		e.preventDefault()
		createFlow()
	}

	return (
		<div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
			<div className={styles.modal_content} onClick={e => e.stopPropagation()}>
				<div className={styles.modal_content_header}>
					<div className={styles.modal_title}>Oqim yarating!</div>
				</div>
				<form className={styles.modal_content_body} onSubmit={submitData}>
					<InputMain placeholder='oqim nomini yozing' value={name} onChange={e => setName(e.target.value)}/>
				</form>
				<div className={styles.modal_content_footer}>
					<Button className={styles.modal_btn} onClick={createFlow}>
						Tayyor !
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ModalFlowCreate
