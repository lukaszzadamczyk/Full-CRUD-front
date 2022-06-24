import React, { ChangeEvent } from "react";

import "./Input.css";

interface Props {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
  const { id, type, name, placeholder, value, change } = props;

  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={change}
    />
  );
};
