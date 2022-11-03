import React from "react";
interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isSelected?: boolean;
}
const Button:React.FC<Props> = ({ onClick, children, isSelected }:Props) => (
  <button
    style={{
      border: 0,
      backgroundColor: isSelected ? "rebeccapurple" : "hotpink",
      color: isSelected ? "white" : "black",
      padding: "12px 24px",
      margin: "12px",
      borderRadius: "3px"
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Button;