import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Mobile from "../Services_inputs/Mobile";
import Dth from "../Services_inputs/Dth";
import Postpaid from "../Services_inputs/Postpaid";
import Light_bill from "../Services_inputs/Light_bill";
import Water from "../Services_inputs/Water";
import Broadband from "../Services_inputs/Brodband";
import Google_pay from "../Services_inputs/Google_pay";
function Services_Section() {
    const [forMobile, setforMobile] = useState(false);
    const [forDth, setforDth] = useState(false);
    const [forPostpaid, setforPostpaid] = useState(false);
    const [forLightBill, setforLightBill] = useState(false);
    const [forWater, setforWater] = useState(false);
    const [forBroadband, setforBroadband] = useState(false);
    const [forGOogle, setforGOogle] = useState(false);

    const openMobile = () => {
        setforMobile(true);
        setforDth(false);
        setforPostpaid(false);
        setforLightBill(false);
        setforWater(false);
        setforBroadband(false);
        setforGOogle(false);
    };
    const openDth = () => {
        setforMobile(false);
        setforDth(true);
        setforPostpaid(false);
        setforLightBill(false);
        setforWater(false);
        setforBroadband(false);
        setforGOogle(false);
    };
    const openPostpaid = () => {
        setforMobile(false);
        setforDth(false);
        setforPostpaid(true);
        setforLightBill(false);
        setforWater(false);
        setforBroadband(false);
        setforGOogle(false);
    };
    const openLightBill = () => {
        setforMobile(false);
        setforDth(false);
        setforPostpaid(false);
        setforLightBill(true);
        setforWater(false);
        setforBroadband(false);
        setforGOogle(false);
    };
    const openWater = () => {
        setforMobile(false);
        setforDth(false);
        setforPostpaid(false);
        setforLightBill(false);
        setforWater(true);
        setforBroadband(false);
        setforGOogle(false);
    };
    const openBroadband = () => {
        setforMobile(false);
        setforDth(false);
        setforPostpaid(false);
        setforLightBill(false);
        setforWater(false);
        setforBroadband(true);
        setforGOogle(false);
    };
    const openGoogle = () => {
        setforMobile(false);
        setforDth(false);
        setforPostpaid(false);
        setforLightBill(false);
        setforWater(false);
        setforBroadband(false);
        setforGOogle(true);
    };

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

    useEffect(() => {
        document.querySelectorAll(".item").forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelectorAll(".item").forEach((item) => {
                    item.classList.remove("active-border");
                });
                item.classList.add("active-border");
            });
        });
    });
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
                    <div className="item px-px " onClick={openMobile}>
                        <button className="flex items-center tab-button flex-col sm:flex-row w-full border justify-center h-auto sm:h-full py-2 px-6 rounded-sm  focus:outline-none ">
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
                    <div className="item px-px" onClick={openDth}>
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
                    <div className="item px-px" onClick={openPostpaid}>
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
                    <div className="item px-px" onClick={openLightBill}>
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
                    <div className="item px-px" onClick={openWater}>
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
                    <div className="item px-px" onClick={openBroadband}>
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
                    <div className="item px-px" onClick={openGoogle}>
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
                {forMobile ? <Mobile /> : ""}
                {forDth ? <Dth /> : ""}
                {forPostpaid ? <Postpaid /> : ""}
                {forLightBill ? <Light_bill /> : ""}
                {forWater ? <Water /> : ""}
                {forBroadband ? <Broadband /> : ""}
                {forGOogle ? <Google_pay /> : ""}
            </div>
        </section>
    );
}

export default Services_Section;
