import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import leftIcon from "../../assets/left_chev.svg";
import rightIcon from "../../assets/right_chev.svg";

export default function Carousel({ children, uniqueId = "" }) {
  return (
    <div className={styles.carouselContainer}>
      <div className={`swiper-button-prev-${uniqueId}`}>
        <img src={leftIcon} alt="Previous" />
      </div>
      <div className={`swiper-button-next-${uniqueId}`}>
        <img src={rightIcon} alt="Next" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.swiper-button-prev-${uniqueId}`,
          nextEl: `.swiper-button-next-${uniqueId}`,
        }}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 6 },
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
