import React, { ChangeEvent } from "react";

interface Props {
  id: string;
  classInput: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
  const { id, classInput, type, name, placeholder, value, change } = props;

  return (
    <input
      className={classInput}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={change}
    />
  );
};
