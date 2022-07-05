import React from "react";

interface Props {
  text: string;
  classNameBtn: string;
  classNameBtnSecondary: string;
  deleteUser?: () => void;
}

export const Btn = (props: Props) => {
  const { text, classNameBtn, classNameBtnSecondary, deleteUser } = props;
  return (
    <button
      className={`${classNameBtn} ${classNameBtnSecondary}`}
      onClick={deleteUser}
    >
      {text}
    </button>
  );
};
