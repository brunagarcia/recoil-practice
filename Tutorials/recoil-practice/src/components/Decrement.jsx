import React from "react";
import styled from "styled-components";

const DecrementButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: white;
  color: darkgreen;
  box-shadow: none;
  border: solid 1px darkgreen;
`;

export const Decrement = (props) => {
  return <DecrementButton onClick={props.onClick}>Decrement</DecrementButton>;
};
