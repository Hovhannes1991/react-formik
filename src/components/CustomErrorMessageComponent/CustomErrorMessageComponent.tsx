// import React, { FC, ReactNode } from "react";

// interface ICustomErrorMessageComponentProps {
//   children: ReactNode;

export const CustomErrorMessageComponent = (props: any) => {
  const getRmdColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const RGB = "rgb(" + r + "," + g + "," + b + ")";
    return RGB;
  };
  const error_message_letters = props.children.toUpperCase().split("");
  const error_message = error_message_letters.map(
    (letter: string, index: number) => (
      <span key={index} style={{ color: getRmdColor() }}>
        {letter}
      </span>
    )
  );

  return <div>{error_message}</div>;
};
