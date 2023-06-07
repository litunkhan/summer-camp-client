
// import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/iamge-1.jpg'
import img2 from '../../../assets/image-2.jpg'
import img3 from '../../../assets/image-3.jpg'
import img4 from '../../../assets/image-4.jpg'
import img5 from '../../../assets/image-5.jpg'
import img6 from '../../../assets/image-6.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Slider =()=> {
  return (
    <div>
      <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={img2}  alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={img3}  alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={img4}  alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={img5}  alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={img6}  alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}
export default Slider