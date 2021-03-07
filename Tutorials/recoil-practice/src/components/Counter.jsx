import React from "react";
import styled from "styled-components";

const Number = styled.h1`
  font-family: "fantasy";
`;

export const Counter = (props) => {
  return <Number>{props.count}</Number>;
};
