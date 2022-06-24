import React from "react";

import "./Btn.css";

interface Props {
  text: string;
  classNameBtn: string;
}

export const Btn = (props: Props) => {
  const { text, classNameBtn } = props;
  return <button className={classNameBtn}>{text}</button>;
};
