import React from 'react'
import Button from '../../ui/button/Button'
import styles from './ModalDetailOrder.module.scss'

const ModalDetailOrder = props => {
  const { price, name, active, setActive } = props
  return (
    <div
      className={`${styles.modal} ${active ? styles.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal_content_header}>
          <div className={styles.modal_title}>Arizangiz qabul qilindi!</div>
          <div className={styles.modal_description}>
            Batafsil ma'lumot uchun operator yaqin vaqt ichida siz bilan aloqaga
            chiqadi. Iltimos, telefoningiz yoqilgan holda bo'lsin!
          </div>
        </div>
        <div className={styles.modal_content_body}>
          <div className={styles.modal_product__name}>nomi : {name}</div>
          <div className={styles.modal_product__price}>
            narxi : {price} so'm
          </div>
        </div>
        <div className={styles.modal_content_footer}>
          <Button onClick={() => setActive(false)} className={styles.modal_btn}>
            Ortga qaytish
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ModalDetailOrder
