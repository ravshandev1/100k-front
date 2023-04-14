import React, {useEffect, useState} from 'react';
import Container from "../../ui/container/Container";
import CardProduct from "../../ui/cardProduct/CardProduct";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {startLoading, stopLoading} from "../../../store/isLoading";
import styles from "./CategoryParams.module.scss"

const CategoryParams = () => {
	const {cat_params} = useParams()
	const [productsList, setProductsList] = useState([])
	const [pending, setPending] = useState(false)
	const dispatch = useDispatch()

	const Products = async (name) => {
		dispatch(startLoading())
		try {
			const res = await fetch(
				`https://malefashion.pythonanywhere.com/api/v1/products/?cat=${name}`,
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
			setProductsList(data)
			console.log(data)
		} catch (e) {
			console.error(e)
		} finally {
			dispatch(stopLoading())
		}
	}

	useEffect(() => {
		Products(cat_params)
	}, [])

	useEffect(() => {
		productsList && setPending(true)
	}, [])

	function numberWithCommas(x) {
		return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<div className={styles.category}>
			<Container>
				<h1 className={styles.category_title}>{cat_params}</h1>
				<div className={styles.category_menu}>
					{pending && productsList.length > 0 ? productsList.map(item => (
							<CardProduct
								key={item?.id}
								src={`/product/${item?.id}`}
								img={item?.product_image[0]?.get_image}
								name={item?.name}
								price={numberWithCommas(item?.price.toString())}
								widthMax={true}
							/>)) :
						<h3>tovarlar hali qoshilmagan</h3>
					}
				</div>
			</Container>
		</div>
	);
};

export default CategoryParams;