import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid;
  border-top: 2px solid transparent;
  position: relative;
  animation: ${spin} 1s linear infinite;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingSpinner = () => (
  <Container>
    <Spinner aria-busy="true" aria-label="Loading" role="status" />
  </Container>
);
