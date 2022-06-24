import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserEntity } from "types";
import { Btn } from "../../common/Btn/Btn";

import "./Home.css";

export const Home = () => {
  const [data, setData] = useState<UserEntity[]>([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="users_container">
      <Link to="addUser">
        <Btn classNameBtn="btn btn-contact" text="Add User" />
      </Link>
      <table className="users_table">
        <thead className="users_table_header">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="users_table_body">
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td className="users_buttons">
                  <Link to={`/update/${item.id}`}>
                    <Btn classNameBtn="btn btn-edit" text="Edit" />
                  </Link>
                  <Btn classNameBtn="btn btn-delete" text="Delete" />
                  <Link to={`/view/${item.id}`}>
                    <Btn classNameBtn="btn btn-view" text="View" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
