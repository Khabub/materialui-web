import photo1 from "../../assets/1.jpg";
import photo2 from "../../assets/2.jpg";
import Card from "../UI/Card";

interface CardInterface {
  name: string;
  text: string;
  image: string;
}

const cardInterface: CardInterface[] = [
  {
    name: "Get Things Done",
    text: "lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    image: photo1,
  },
  {
    name: "Productivity is Brilliant",
    text: "lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    image: photo1,
  },
  {
    name: "Fast Development",
    text: "lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    image: photo2,
  },
];

const MainCards = (): JSX.Element => {
  const list = cardInterface.map((val, index) => <Card key={index} {...val} />);

  return <>{list}</>;
};

export default MainCards;
