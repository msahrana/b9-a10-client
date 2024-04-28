import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/navigation";
import {Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import slider1 from "../../../public/slider/hotel-of-Bangladesh.png";
import slider2 from "../../../public/slider/hotel-of-Indonesia.png";
import slider3 from "../../../public/slider/hotel-of-Malaysia.png";
import slider4 from "../../../public/slider/hotel-of-Thailand.png";

const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="lg:h-[680px] rounded mt-8"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
