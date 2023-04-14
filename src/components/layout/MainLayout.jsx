import React, {useEffect, useState} from 'react';
import styles from "./MainLayout.module.scss"
import Navbar from "../section/navbar/Navbar";
import Footer from "../section/footer/Footer";


function MainLayout({children}) {
  return (
    <div className={styles.layout}>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}

export default MainLayout;