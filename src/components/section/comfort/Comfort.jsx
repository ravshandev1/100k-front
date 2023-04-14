import React from 'react'
import styles from './Comfort.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTruck,
  faMoneyBill1Wave,
  faHeadset,
  faGift
} from '@fortawesome/free-solid-svg-icons'
import Container from '../../ui/container/Container'

const Comfort = () => {
  return (
    <div className={styles.comfort}>
      <Container>
        <h1 className={styles.comfort_title}>Karol Vernulsa qulaylikalari</h1>
        <div className={styles.comfort_menu}>
          <div className={styles.comfort_menu_card}>
            <div className={styles.comfort_menu_card_img}>
              <FontAwesomeIcon icon={faTruck} className={styles.icon} />
            </div>
            <div className={styles.comfort_menu_card_title}>
              Tezkor yetkazib berish xizmati
            </div>
            <div className={styles.comfort_menu_card_description}>
              Buyurtmangiz O'zbekistonning barcha viloyatlariga 3 kun ichida
              yetqazib beriladi.
            </div>
          </div>
          <div className={styles.comfort_menu_card}>
            <div className={styles.comfort_menu_card_img}>
              <FontAwesomeIcon
                icon={faMoneyBill1Wave}
                className={styles.icon}
              />
            </div>
            <div className={styles.comfort_menu_card_title}>
              To'lov istalgan usulda
            </div>
            <div className={styles.comfort_menu_card_description}>
              Buyurtmani oldindan click, payme yoki buyurtmani qo'lingizga
              olganingizdan keyin amalga oshiring.
            </div>
          </div>
          <div className={styles.comfort_menu_card}>
            <div className={styles.comfort_menu_card_img}>
              <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
            </div>
            <div className={styles.comfort_menu_card_title}>CALL-CENTER</div>
            <div className={styles.comfort_menu_card_description}>
              Dam olish kunlarisiz qo'llab quvvatlash bo'limi mavjud.{' '}
            </div>
          </div>
          <div className={styles.comfort_menu_card}>
            <div className={styles.comfort_menu_card_img}>
              <FontAwesomeIcon icon={faGift} className={styles.icon} />
            </div>
            <div className={styles.comfort_menu_card_title}>
              {' '}
              Mijozlarni rag'batlantirish tizimi{' '}
            </div>
            <div className={styles.comfort_menu_card_description}>
              {' '}
              Doimiy mijozlar uchun sovg'alar va bonuslar taqdim etiladi.{' '}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Comfort
