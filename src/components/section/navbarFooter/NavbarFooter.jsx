import React from 'react';
import styles from "./NavbarFooter.module.scss"
import Container from "../../ui/container/Container";
import {Link} from "react-router-dom";

const NavbarFooter = ({className}) => {
  return (
    <nav className={`${styles.navbar} ${className}`}>
      <Container>
        <ul className={styles.navbar_menu}>
          <li className={styles.navbar_menu_item}>
            <Link className={styles.navbar_menu_link}>home</Link>
          </li>
          <li className={styles.navbar_menu_item}>
            <Link className={styles.navbar_menu_link}>about</Link>
          </li>
          <li className={styles.navbar_menu_item}>
            <Link className={styles.navbar_menu_link}>link</Link>
          </li>
          <li className={styles.navbar_menu_item}>
            <Link className={styles.navbar_menu_link}>setting</Link>
          </li>
          <li className={styles.navbar_menu_item}>
            <Link className={styles.navbar_menu_link}>score</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavbarFooter;