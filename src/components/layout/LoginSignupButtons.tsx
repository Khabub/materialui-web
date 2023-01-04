import { Button } from "@mui/material";
import styled from "styled-components";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import GoogleIcon from "@mui/icons-material/Google";

interface Props {
  children?: React.ReactNode;
}

const LoginSignupButtons = (props: Props): JSX.Element => {
  return (
    <Container>
      <h1>Build Your Softwares Hassle Free And With Top Notch Quality</h1>
      <div>
        <Button
          size="small"
          variant="outlined"
          endIcon={<LocalPostOfficeIcon />}
        >
          SIGNUP
        </Button>
        <Button
          size="small"
          variant="contained"
          color="error"
          endIcon={<GoogleIcon />}
          sx={{ marginLeft: "2rem" }}
        >
          SIGNUP
        </Button>
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
    font-size: 1rem;
    text-align: center;
    padding: 0 1rem;
  }
`;
