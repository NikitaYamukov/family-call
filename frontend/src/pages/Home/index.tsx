import styled from "styled-components";
import { Button } from "@shared/ui/Button";

export const HomePage = () => (
  <Wrapper>
    <h1>Family Call</h1>
    <p>Welcome! Let’s start calling</p>
    <Button>Start</Button>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 12px;
`;