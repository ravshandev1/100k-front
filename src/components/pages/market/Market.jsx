import React, {useEffect, useState} from 'react';
import Container from "../../ui/container/Container";
import GridProducts from "../../ui/gridProducts/GridProducts";
import DashboardProduct from "../../ui/dashboardPropduct/DashboardProduct";
import styles from './Market.module.scss'
import DashboardNavbar from "../../section/dashboardNavbar/dashboardNavbar";
import {BASE_URL} from "../../../helper/api";
import {useSelector} from "react-redux";

const Market = () => {
	const [products, setProducts] = useState(null)
	const [pending, setPending] = useState(false)
	const {user} = useSelector(state => state.user)
	const {access} = user

	const getAllAdminProducts = async () => {
		try {
			const res = await fetch(`${BASE_URL}/products/admin/`, {
				headers: {
					accept: 'application/json',
					'Content-type': 'application/json',
					'Authorization': `Bearer ${access}`,
				}
			})
			if (!res.ok) throw Error(res.statusText)
			const data = await res.json()
			setProducts(data)
			setPending(true)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getAllAdminProducts()
	}, [])

	return (
		<>
			<DashboardNavbar/>
			<div className={styles.market}>
				<Container>
					<div className={styles.market_body}>
						<h1>Hozirda sotuvda bor mahsulotlar</h1>
						<GridProducts className={styles.market_products_container}>
							{pending ? products.map(_product => (
									<DashboardProduct
										key={_product.id}
										id={_product.id}
										name={_product?.name}
										user_name={_product.shop?.name}
										image={_product.product_image[0]?.get_image}
										admin_price={_product.for_admin}
										price={_product.price}
									/>
								)) :
								<h3>Loading...</h3>
							}
						</GridProducts>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Market;