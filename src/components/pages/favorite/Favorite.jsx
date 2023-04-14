import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../../helper/api";
import {useSelector} from "react-redux";
import Container from "../../ui/container/Container";
import styles from './Favorite.module.scss'
import {startLoading, stopLoading} from "../../../store/isLoading";
import CardProduct from "../../ui/cardProduct/CardProduct";
import GridProducts from "../../ui/gridProducts/GridProducts";
import {useNavigate} from "react-router-dom";

function Favorite(props) {
	const {user} = useSelector(state => state.user)
	const [pending, setPending] = useState(false)
	const [products, setProducts] = useState([])
	const navigate = useNavigate()
	const {access, isAuth} = user

	const wishlist = async () => {
		startLoading()
		try {
			const res = await fetch(`${BASE_URL}/api/v1/products/my-wishlist/`, {
				method: "GET",
				headers: {
					'accept': 'application/json',
					'Content-Type': 'application/json',
					'X-CSRFToken': 'ZTGMlOSMFo9TD1yAS4lKh4ZbqBFIbPPOyyjODCKIGzjEmKzzlALgQbPzyCDDlV94',
					'Authorization': `Bearer ${access}`,
				}
			})
			if (!res.ok) {
				throw Error(res.statusText)
			}
			const data = await res.json()
			setProducts(data)
		} catch (e) {
			console.log(e)
		} finally {
			stopLoading()
		}
	}

	useEffect(() => {
		wishlist()
	}, [access])

	useEffect(() => {
		!isAuth && navigate('/login')
		products && setPending(true)
	}, [])

	return (
		<div className={styles.wishlist}>
			<Container>
				<div className={styles.wishlist_body}>
					<h1>Sevimli Productlarim</h1>
					<GridProducts>
						{pending && products.length > 0 ? products.map((item, index) => (
								<CardProduct
									key={index}
									name={item.name}
									img={item?.product_image[0]?.get_image}
									price={item?.price}
									widthMax={true}
									src={`/profile/wishlist/${item.id}`}
								/>)) :
							<p>Sevimli productlaringiz hali qoshilmagan</p>}
					</GridProducts>
				</div>
			</Container>
		</div>
	);
}

export default Favorite;