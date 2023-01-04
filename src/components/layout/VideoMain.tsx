import styled from "styled-components";
import myVideo from "../../assets/myVideo.mp4";


const VideoMain = () => {
  return (
    <Container>   
      <video loop muted autoPlay playsInline>
        <source src={myVideo} type="video/mp4" />
      </video>
    </Container>
  );
};

export default VideoMain;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 5rem;

  video {
    width: 100%;
  }
`;
