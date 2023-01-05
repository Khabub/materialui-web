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
      <h1>{props.name}</h1>
      <p>{props.text}</p>
      <div className="picture">
        <img src={props.image} alt="card pic" />
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
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
    .picture {
      width: 50vw;
    }
  }
`;
