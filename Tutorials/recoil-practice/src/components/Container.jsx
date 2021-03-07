import styled from "styled-components";

import {
  Counter,
  Increment,
  Decrement,
  TextInput,
  CharacterCount,
} from "./index";

import { countState, textState } from "../state/atoms";

import { useRecoilState } from "recoil";

const CounterContainer = styled.div`
  margin: 15px;
  padding: 20px;
  background-color: white;
  text-align: center;
`;

const InputContainer = styled.div`
  margin: 15px;
  padding: 20px;
  background-color: white;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2px;
  align-content: center;
`;

export const Container = () => {
  const [count, setCount] = useRecoilState(countState);
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <CounterContainer>
        This is Recoil Practice stuff
        <Counter count={count} />
        <Increment onClick={countUp} />
        <Decrement onClick={countDown} />
      </CounterContainer>
      <InputContainer>
        <TextContainer>
          <TextInput value={text} onChange={onChange} />
          Echo: {text}
        </TextContainer>
        <CharacterCount />
      </InputContainer>
    </>
  );
};
