import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserEntity } from "types";
import { Btn } from "../../common/Btn/Btn";
import { apiUrl } from "../../../config/api";
import classes from "./Home.module.scss";
import btnClasses from "../../common/Btn/Btn.module.scss";

export const Home = () => {
  const [data, setData] = useState<UserEntity[]>([]);

  const loadData = async () => {
    const response = await axios.get(`${apiUrl}/api/get`);
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDeleteUser = (id: string) => {
    if (window.confirm("Are you sure you want to delete the User?")) {
      axios.delete(`${apiUrl}/api/delete/${id}`);
      toast.success("Contact Deleted 😔");
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <div className={classes.users}>
      <Link to="addUser">
        <Btn
          classNameBtn={btnClasses.btn}
          classNameBtnSecondary={btnClasses.btn_contact}
          text="Add User"
        />
      </Link>
      <table className={classes.users_table}>
        <thead className={classes.users_header}>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={classes.users_body}>
          {data.map((item, index) => {
            const { id, name, contact, email } = item;
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{contact}</td>
                <td>{email}</td>
                <td className={classes.users_buttons}>
                  <Link to={`/edit/${id}`}>
                    <Btn
                      classNameBtn={btnClasses.btn}
                      classNameBtnSecondary={btnClasses.btn_edit}
                      text="Edit"
                    />
                  </Link>
                  <Btn
                    classNameBtn={btnClasses.btn}
                    classNameBtnSecondary={btnClasses.btn_delete}
                    text="Delete"
                    deleteUser={() => handleDeleteUser(id as string)}
                  />
                  <Link to={`/view/${id}`}>
                    <Btn
                      classNameBtn={btnClasses.btn}
                      classNameBtnSecondary={btnClasses.btn_view}
                      text="View"
                    />
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
