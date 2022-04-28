import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import { Navigation, Autoplay } from "swiper";

function Slider() {
    return (
        <section>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper shadw border-[1px] border-[#eceff1]"
            >
                <SwiperSlide>
                    <img src="/images/banners/temp_Banner.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banners/temp_Banner.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banners/temp_Banner.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banners/temp_Banner.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banners/temp_Banner.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banners/temp_Banner.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Slider;
