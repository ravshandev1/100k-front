import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DetailSkeleton from "../../skeleton/detailSkeleton/DetailSkeleton";
import styles from "../productDetail/ProductDetail.module.scss";
import ModalDetailOrder from "../../modal/modalDetailOrder/ModalDetailOrder";
import Container from "../../ui/container/Container";
import Star from "../../ui/star/Star";
import Carousel from "../../section/carousel/Carousel";
import User from "../../ui/user/User";
import InputMain from "../../ui/input/InputMain";
import Select from "../../ui/select/Select";
import Button from "../../ui/button/Button";
import ButtonCart from "../../ui/buttonCart/ButtonCart";
import BasicTabs from "../navTabs/NavTabs";
import UserRate from "../../ui/userRate/UserRate";

const ProductAdminDetail = () => {

	// const {product_detail} = useParams()
	const dispatch = useDispatch()
	const {product, pending} = useSelector(state => state.detail)
	const [starCounter] = useState([false, false, false, false, false])
	const [error, setError] = useState(false)
	const [name, setName] = useState('')
	const [phoneNum, setPhoneNum] = useState('+998')
	const [comment, setComment] = useState('')
	const [town, setTown] = useState('')
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			{!pending ? (
				<DetailSkeleton/>
			) : (
				<div className={styles.detail}>
					<ModalDetailOrder
						active={showModal}
						setActive={setShowModal}
						price={product.price}
						name={product.name}
					/>
					<Container size='md'>
						<div className={styles.detail_menu}>
							<div className={styles.detail_about}>
								<h1 className={styles.detail_about_name}>{product.name}</h1>
								<div className={styles.detail_about_review}>
									{starCounter.map((item, index) => {
										index < product.rate ? (item = true) : (item = false)
										return <Star active={item} key={index}/>
									})}
								</div>
							</div>
							<div className={styles.detail_cards}>
								<div className={styles.detail_cards__left_side}>
									<Carousel>
										{product.product_video?.map((_video, index) => (
											<div className={styles.carousel_img} key={index}>
												<video controls muted src={_video.video}/>
											</div>
										))}
										{product.product_image?.map((_image, index) => (
											<div className={styles.carousel_img} key={index}>
												<img src={_image.image} alt='image'/>
											</div>
										))}
									</Carousel>
									<User
										className={styles.detail_user}
										img={product?.shop?.image}
										name={product?.shop?.name}
									/>
								</div>
								<div className={styles.detail_cards__right_side}>
									<div className={styles.detail_cards_header}>
										<h1 className={styles.detail_cards_title}>
											Buyurtma berish
										</h1>
										<h3 className={styles.detail_cards_price}>
											Mahsulot narxi: <span>{product.price}</span> so'm
										</h3>
									</div>
									<form className={styles.detail_cards_body}>
										<InputMain
											value={name}
											onChange={e => setName(e.target.value)}
											className={`${styles.detail_cards_input} ${
												error && styles.detail_cards_input_err
											}`}
											type='text'
											placeholder='Ismingiz'
										/>
										<InputMain
											value={phoneNum}
											onChange={e => setPhoneNum(e.target.value)}
											className={`${styles.detail_cards_input} 
                      ${error && styles.detail_cards_input_err}`}
											type='tel'
											placeholder='Raqamingiz'
										/>
										<InputMain
											value={comment}
											onChange={e => setComment(e.target.value)}
											className={`${styles.detail_cards_input} 
                      ${error && styles.detail_cards_input_err}`}
											type='text'
											placeholder='Qoshimcha izoh '
										/>
										<Select
											className={`${styles.detail_cards_input} 
										 ${error && styles.detail_cards_input_err}`}
											value={town}
											onChange={e => setTown(e.target.value)}
										/>
									</form>
									<div className={styles.detail_cards_footer}>
										<Button
											width='max'
											// onClick={() => handleSubmit()}
											className={styles.detail_cards_footer_btn}
										>
											Buyurtma berish
										</Button>
										<ButtonCart/>
									</div>
								</div>
							</div>
							<BasicTabs
								tab_1={product?.more_information}
								tab_2={
									product?.product_rate.length ? (
										product?.product_rate.map((item, index) => (
											<UserRate
												key={index}
												name={item.name}
												description={item.comment}
												star={item.rate}
											/>
										))
									) : (
										<h4>no comments</h4>
									)
								}
							/>
						</div>
					</Container>
				</div>
			)}
		</>
	);
};

export default ProductAdminDetail;