import React, {useEffect, useState} from 'react';
import Container from "../../ui/container/Container";
import GridProducts from "../../ui/gridProducts/GridProducts";
import FlowProduct from "../../ui/flowProduct/FlowProduct";
import styles from './Flow.module.scss'
import DashboardNavbar from "../../section/dashboardNavbar/dashboardNavbar";
import {useSelector} from "react-redux";
import {BASE_URL} from "../../../helper/api";

const Flow = () => {
	const [flow, setFlow] = useState(null)
	const {user} = useSelector(state => state.user)
	const [pending, setPending] = useState(false)
	const {access} = user

	const getFlow = async () => {
		try {
			const res = await fetch(`${BASE_URL}/orders/stream/`, {
				method: 'GET',
				headers: {
					'accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${access}`
				}
			})
			if (!res.ok) throw Error(res.statusText)
			const data = await res.json()
			setFlow(data)
			setPending(true)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getFlow()
	}, [])

	const flowDelete = async (flow_id) => {
		try {
			const res = await fetch(`${BASE_URL}/orders/stream/${flow_id}/`, {
				method: 'DELETE',
				headers: {
					'accept': 'application/json',
					'Content-Type': 'application/json',
				}
			})
			if (!res.ok) throw Error(res.statusText)
		} catch (e) {
			console.log(e)
		} finally {
			getFlow()
		}
	}


	return (
		<>
			<DashboardNavbar/>
			<div className={styles.flow}>
				<Container>
					<div className={styles.flow_body}>
						<h1>Mening havolarim</h1>
						<div className={styles.flow_products_container}>
							{pending ?
								flow.length > 0 ? (
									flow.map(item => (
											<FlowProduct
												key={item.id}
												name={item.product}
												flow_link={`${window.location.href}/${item.product_id}/stream=${item.id}`}
												flow_name={item.name}
												flow_id={item.id}
												delete_flow={flowDelete}
											/>
										)
									)
								) : <p>sizda oqimlar yaratilmagan</p>
								: <h3>Loading...</h3>}
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Flow;