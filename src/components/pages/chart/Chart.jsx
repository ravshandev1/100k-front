import React, {useEffect, useState} from 'react';
import Container from "../../ui/container/Container";
import styles from './Chart.module.scss'
import DashboardNavbar from "../../section/dashboardNavbar/dashboardNavbar";
import {useSelector} from "react-redux";

const Chart = () => {
	const [flow, setFlow] = useState(null)
	const {user} = useSelector(state => state.user)
	const [pending, setPending] = useState(false)
	const {access} = user

	const getChart = async () => {
		try {
			const res = await fetch(`https://malefashion.pythonanywhere.com/api/v1/orders/statistics/`, {
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
		getChart()
	}, [])

	return (
		<>
			<DashboardNavbar/>
			<div className={styles.chart}>
				<Container>
					<div className={styles.chart_body}>
						<h1>Statistika</h1>
						<div className={styles.chart_table_container}>
							{pending ?
								flow.length > 0 ? (
									<table>
										<thead>
										<tr>
											<th>Oqim</th>
											<th>Tashrif</th>
											<th>Yangi</th>
											<th>Muammo</th>
											<th>Yetkazimoqda</th>
											<th>Yetkazip berildi</th>
											<th>Qayta qong'itoq</th>
											<th>spam</th>
											<th>Qaytib keldi</th>
										</tr>
										</thead>
										<tbody>
										{flow.map(item => (
											<tr key={item.id}>
												<td>
													{item.name}
												</td>
												<td>{item.views}</td>
												<td>{item.new}</td>
												<td>{item.rejected}</td>
												<td>{item.delivery}</td>
												<td>{item.delivered}</td>
												<td>{item.call_back}</td>
												<td>{item.spam}</td>
												<td>0</td>
											</tr>
										))}
										</tbody>
									</table>) : <p>sizda oqimlar yaratilmagan</p>
								: <h3>Loading...</h3>}
						</div>
					</div>
				</Container>

			</div>
		</>
	);
};

export default Chart;