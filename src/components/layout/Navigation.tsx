import styled from "styled-components";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { useMobileMenu } from "../hooks/useMobileMenu";

const Navigation = (): JSX.Element => {
  const { menu } = useMobileMenu();

  const menuList: string[] = ["Products", "Solutions", "Pricing", "Enterprise"];

  return (
    <Container>
      {menu === "noshow" ? (
        ""
      ) : menu ? (
        <NavMobile menuList={menuList} />
      ) : (
        <NavDesktop menuList={menuList} />
      )}
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 5;
  padding: 0.5rem;
  top: 0;
  background-color: #fff;
`;
