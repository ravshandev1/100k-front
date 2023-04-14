import React, {useEffect, useState} from 'react';
import Button from "../../ui/button/Button";
import styles from './CategoryList.module.scss'
import {startLoading, stopLoading} from "../../../store/isLoading";
import {useDispatch} from "react-redux";

const CategoryList = ({sort}) => {

	const [categoriesList, setCategoriesList] = useState(null)
	const dispatch = useDispatch()

	const categories = async () => {
		try {
			const res = await fetch(`https://malefashion.pythonanywhere.com/api/v1/products/category/`, {
				method: 'GET'
			})

			if (!res.ok) {
				throw new Error(res.statusText)
			}
			const data = await res.json()
			setCategoriesList(data)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		categories()
	}, [])


	return (
		<div className={styles.category_list}>
			{categoriesList && categoriesList.map(item => (
				<Button
					onClick={sort}
					className={styles.category_list_btn}
					key={item.id} width='md'>
					{item.name}
				</Button>
			))}
		</div>
	);
};

export default CategoryList;