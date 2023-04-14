import React, {useEffect, useState} from 'react'
import Container from '../../ui/container/Container'
import Category from '../../ui/category/Category'
import Comfort from '../../section/comfort/Comfort'
import CardProduct from "../../ui/cardProduct/CardProduct";

import {useDispatch, useSelector} from "react-redux";
import {customLoading, startLoading, stopLoading} from "../../../store/isLoading";

import {getCategory} from "../../../store/category";
import styles from './Home.module.scss'
import CategorySkeleton from "../../skeleton/categorySkeleton/CategorySkeleton";
import {BASE_URL} from "../../../helper/api";
import ProductSkeleton from "../../skeleton/productSkeleton/ProductSkeleton";
import GridProducts from "../../ui/gridProducts/GridProducts";
import {useNavigate} from "react-router-dom";


function Home(props) {
	const {items, loading} = useSelector(state => state.category)
	const [popularList, setPopularList] = useState(null)
	const [forAllProducts, setForAllProducts] = useState(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	async function PopularProducts() {
		dispatch(startLoading())
		try {
			const res = await fetch(
				`${BASE_URL}/api/v1/products/`,
				{
					method: 'GET',
					headers: {
						accept: 'application/json',
						'X-CSRFToken':
							'jZiSjzpvmjRgaewfYPScA23OZOoftoYeWKTEUwgHKOl7ATHXuuqy2oQPxRrvL59F'
					}
				}
			)
			if (!res.ok) {
				throw new Error(res.statusText)
			}
			const data = await res.json()
			setPopularList(data.slice(0, 8))
		} catch (e) {
			console.error(e)
		} finally {
			dispatch(stopLoading())
		}
	}

	const for_all = async () => {
		dispatch(startLoading())
		try {
			const res = await fetch(`${BASE_URL}products/ommabop/`, {
				method: 'GET',
				headers: {
					'accept': ' application/json',
					'X-CSRFToken': 'Jra023Tuxp9SrjvTORxMi8maq4AS7Wf7i6N2kRLqyAjDa2wShnXiRfcyy5yNh2zn'
				}
			})
			if (!res.ok) {
				throw new Error(res.statusText)
			}
			const data = await res.json()
			setForAllProducts(data)
		} catch (e) {
			console.log(e)
		} finally {
			dispatch(stopLoading())
		}
	}

	useEffect(() => {
		dispatch(getCategory())
	}, [])

	useEffect(() => {
		dispatch(customLoading(loading))
	}, [loading])

	useEffect(() => {
		PopularProducts()
	}, [])

	useEffect(() => {
		for_all()
	}, [])

	function numberWithCommas(x) {
		return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<div className={styles.home}>
			<div className={styles.home_category}>
				<Container>
					<div className={styles.home_category_menu}>
						{loading ? [...new Array(6)].map((item, index) => (<CategorySkeleton key={index}/>)
						) : items && items.map((item) => (
							<Category key={item.id} src={`/category/${item.name}`} img={item.get_image} description={item.name} count={item.products_count}/>
						))}
					</div>
				</Container>
			</div>
			<div className={styles.home_popular}>
				<Container>
					<div className={styles.home_product_info}>
						<h1>Yangi kelgan mahsulotlar</h1>
						<h3 onClick={() => navigate('/category')}>Barchasini korish</h3>
					</div>
					<GridProducts>
						{loading ? [...new Array(8)].map((item, index) => (<ProductSkeleton key={index}/>)
						) : popularList && popularList.map(item => (
							<CardProduct
								key={item.id}
								src={`/product/${item.id}`}
								img={item.product_image[0]?.get_image}
								name={item?.name}
								price={numberWithCommas(item?.price.toString())}
								widthMax={true}
							/>
						))}
					</GridProducts>
				</Container>
			</div>
			<div className={styles.home_for_all}>
				<Container>
					<div className={styles.home_product_info}>
						<h1>Ommabop mahsulotlar</h1>
						<h3  onClick={() => navigate('/category')}>Barchasini korish</h3>
					</div>
					<GridProducts>
						{loading ? [...new Array(8)].map((item, index) => (<ProductSkeleton key={index}/>)
						) : forAllProducts && forAllProducts.map(item => (
							<CardProduct
								key={item.id}
								src={`/product/${item.id}`}
								img={item.product_image[0]?.get_image}
								name={item?.name}
								price={numberWithCommas(item?.price.toString())}
								widthMax={true}
							/>
						))}
					</GridProducts>
				</Container>
			</div>
			<Comfort/>
		</div>
	)
}

export default Home
