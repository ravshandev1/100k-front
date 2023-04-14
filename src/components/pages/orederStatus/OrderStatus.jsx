import React from "react";
import "./orderStatus.scss";
import Container from "../../ui/container/Container";
import { useState } from "react";
import { BASE_URL } from "../../../helper/api";
import axios from "axios";

const OrderStatus = () => {
  const [useId, setUseId] = useState();
  const [first, setFirst] = useState();
  const getOrder = async (id) => {
    setUseId(id);
    const res = await fetch(`${BASE_URL}/orders/status/${id}/`);
    const data = await res.json();
    setFirst(data);
  };
  const putchOrder = async (option) => {
    axios
      .patch(`${BASE_URL}/orders/status/${useId}/`, {
        status: option,
      })
      .then((res) => {
        getOrder(useId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <div className="oreder">
        <input
          onChange={(e) => {
            getOrder(e.target.value);
          }}
          type="text"
          className=""
        />
        <h4>id:{first?.id}</h4>
        <h4>
          status:{first?.status}
          <select onChange={(e) => putchOrder(e.target.value)}>
            <option value="Yangi">Yangi</option>
            <option value="Qayta qo'ng'iroq">Qayta qo'ng'iroq</option>
            <option value="Qabul qilindi">Qabul qilindi</option>
            <option value="Spam">Spam</option>
            <option value="Yetkazilmoqda">Yetkazilmoqda</option>
            <option value="Rad qilindi">Rad qilindi</option>
            <option value="Yetkazib berildi">Yetkazib berildi</option>
          </select>
        </h4>
        <h4>address:{first?.address}</h4>
        <h4>name:{first?.name}</h4>
        <h4>note:{first?.note}</h4>
        <h4>phone:{first?.phone}</h4>
        <h4>product:{first?.product}</h4>
      </div>
    </Container>
  );
};

export default OrderStatus;
