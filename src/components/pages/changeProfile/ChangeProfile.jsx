import React, { useEffect, useState } from "react";
import InputMain from "../../ui/input/InputMain";
import Button from "../../ui/button/Button";
import styles from "./ChangeProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, getUserData } from "../../../store/user";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../skeleton/editProfileSkeleton/editProfile";
import {BASE_URL} from "../../../helper/api";

const ChangeProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [pending, setPending] = useState(false);
  const [user_image, setImage] = useState();
  const [user_name, setName] = useState("");
  const [user_surname, setSurname] = useState("");
  const [user_phone, setPhone] = useState("");
  const [user_town, setTown] = useState("");
  const [user_district, setDistrict] = useState("");
  const [user_address, setAddress] = useState("");
  const { user_id, edit_profile, data, access } = user;

  // const url = window.location.href.split('/')
  // console.log(url[5],'url')
  useEffect(() => {
    dispatch(getUserData(user_id));
  }, [user_id]);

  const replaceDate = () => {
    setName(data?.name || "");
    setImage(data?.img || "");
    setSurname(data?.surname || "");
    setPhone("+" + data?.phone || "");
    setTown(data?.province || "");
    setAddress(data?.action || "");
    setDistrict(data?.user_district || "");
  };

  useEffect(() => {
    if (data) {
      setPending(true);
      replaceDate();
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", e.target.img.files[0]);
    formData.append("name", e.target.ism.value);
    formData.append("surname", e.target.familya.value);
    formData.append("phone", e.target.telphone.value);
    formData.append("province", e.target.shahar.value);
    formData.append("district_or_city", e.target.rayon.value);
    formData.append("address", e.target.adres.value);
    // formData.append("image", e.target.files[0]);
    // const user = {
    //   name: user_name,
    //   surname: user_surname,
    //   phone: user_phone,
    //   province: user_town,
    //   district_or_city: user_district,
    //   address: user_address,
    //   image: img,
    // };
    // dispatch(
    //   editProfile({
    //     id: user_id,
    //     edit_list: formData,
    //   })
    // );
    fetch(`${BASE_URL}/users/${user_id}/`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken":
          "EAuxVjiJLrXrLZ7J7tnI7eFeurri0d1Gdf7zd7aFMC7cuI8IAZNeGlvCCspdajlW",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("salom", res);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const uploadImage = (e) => {
    setImage(e.target.files);
  };
  // qushimcha
  const [img, setimg] = useState();
  const imgUpload = (v) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // bu yerda base64 ga ugirib beradi va statega saqlab quyadi
        setimg(reader.result);
      }
    };
    reader.readAsDataURL(v.target.files[0]);
  };
  // qushimcha
  return (
    <div className={styles.change__profile}>
      <h1>Akkauntingizga o'zgarish kiriting</h1>
      {!pending ? (
        <EditProfile />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            {/* <div className={styles.change__profile_user__image}>
							<img src="" alt=""/>
						</div> */}
            <div className={styles.change__profile_user__image}>
              <img src={img} alt="" />
              <div className={styles.change__profile_user__image_item}>
                <label htmlFor="img">Select img</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={imgUpload}
                  // value={img}
                />
              </div>
            </div>
            {/*<InputFile className={styles.change__profile_form_footer_btn} value={user_image} setFile={setImage}/>*/}
            {/* <input type="file" onChange={uploadImage} value={user_image}/> */}
            <InputMain
              value={user_name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ismingizni kiriting"
              className={styles.change__profile_input}
              err={edit_profile.error}
              name={"ism"}
            />
            <InputMain
              value={user_surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="familiyangizni kiriting"
              className={styles.change__profile_input}
              err={edit_profile.error}
              name={"familya"}
            />
            <InputMain
              value={user_phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="telefont raqamingizni kiriting"
              className={styles.change__profile_input}
              err={edit_profile.error}
              name={"telphone"}
            />
            <InputMain
              value={user_town}
              onChange={(e) => setTown(e.target.value)}
              placeholder="shaharingizni kiriting"
              className={styles.change__profile_input}
              err={edit_profile.error}
              name={"shahar"}
            />
            <InputMain
              value={user_district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="rayoningizni kiriting"
              className={styles.change__profile_input}
              err={edit_profile.error}
              name={"rayon"}
            />
            <InputMain
              value={user_address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="adresingizni kiriting"
              className={styles.change__profile_input}
              err={edit_profile.error}
              name={"adres"}
            />
            <Button
              width="lg"
              onClick={() => dispatch(editProfile())}
              className={styles.change__profile_btn}
            >
              Ozgarishlarni kiritish
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChangeProfile;
