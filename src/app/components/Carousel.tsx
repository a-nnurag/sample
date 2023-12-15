"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Carousel.module.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i1.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i2.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i4.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i5.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i6.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i7.jpg" alt="" className={styles.img} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
