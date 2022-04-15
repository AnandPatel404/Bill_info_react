import { React, useState, useEffect, componentDidMount } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import info from "./information";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Services_Section() {
    const [data, setData] = useState([]);

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
    // useEffect(() => {
    //     setData(info);
    // });

    const options = {
        margin: 10,
        dots: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        // navContainer: true,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" class="pr-1 icon icon-tabler icon-tabler-caret-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374151" fill="#374151" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" /></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" class="pl-1 icon icon-tabler icon-tabler-caret-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374151" fill="#374151" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" /></svg>`,
        ],
        smartSpeed: 200,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    };

    return (
        <section className="text-gray-800 ">
            <div className="max-w-screen-xl mx-auto pb-32 px-12 sm:px-8 md:px-4 xl:px-16 pt-20 sm:pt-24 md:pt-34 overflow-x-hidden">
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    {/* {data.map((item) => {
                        <div className="item px-px" key={item.id}>
                            <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                                <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="h-10 sm:h-12 w-10 sm:w-12"
                                    />
                                </div>
                                <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                    {item.name}
                                </div>
                            </button>
                        </div>;
                    })} */}
                    <div className="item px-px">
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                            <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                <img
                                    src="/images/opretor/mobile.svg"
                                    alt=""
                                    className="h-10 sm:h-12 w-10 sm:w-12"
                                />
                            </div>
                            <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                Mobile
                            </div>
                        </button>
                    </div>
                    <div className="item px-px">
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                            <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                <img
                                    src="/images/opretor/dth.svg"
                                    alt=""
                                    className="h-10 sm:h-12 w-10 sm:w-12"
                                />
                            </div>
                            <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                Dth
                            </div>
                        </button>
                    </div>
                    <div className="item px-px">
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                            <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                <img
                                    src="/images/opretor/postpaid.svg"
                                    alt=""
                                    className="h-10 sm:h-12 w-10 sm:w-12"
                                />
                            </div>
                            <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                Postpaid
                            </div>
                        </button>
                    </div>
                    <div className="item px-px">
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                            <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                <img
                                    src="/images/opretor/lightbill1.svg"
                                    alt=""
                                    className="h-10 sm:h-12 w-10 sm:w-12"
                                />
                            </div>
                            <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                Light Bill
                            </div>
                        </button>
                    </div>
                    <div className="item px-px">
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                            <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                <img
                                    src="/images/opretor/mobile.svg"
                                    alt=""
                                    className="h-10 sm:h-12 w-10 sm:w-12"
                                />
                            </div>
                            <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                Mobile
                            </div>
                        </button>
                    </div>
                    <div className="item px-px">
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                            <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                <img
                                    src="/images/opretor/water1.svg"
                                    alt=""
                                    className="h-10 sm:h-12 w-10 sm:w-12"
                                />
                            </div>
                            <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                Water Bill
                            </div>
                        </button>
                    </div>
                    <div className="item px-px">
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                            <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                <img
                                    src="/images/opretor/broadband.svg"
                                    alt=""
                                    className="h-10 sm:h-12 w-10 sm:w-12"
                                />
                            </div>
                            <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                Broadband
                            </div>
                        </button>
                    </div>
                    <div className="item px-px">
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none">
                            <div className="flex px-4 py-4 rounded-full justify-center items-center">
                                <img
                                    src="/images/opretor/google_play.svg"
                                    alt=""
                                    className="h-10 sm:h-12 w-10 sm:w-12"
                                />
                            </div>
                            <div className="ext-center sm:text-left text-base sm:text-xl mr-0 sm:mr-auto">
                                Google Play
                            </div>
                        </button>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
}

export default Services_Section;
