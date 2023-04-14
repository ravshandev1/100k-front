import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Container from '../../ui/container/Container'
import Star from '../../ui/star/Star'
import InputMain from '../../ui/input/InputMain'
import Select from '../../ui/select/Select'
import Button from '../../ui/button/Button'
import ButtonCart from '../../ui/buttonCart/ButtonCart'
import User from '../../ui/user/User'
import DetailSkeleton from '../../skeleton/detailSkeleton/DetailSkeleton'
import ModalDetailOrder from '../../modal/modalDetailOrder/ModalDetailOrder'
import UserRate from '../../ui/userRate/UserRate'
import BasicTabs from '../navTabs/NavTabs'
import Carousel from '../../section/carousel/Carousel'

import { getProductDetail } from '../../../store/detail'

import styles from './FlowDetail.module.scss'
import { Typography } from '@mui/material'

const FlowDetail = () => {
  const { stream_id, product_id } = useParams()
  const dispatch = useDispatch()
  const detail_data = useSelector(state => state.detail)
  const [starCounter] = useState([false, false, false, false, false])
  const [error, setError] = useState(false)
  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('+998')
  const [comment, setComment] = useState('')
  const [town, setTown] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(getProductDetail(product_id))
  }, [])

  const Order = async order_data => {
    try {
      const res = await fetch(
        `https://malefashion.pythonanywhere.com/api/v1/orders/create/?${stream_id}`,
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify(order_data)
        }
      )
      if (!res.ok) {
        throw Error(res.statusText)
      }
      setShowModal(true)
    } catch (e) {
      setError(true)
      console.log(e)
    }
  }

  const handleSubmit = () => {
    const order_data = {
      product: detail_data.product.id,
      name: name,
      phone: phoneNum.substr(1),
      note: comment,
      address: town
    }
    Order(order_data)
    setName('')
    setComment('')
    setPhoneNum('')
  }

  return (
    <>
      {detail_data.loading ? (
        <DetailSkeleton />
      ) : (
        <div className={styles.detail}>
          <ModalDetailOrder
            active={showModal}
            setActive={setShowModal}
            price={detail_data.product.price}
            name={detail_data.product.name}
          />
          <Container size='md'>
            <div className={styles.detail_menu}>
              <div className={styles.detail_about}>
                <h1 className={styles.detail_about_name}>
                  {detail_data.product.name}
                </h1>
                <div className={styles.detail_about_review}>
                  {starCounter.map((item, index) => {
                    index < detail_data.product.rate
                      ? (item = true)
                      : (item = false)
                    return <Star active={item} key={index} />
                  })}
                </div>
              </div>
              <div className={styles.detail_cards}>
                <div className={styles.detail_cards__left_side}>
                  <Carousel>
                    {detail_data.product.product_video?.map((_video, index) => (
                      <div className={styles.carousel_img} key={index}>
                        <video controls muted src={_video?.get_video} />
                      </div>
                    ))}
                    {detail_data.product.product_image?.map((_image, index) => (
                      <div className={styles.carousel_img} key={index}>
                        <img src={_image.get_image} alt='image' />
                      </div>
                    ))}
                  </Carousel>
                  <User
                    className={styles.detail_user}
                    img={detail_data.product?.shop?.get_image}
                    name={detail_data.product?.shop?.name}
                  />
                </div>
                <div className={styles.detail_cards__right_side}>
                  <div className={styles.detail_cards_header}>
                    <h1 className={styles.detail_cards_title}>
                      Buyurtma berish
                    </h1>
                    <h3 className={styles.detail_cards_price}>
                      Mahsulot narxi: <span>{detail_data.product.price}</span>{' '}
                      so'm
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
                      onClick={() => handleSubmit()}
                      className={styles.detail_cards_footer_btn}
                    >
                      Buyurtma berish
                    </Button>
                    <ButtonCart />
                  </div>
                </div>
              </div>
              <BasicTabs
                tab_1={detail_data.product?.more_information}
                tab_2={
                  detail_data.product?.product_rate?.length ? (
                    detail_data.product?.product_rate.map((item, index) => (
                      <UserRate
                        key={index}
                        name={item.name}
                        description={item.comment}
                        star={item.rate}
                      />
                    ))
                  ) : (
                    <Typography variant='h6'>no comments</Typography>
                  )
                }
              />
            </div>
          </Container>
        </div>
      )}
    </>
  )
}
export default FlowDetail
