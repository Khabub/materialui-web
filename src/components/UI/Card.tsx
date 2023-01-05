import styled from "styled-components";
import { useMobileMenu } from "../hooks/useMobileMenu";

interface Props {
  children?: React.ReactNode;
  name: string;
  text: string;
  image: string;
  swap: boolean;
}

const CardPicture = (props: Props) => {
  return (
    <div className="picture">
      <img src={props.image} alt="card pic" />
    </div>
  );
};

const CardText = (props: Props) => {
  return (
    <div className="description">
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
};

const SwapTrue = (props: Props) => {
  return (
    <Container swap={props.swap}>
      <CardPicture {...props} />
      <CardText {...props} />
    </Container>
  );
};

const SwapFalse = (props: Props) => {
  return (
    <Container swap={props.swap}>
      <CardText {...props} />
      <CardPicture {...props} />
    </Container>
  );
};

const Card = (props: Props): JSX.Element => {
  const { menu: windowWith } = useMobileMenu();

  return (
    <>
      {!windowWith ? (
        props.swap ? (
          <SwapTrue {...props} />
        ) : (
          <SwapFalse {...props} />
        )
      ) : (
        <SwapFalse {...props} />
      )}
    </>
  );
};

export default Card;

const Container = styled.div<Pick<Props, "swap">>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: brown;

  h1 {
    width: 80vw;
    font-size: clamp(1.3rem, 3vw, 2.5rem);
    margin-top: 7rem;
  }

  p {
    width: 80vw;
    font-size: clamp(0.9rem, 3vw, 1.5rem);
  }

  .picture {
    width: 80vw;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 5px 5px 15px 5px #a5a5a5;
  }

  // MEDIA QUERY
  @media (min-width: 1200px) {
    flex-direction: row;
    width: 80vw;
    margin-top: 10rem;

    h1 {
      width: initial;
      text-align: ${(props) => (props.swap ? "left" : "right")};
    }

    p {
      width: initial;
      text-align: ${(props) => (props.swap ? "left" : "right")};
    }

    .picture {
      width: 50%;
      transform: translate(125px, 50px);
    }

    img {
      width: 60%;
    }

    .description {
      width: 50%;
      display: flex;
      flex-direction: column;
    }
  }
`;
