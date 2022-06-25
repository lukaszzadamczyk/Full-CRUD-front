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

  const handleDeleteUser = (id: string) => {
    if (window.confirm("Are you sure you want to delete the User?")) {
      axios.delete(`http://localhost:3001/api/delete/${id}`);
      toast.success("Contact Deleted 😔");
      setTimeout(() => loadData(), 500);
    }
  };

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
            const { id, name, contact, email } = item;
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{contact}</td>
                <td>{email}</td>
                <td className="users_buttons">
                  <Link to={`/update/${id}`}>
                    <Btn classNameBtn="btn btn-edit" text="Edit" />
                  </Link>
                  <Btn
                    classNameBtn="btn btn-delete"
                    text="Delete"
                    deleteUser={() => handleDeleteUser(id as string)}
                  />
                  <Link to={`/view/${id}`}>
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
