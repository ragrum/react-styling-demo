import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(17, 24, 39, 1);
`;

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  width: 20rem;
  background-color: rgba(255, 255, 255, 1);
`;

const Circle = styled.div`
  border-radius: 9999px;
  height: 5rem;
  width: 5rem;
  background-color: rgba(220, 38, 38, 1);
`;

export default function Classes() {
  return (
    <Container>
      <Square>
        <Circle />
      </Square>
    </Container>
  );
}
