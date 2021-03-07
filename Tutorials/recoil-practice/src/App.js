import styled from "styled-components";
import { Container } from "./components/index";

import { RecoilRoot } from "recoil";

const AppContainer = styled.div`
  position: absolute;
  background-color: lightgreen;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return (
    <RecoilRoot>
      <AppContainer>
        <Container />
      </AppContainer>
    </RecoilRoot>
  );
}

export default App;
