import React, {useEffect, useState} from 'react';
import Button from "../../ui/button/Button";
import styles from './CategoryList.module.scss'
import {startLoading, stopLoading} from "../../../store/isLoading";
import {useDispatch} from "react-redux";
import {BASE_URL} from "../../../helper/api";

const CategoryList = ({sort}) => {

	const [categoriesList, setCategoriesList] = useState(null)
	const dispatch = useDispatch()

	const categories = async () => {
		try {
			const res = await fetch(`${BASE_URL}/products/category/`, {
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