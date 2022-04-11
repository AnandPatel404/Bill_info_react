import { React, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
function Services_Section() {
    // const [data, setData] = useState(" ");

    // useEffect(async () => {
    //     try {
    //         //services factch request
    //         const services = await fetch("http://localhost:8000/try_service", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //             },
    //         });
    //         // make it object fromate
    //         const data = await services.json();
    //         // set data to state
    //         setData(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, []);
    return (
        <section className="text-gray-800 ">
            <div className="max-w-screen-xl mx-auto pb-32 px-12 sm:px-8 md:px-4 xl:px-16 pt-20 sm:pt-24 md:pt-34 overflow-x-hidden">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    slidesPerGroup={5}
                    loop={true}
                    loopFillGroupWithBlank={false}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide key="1saf">
                        <div className="item px-px" key="1saf">
                            <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                                <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                    <img
                                        src="/images/opretor/gas.svg"
                                        alt=""
                                        className="h-10 sm:h-12 w-10 sm:w-12"
                                    />
                                </div>
                                <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                    dth
                                </div>
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Services_Section;
