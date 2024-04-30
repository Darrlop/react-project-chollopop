import styled from "styled-components";

const primaryColor = "green";
const hoverColor = "black";
const backColor = "rgb(193, 234, 193)";
const HoverBackColor = "rgb(210, 180, 140)";

const Button = styled.button`
  cursor: pointer;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  background-color: ${backColor};
  border-color: ${primaryColor};
  color: ${(props) => (props.$variant === "primary" ? "white" : primaryColor)};
  display: inline-flex;
  align-items: center;
  font: inherit;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 0 30px;
  margin: 5px 10px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${HoverBackColor};
    border-color: ${hoverColor};
    color: ${hoverColor};
  }
`;

export default Button;
