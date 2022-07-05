import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Btn } from "../../common/Btn/Btn";
import { UserEntity } from "types";
import { toast } from "react-toastify";
import axios from "axios";
import { Input } from "../../common/Input/Input";
import { Label } from "../../common/Label/Label";
import classes from "./AddUser.module.scss";
import btnClasses from "../../common/Btn/Btn.module.scss";
import inputClasses from "../../common/Input/Input.module.scss";

const initialState: UserEntity = {
  name: "",
  contact: "",
  email: "",
};

export const AddUser = () => {
  const [newDataUser, setNewDataUser] = useState<UserEntity>(initialState);

  const { name, contact, email } = newDataUser;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/get/${id}`)
      .then((res) => setNewDataUser({ ...res.data[0] }));
  }, [id]);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !contact || !email) {
      toast.error("Please provide correct value.");
    } else {
      if (!id) {
        axios
          .post("http://localhost:3001/api/add", {
            name,
            contact,
            email,
          })
          .then(() => {
            setNewDataUser({ name: "", contact: "", email: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success(`User ${name} Added 😎`);
        setTimeout(() => {
          navigate(-1);
        }, 500);
      } else {
        axios
          .put(`http://localhost:3001/api/update/${id}`, {
            name,
            contact,
            email,
          })
          .then(() => {
            setNewDataUser({ name: "", contact: "", email: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success(`User ${name} Updated 🧐`);
        setTimeout(() => {
          navigate(-1);
        }, 500);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDataUser({ ...newDataUser, [name]: value });
  };

  return (
    <div className={classes.form}>
      <form className={classes.form_add} onSubmit={handleFormSubmit}>
        <Label htmlFor="name" text="Name" />
        <Input
          id="name"
          classInput={inputClasses.input_name}
          type="text"
          value={name || ""}
          name="name"
          placeholder="Your Name"
          change={handleInputChange}
        />
        <Label htmlFor="contact" text="Contact" />
        <Input
          id="contact"
          classInput={inputClasses.input_contact}
          type="number"
          name="contact"
          placeholder="Your Phone Number..."
          value={contact || ""}
          change={handleInputChange}
        />
        <Label htmlFor="email" text="Email" />
        <Input
          id="email"
          classInput={inputClasses.input_email}
          type="email"
          name="email"
          placeholder="Your Email..."
          value={email || ""}
          change={handleInputChange}
        />
        <Btn
          classNameBtn={btnClasses.btn}
          classNameBtnSecondary={btnClasses.btn_save}
          text={id ? "Update" : "Save"}
        />
        <Link to="/">
          <Btn
            classNameBtn={btnClasses.btn}
            classNameBtnSecondary={btnClasses.btn_home}
            text="Go Home"
          />
        </Link>
      </form>
    </div>
  );
};
