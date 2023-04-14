import React, { useEffect, useState } from "react";
import Container from "../../ui/container/Container";
import styles from "./Order.module.scss";
import { startLoading, stopLoading } from "../../../store/isLoading";
import { BASE_URL } from "../../../helper/api";
import { useSelector } from "react-redux";
import OrderProducts from "../../ui/orderProduct/OrderProducts";
import { Link } from "react-router-dom";

const Order = () => {
  const { user } = useSelector((state) => state.user);
  const [pending, setPending] = useState(false);
  const [orderProducts, setOrderProducts] = useState(null);
  const { access } = user;

  const orders = async () => {
    startLoading();
    try {
      const res = await fetch(`${BASE_URL}/orders/list/`, {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken":
            "ZTGMlOSMFo9TD1yAS4lKh4ZbqBFIbPPOyyjODCKIGzjEmKzzlALgQbPzyCDDlV94",
          Authorization: `Bearer ${access}`,
        },
      });
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const data = await res.json();
      setOrderProducts(data);
    } catch (e) {
      console.log(e);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    orders();
  }, []);

  useEffect(() => {
    orderProducts && setPending(true);
  }, [orderProducts]);

  return (
    <div className={styles.order}>
      <Container>
        <div className={styles.order_body}>
          <h1>Zakazlaringiz: </h1>

          {pending && orderProducts.length > 0 ? (
            <div className={styles.order_products_container}>
              {orderProducts.map((product, index) => (
                <OrderProducts
                  key={index}
                  image={product.get_image}
                  product_name={product.product_name}
                  product_price={product.price}
                  status={product.status}
                  comment={product.note}
                  address={product.address}
                  created_date={product.created_at.slice(0, 10)}
                />
              ))}
            </div>
          ) : (
            <div className={styles.order_no_products}>
              <h4>Siz hali hec narza zakaz qilmadingiz</h4>
              <p>
                qandauydir nosozliklar duch kelgan bolsa{" "}
                <Link to="/support">Admin</Link> bilan boglaning{" "}
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Order;
