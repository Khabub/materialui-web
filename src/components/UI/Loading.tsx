import styled, { keyframes } from "styled-components";

const Loading = (): JSX.Element => {
  return <Container></Container>;
};

export default Loading;

const loading = keyframes`
  to {
    rotate: 360deg;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #0f305a;
  border: 3px solid #c5c5c5;
  border-top-color: black;
  animation: ${loading} 0.5s linear infinite;
  z-index: 10;

  // MEDIA QUERY
  @media (min-width: 599px){
    top: 85%;
  }
`;
