import React from "react";
import styled from "styled-components";

const TextInputField = styled.input`
  width: 360px;
  margin: auto;
  align-content: center;
  text-align: center;
`;

export const TextInput = (props) => {
  return <TextInputField value={props.text} onChange={props.onChange} />;
};
