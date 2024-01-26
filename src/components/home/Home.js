import SwiperPubli from "../swiperPubli/SwiperPubli";
import "./Home.css";
import AnswerHome from "./componentsHome/answerHome/AnswerHome";
import FooterHome from "./componentsHome/footerHome/FooterHome";
import HeaderHome from "./componentsHome/headerHome/HeaderHome";
import MainHome from "./componentsHome/mainHome/MainHome";
import WhySelect from "./componentsHome/whySelect/WhySelect";

const Home = () => {
  return (
    <div className={"home"}>
      <HeaderHome />
      <MainHome />
      <SwiperPubli />
      <WhySelect />
      <AnswerHome />
      <FooterHome />
    </div>
  );
};

export default Home;
