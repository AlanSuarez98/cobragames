// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderHeader.css";
// Import Swiper styles

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function SliderHeader() {
  const img1 =
    "https://dbz-images.dubizzle.com/images/2023/08/12/3fed0bed034d4c35af7bcaed73cc232a-.jpeg?imwidth=800";

  const img2 =
    "https://e1.pxfuel.com/desktop-wallpaper/151/157/desktop-wallpaper-gaming-bozhu-video-games-ps4.jpg";

  const img3 =
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/01/mejores-juegos-ps4-2019.jpg?tf=3840x";
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        id="sliderHeader"
      >
        <SwiperSlide className="sliderHead">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="sliderHead">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="sliderHead">
          <img src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
