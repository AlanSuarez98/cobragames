import { useEffect } from "react";
import "./Home.css";
import AnswerHome from "./componentsHome/answerHome/AnswerHome";
import FooterHome from "./componentsHome/footerHome/FooterHome";
import HeaderHome from "./componentsHome/headerHome/HeaderHome";
import MainHome from "./componentsHome/mainHome/MainHome";
import NavHome from "./componentsHome/navHome/NavHome";
import WhySelect from "./componentsHome/whySelect/WhySelect";

const Home = () => {
  useEffect(() => {
    document.title = "Cobra Games";
  }, []);

  return (
    <div className={"home"}>
      <HeaderHome />
      <NavHome />
      <MainHome />
      <WhySelect />
      <AnswerHome />
      <FooterHome />
    </div>
  );
};

export default Home;
