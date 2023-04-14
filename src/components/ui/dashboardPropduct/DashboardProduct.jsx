import React, {useState} from 'react';
import styles from './DashboardProduct.module.scss'
import Button from "../button/Button";
import ModalFlowCreate from "../../modal/modalFlowCrate/ModalFlowCreate";

const DashboardProduct = (props) => {
	const {name, image, price, admin_price, user_name, id} = props
	const [modalActive, setModalActive] = useState(false)

	return (
		<>
			<ModalFlowCreate setActive={setModalActive} active={modalActive} product_id={id}/>
			<div className={styles.card}>
				<div className={styles.card_header}>
					<div className={styles.card_header_img}>
						<img src={image} alt={name}/>
					</div>
				</div>
				<div className={styles.card_body}>
					<div className={styles.card_body_about}>
						<h4>{name}</h4>
						<p>{price} so'm</p>
					</div>
					<div className={styles.card_body_pay}>
						Tolov Admin:
						<span>
					{admin_price} so'm
				</span>

					</div>
					<div className={styles.card_body_caller}>
						Sotuvchi:
						<span>{user_name}</span>
					</div>
					<div className={styles.card_body_delivery}>
						Bupul yetkazish:
						<span>Bor</span>
					</div>
					<hr/>
					<Button className={styles.card_body_btn}  onClick={() => setModalActive(true)}>
						Oqim yaratish
					</Button>
				</div>
			</div></>
	);
};

export default DashboardProduct;