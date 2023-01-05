import { Button } from "@mui/material";
import styled from "styled-components";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import GoogleIcon from "@mui/icons-material/Google";

const LoginSignupButtons = (): JSX.Element => {
  return (
    <Container>
      <h1>BUILD Your Softwares Hassle Free And With Top Notch Quality</h1>
      <div>
        <ButtonSC variant="outlined" endIcon={<LocalPostOfficeIconSC />}>
          SIGNUP
        </ButtonSC>
        <ButtonSC variant="contained" color="error" endIcon={<GoogleIconSC />}>
          SIGNUP
        </ButtonSC>
      </div>
    </Container>
  );
};

export default LoginSignupButtons;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 5rem;
    font-size: clamp(1rem, 3vw, 3rem);
    text-align: center;
    padding: 0 1rem;
  }
`;

const ButtonSC = styled(Button)`
  && {
    font-size: clamp(1rem, 2vw, 1.7rem);
    margin: 0 1rem;

    // MEDIA QUERY
    @media (min-width: 900px) {
      margin: 0 3rem;
    }
  }
`;

const GoogleIconSC = styled(GoogleIcon)`
  && {
    scale: 100%;
    
    // MEDIA QUERY
    @media (min-width: 1200px) {
      scale: 130%;
    }
  }
`;

const LocalPostOfficeIconSC = styled(LocalPostOfficeIcon)`
  && {
    scale: 100%;

    // MEDIA QUERY
    @media (min-width: 1200px) {
      scale: 130%;
    }
  }
`;
