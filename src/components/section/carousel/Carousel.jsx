import React from 'react';
import {Carousel as ReactCarousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from './Carousel.module.scss'

import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = ({children}) => {
	return (
		<ReactOwlCarousel
		items={1}
		dots={true}
		className={styles.carousel}
		>
			{children}
		</ReactOwlCarousel>
	);
};

export default Carousel;