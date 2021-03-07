import React from "react";
import styled from "styled-components";

const IncrementButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: darkgreen;
  color: white;
  box-shadow: none;
  border: solid 1px white;
`;

export const Increment = (props) => {
  return <IncrementButton onClick={props.onClick}>Increment</IncrementButton>;
};
