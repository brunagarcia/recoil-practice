import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

//import only the selector
import { textCountState } from "../state/selectors";

const CharacterCountField = styled.div``;

export const CharacterCount = () => {
  const count = useRecoilValue(textCountState);
  return <CharacterCountField>{count}</CharacterCountField>;
};
