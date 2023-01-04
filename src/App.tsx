//import Signup from "./components/Signup";
import styled from "styled-components";
import LoginSignupButtons from "./components/layout/LoginSignupButtons";
import MainCards from "./components/layout/MainCards";
import Navigation from "./components/layout/Navigation";
import VideoMain from "./components/layout/VideoMain";

const App = (): JSX.Element => {
  return (
    <Container>
      <Navigation />
      <VideoMain />
      <LoginSignupButtons />
      <MainCards />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
