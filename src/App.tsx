//import Signup from "./components/Signup";
import React from "react";
import { Suspense } from "react";
import styled from "styled-components";
import CacheImages from "./components/cache-images/ImageCache";
import Loading from "./components/UI/Loading";

const Navigation = React.lazy(() => import("./components/layout/Navigation"));
const VideoMain = React.lazy(() => import("./components/layout/VideoMain"));
const LoginSignupButtons = React.lazy(
  () => import("./components/layout/LoginSignupButtons")
);
const MainCards = React.lazy(() => import("./components/layout/MainCards"));
const Footer = React.lazy(() => import("./components/layout/Footer"));

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <CacheImages />
        <Navigation />
        <VideoMain />
        <LoginSignupButtons />
        <MainCards />
        <Footer />
      </Container>
    </Suspense>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
