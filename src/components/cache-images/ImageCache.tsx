import { cardInterface } from "../layout/MainCards";

const CacheImages = () => {
  return (
    <>
      {cardInterface.map((val, index) => (
        <img
          key={index}
          src={val.image}
          alt="pic computer"
          style={{ display: "none" }}
        />
      ))}
    </>
  );
};

export default CacheImages;
