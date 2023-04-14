import React, { useEffect, useState } from "react";
import Navigate from "./navigate/Navigate";
import MainLayout from "./components/layout/MainLayout";
import "./assets/styles/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "./store/user";
import Notification from "./components/alert/notification/Notification";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const { alert } = useSelector((state) => state.user);
  const [activeAlert, setActiveAlert] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    if (alert.message.length > 0) {
      setActiveAlert(true);
      setTimeout(() => {
        setActiveAlert(false);
      }, 4000);
    }
  }, [alert.message]);
  return (
    <div className="App">
      <ScrollToTop />
      <MainLayout>
        <Notification active={activeAlert} setActive={setActiveAlert} />
        <Navigate />
      </MainLayout>
    </div>
  );
}

export default App;
