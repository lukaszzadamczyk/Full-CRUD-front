import React from "react";

interface Props {
  htmlFor: string;
  text: string;
}

export const Label = (props: Props) => {
  const { htmlFor, text } = props;

  return <label htmlFor={htmlFor}>{text}</label>;
};
