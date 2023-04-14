import React, {useState} from 'react'
import {Box, Tab, Tabs, Typography} from "@mui/material";
import styles from './NavTabs.module.scss'
import Button from "../../ui/button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import ModalDetailComment from "../../modal/modalDetailComment/ModalDetailComment";

function TabPanel(props) {
	const {children, value, index, ...other} = props

	return (
		<div hidden={value !== index} {...other}>
			{value === index && (
				<Box sx={{p: 3}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	}
}

export default function BasicTabs({tab_1, tab_2}) {
	const [modalActive, setModalActive] = useState(false)

	const [value, setValue] = React.useState(0)

	const handleChange = (e, newValue) => {
		setValue(newValue)
	}

	return (
		<>
			<ModalDetailComment active={modalActive} setActive={setModalActive}/>
			<Tabs
				className={styles.tab}
				sx={{
					'& button.Mui-selected': {border: "none", color: 'white', backgroundColor: 'rgb(256, 0, 6)', fontWeight: 500},
				}}
				value={value}
				onChange={handleChange}
			>
				<Tab label="Batafsil ma'lumot" className={styles.tab_label} {...a11yProps(0)} />
				<Tab label="Xaridorlar fikrlari" className={styles.tab_label} {...a11yProps(1)} />
			</Tabs>
			<TabPanel className={styles.tab_panel} value={value} index={0}>
				<Typography>
					{tab_1}
				</Typography>
			</TabPanel>
			<TabPanel className={styles.tab_panel} value={value} index={1}>
				<Box className={styles.tab_panel_header}>
					<Typography variant='h4' className={styles.tab_panel_header_title}>Haridorlar fikri</Typography>
					<Button onClick={() => setModalActive(true)} width='md'><Box component='span'>izoh qoldirish</Box> <FontAwesomeIcon icon={faComments} className={styles.tab_panel_header_icon}/></Button>
				</Box>
				<Box>
					{tab_2}
				</Box>
			</TabPanel>
		</>
	)
}
