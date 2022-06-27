import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { UserEntity } from "types";
import { Btn } from "../../common/Btn/Btn";

import "./View.css";

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
      .get(`http://localhost:3001/api/get/${id}`)
      .then((res) => setUser({ ...res.data[0] }));
  }, [id]);
  return (
    <div className="user-view">
      <div className="user-card">
        <div className="user-card-header">
          <p>User Details</p>
        </div>
        <div className="user-data">
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
          <span>{user.contact}</span>
          <Link to="/">
            <Btn classNameBtn="btn btn-home" text="Go Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};
