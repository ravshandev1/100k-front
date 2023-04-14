import React, {useEffect, useState} from 'react';
import Container from "../../ui/container/Container";
import GridProducts from "../../ui/gridProducts/GridProducts";
import CardProduct from "../../ui/cardProduct/CardProduct";
import Button from "../../ui/button/Button";
import {startLoading, stopLoading} from "../../../store/isLoading";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './AllProducts.module.scss'
import {BASE_URL} from "../../../helper/api";

const AllProducts = () => {
	const [products, setProducts] = useState([])
	const [productsSort, setProductsSort] = useState(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const categories = async () => {
		try {
			const res = await fetch(`${BASE_URL}/products/category/`, {
				method: 'GET'
			})

			if (!res.ok) {
				throw new Error(res.statusText)
			}
			const data = await res.json()
			setProductsSort(data)
		} catch (e) {
			console.log(e)
		}
	}
	const all_products = async () => {
		dispatch(startLoading())
		try {
			const res = await fetch(`${BASE_URL}/products/`, {
				method: 'GET'
			})
			if (!res.ok) {
				throw new Error(res.statusText)
			}
			const data = await res.json()
			setProducts(data)
		} catch (e) {
			console.log(e)
		} finally {
			dispatch(stopLoading())
		}
	}

	useEffect(() => {
		categories()
	}, [])

	useEffect(() => {
		all_products()
	}, [])

	const sort_products = async (name) => {
		dispatch(startLoading())
		try {
			const res = await fetch(
				`${BASE_URL}/products/?cat=${name}`,
				{
					method: 'GET',
					headers: {
						accept: 'application/json'
					}
				})
			if (!res.ok) {
				throw new Error(res.statusText)
			}
			const data = await res.json()
			setProducts(data)
		} catch (e) {
			console.error(e)
		} finally {
			dispatch(stopLoading())
		}
	}


	return (
		<div className={styles.all_products}>
			<Container>
				<div className={styles.all_products_sort}>
					<Button width='md' type='select' className={styles.all_products_sort_btn}
									onClick={() => all_products()}>Barchasi</Button>
					{productsSort && productsSort.map(item => (
						<Button width='md' className={styles.all_products_sort_btn} type='select' key={item.id}
										onClick={() => sort_products(item.name)}>{item.name}</Button>
					))}
				</div>
				{products.length > 0 ?
					<GridProducts>
						{products.map(item => (
							<CardProduct
								key={item.id}
								src={`/product/${item.id}`}
								name={item.name}
								widthMax={true}
								price={item.price}
								img={item.product_image[0].get_image}/>
						))
						}
					</GridProducts>
					:
					<div className={styles.all_products_service}>
						<h2>Bu categoryda productlar hali qoshilmagan</h2>
						<p>Qandaydir nosozlik yoki Sovol tugulgan bolsa <span onClick={() => navigate('/support')}>Admin</span>
						</p>
					</div>
				}


			</Container>
		</div>
	);
};

export default AllProducts;