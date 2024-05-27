import Header from "./Header";
import Body from "./Body";
import BackDrop from "./BackDrop";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Main = () => {

  return (
    <div className="relative">
      <Header />
      <Body />
      <BackDrop />
      <button className="absolute bottom-5 right-5">
        <a href="#navbar">
          <FaArrowAltCircleUp size={35} color="blue" />
        </a>
      </button>
    </div>
  );
};

export default Main;
