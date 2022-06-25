import React from "react";

import "./Btn.css";

interface Props {
  text: string;
  classNameBtn: string;
  deleteUser?: () => void;
}

export const Btn = (props: Props) => {
  const { text, classNameBtn, deleteUser } = props;
  return (
    <button className={classNameBtn} onClick={deleteUser}>
      {text}
    </button>
  );
};
