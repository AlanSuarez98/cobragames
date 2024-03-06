import "./SwiperPubli.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperPubli = () => {
  return (
    <div className="containSwiper">
      <div className="textSwiper">
        <h1>No disponible</h1>
      </div>
      <div className="cardSwiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiperPubli"
        >
          <SwiperSlide>
            <img
              src="https://i.3djuegos.com/juegos/10320/far_cry_4/fotos/ficha/far_cry_4-2550484.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5TDUQGmzQQ4mvRaN7NrrAZFivaUlS77snRud_wMqIRQ9nvWfZbiotHEZSf47OtdCNB4&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://dixgamer.com/wp-content/uploads/2022/01/five-nights-at-freddys-security-breach-245x300.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://juegosdigitalesargentina.com/files/images/productos/1497386790-far-cry-4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.gameplanet.com.ar/mods/html/fil/Model/Product/3603/thumb_api-web_Cover_1_3603.jpeg.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://juegosdigitalescolombia.com/files/images/thumbs/productos_300x400_1687293265-crash-team-rumble-ps4-0.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn-products.eneba.com/resized-products/zvgANbZx9d5gtMFT6ME6ntFeA5uzXdsEObDJdxeZ1-Q_350x200_1x-0.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://juegosdigitalesargentina.com/files/images/productos/1632344629-elden-ring-ps4-pre-orden.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://juegosdigitaleschile.com/files/images/thumbs/productos_300x400_1571521906-3-juegos-en-1-assassins-creed-the-ezio-collection-ps4.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperPubli;
