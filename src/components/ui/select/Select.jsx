import React, {useEffect, useState} from 'react';
import styles from "./Select.module.scss"
import {BASE_URL} from "../../../helper/api";

const Select = ({value, onChange, className}) => {
  const [city, setCity] = useState([])

  const getCity = async () => {
    try {
      const res = await fetch(`${BASE_URL}/orders/regions/`, {
        'accept': 'application/json',
        'X-CSRFToken': 'yDlVS6NhH1vo9uD9YDayJ3uMwl0FA9Xu7iYXaUFdIcF9SdE8r9A4iakaEmYAKfhK'
      })
      if (!res.ok) {
        throw Error(res.statusText)
      }
      const data = await res.json()
      setCity(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCity()
  }, [])

  return (
    <select className={`${styles.select} ${className}`} value={value} onChange={onChange} >
      {city && city.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
    </select>
  );

};

export default Select;