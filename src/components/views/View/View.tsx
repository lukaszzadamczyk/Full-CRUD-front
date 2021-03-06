import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { UserEntity } from "types";
import { Btn } from "../../common/Btn/Btn";
import { apiUrl } from "../../../config/api";
import classes from "./View.module.scss";
import btnClasses from "../../common/Btn/Btn.module.scss";
import { FaUserTie } from "react-icons/fa";

const initialState: UserEntity = {
  name: "",
  contact: "",
  email: "",
};

export const View = () => {
  const [user, setUser] = useState<UserEntity>(initialState);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/get/${id}`)
      .then((res) => setUser({ ...res.data[0] }));
  }, [id]);
  return (
    <div className={classes.user}>
      <div className={classes.user_card}>
        <div className={classes.user_header}>
          <p>
            <span>
              <FaUserTie />
            </span>
            <span>User Details</span>
          </p>
        </div>
        <div className={classes.user_data}>
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <strong>Name: </strong>
          <span>{user.name}</span>
          <br />
          <strong>Contact: </strong>
          <span>{user.contact}</span>
          <br />
          <strong>Email: </strong>
          <span>{user.email}</span>
          <Link to="/">
            <Btn
              classNameBtn={btnClasses.btn}
              classNameBtnSecondary={btnClasses.btn_home}
              text="Go Home"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
