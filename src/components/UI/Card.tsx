import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  name: string;
  text: string;
  image: string;
}

const Card = (props: Props): JSX.Element => {
  return (
    <Container>
      <figure>
        <h1>{props.name}</h1>
        <p>{props.text}</p>
        <img src={props.image} alt="card pic" />
      </figure>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  color: brown;

  h1 {
    width: 80vw;
    font-size: 1.3rem;
    margin-top: 7rem;
  }

  p {
    width: 80vw;
    font-size: 0.9rem;
  }

  img {
    width: 80vw;
    height: auto;
    border-radius: 15px;
  }
`;
