import Button from "@mui/material/Button";
import styled from "styled-components";

const Footer = (): JSX.Element => {
  return (
    <Container>
      <h1>Ready For Any Team Size</h1>
      <h1 className="h1-weak">Optimized For Any Team Size</h1>
      <div className="footer-buttons">
        <ButtonSC variant="contained">TRY CODEENV FOR FREE</ButtonSC>
        <ButtonSC variant="outlined" sx={{ marginLeft: "1.5rem" }}>
          TALK TO SALES
        </ButtonSC>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: clamp(1rem, 3vw, 3rem);
    margin-top: 3rem;
  }

  h1.h1-weak {
    font-weight: 300;
    margin-bottom: 5rem;
  }

  .footer-buttons {
    display: flex;
    justify-content: space-evenly;
  }

  //MEDIA QUERY
  @media (min-width: 900px) {
    h1 {
      margin-top: 15rem;
    }

    h1.h1-weak {
      margin-bottom: 10rem;
    }
  }
`;

const ButtonSC = styled(Button)`
  && {
    font-size: clamp(0.5rem, 2vw, 1.7rem);
    margin: 0 0.5rem;

    // MEDIA QUERY
    @media (min-width: 900px) {
      margin: 0 3rem;
    }
  }
`;
