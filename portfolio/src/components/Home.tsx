import HeaderCard from "./HeaderCard";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <HeaderCard />
      <div
        style={{
          marginTop: "1rem",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <a target="_blank" rel="noreferrer" href="https://github.com/ManuBeni">
          <AiFillGithub size={70} />
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/manuel--benitez/">
          <AiOutlineLinkedin size={70} />
        </a>

        <a target="_blank" rel="noreferrer" href="mailto:manubeni0498@gmail.com">
          <SiGmail size={70} />
        </a>
      </div>
    </div>
  );
};

export default Home;
