import React, { useState } from 'react'
import styles from './Footer.module.scss'
import Container from '../../ui/container/Container'

function Footer(props) {
  const [footerItem] = useState([
    { name: 'Mening kabinetim', id: 1 },
    { name: 'Biz haqimizda', id: 2 },
    { name: 'Aloqa uchun', id: 3 },
    { name: 'Ommaviy oferta', id: 4 },
    { name: 'Mening sevimlilarim', id: 5 }
  ])

  return (
    <footer className={styles.footer}>
      <Container>
        <ul className={styles.footer_menu}>
          {footerItem.map(item => (
            <li className={styles.footer_menu_item} key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className={styles.footer_info}>
          <p className={styles.footer_info_text}>2016-2023 - 100K</p>
          <p className={styles.footer_info_text}>Barcha huquqar himoyalangan</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
