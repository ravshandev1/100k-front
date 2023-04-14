import React from 'react';
import styles from './FlowProduct.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";

const FlowProduct = ({name, flow_name, flow_link, delete_flow, flow_id}) => {

	return (
		<div className={styles.card}>
			<div className={styles.card_header}>
				<h3>{flow_name}</h3>
				<FontAwesomeIcon onClick={() => delete_flow(flow_id)} icon={faTrash}/>
			</div>
			<div className={styles.card_body}>
				<p className={styles.card_name}>
					{name}
				</p>
				<div className={styles.card_link}>
					{flow_link}
				</div>
			</div>
			<hr/>
			<div className={styles.card_footer}>
				<Button>
					Nusxa kochirish
				</Button>
			</div>
		</div>
	);
};

export default FlowProduct;