import { React, useEffect } from "react";
import Container from "../../../Helper/Container";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Try_services() {
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
        <section className="bg-[#f6f9fc]">
            <Container className="pt-20 overflow-x-hidden">
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
                <section className="tab-content mt-5 bg-[#fff] border-[1px] p-5">
                    <div id="service_1 " className="tab-pane active">
                        <div className="flex flex-col">
                            <div className="name_and_heading">
                                <div className="name font-semibold text-base mb-2">
                                    Prepaid Mobile
                                </div>
                                <div className="heading text-sm text-[#74788D] mb-6">
                                    <p>
                                        Provide valuable, actionable feedback to
                                        your users with HTML5 form
                                        validation–available in all our
                                        supported browsers.
                                    </p>
                                </div>
                            </div>
                            <div className="input_box ">
                                <form
                                    action=""
                                    className="flex flex-col md:flex-row gap-3"
                                >
                                    <div className="first_box flex flex-col mb-4 flex-1">
                                        <label
                                            htmlFor="text"
                                            className="mb-2 text-[#b8bbc2]"
                                        >
                                            Mobile no. :
                                        </label>
                                        <input
                                            type="text"
                                            name="number"
                                            id="number "
                                            placeholder="Enter Mobile Number"
                                            className="py-[7.5px] px-3 focus:outline-none border-[1px] border-[#b8bbc2] rounded-[0.4rem]"
                                        />
                                    </div>
                                    <div className="Second_box flex flex-col mb-4 flex-1">
                                        <label
                                            htmlFor="mobile_operator"
                                            className="mb-2 text-[#b8bbc2]"
                                        >
                                            Operator :
                                        </label>
                                        <select
                                            name="mobile_operator"
                                            id="mobile_operator"
                                            className="py-[7.5px] px-3 focus:outline-none border-[1px] border-[#b8bbc2] rounded-[0.4rem]"
                                        >
                                            <option value=" ">select</option>
                                            <option value="AL">Alabama</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">
                                                Louisiana
                                            </option>
                                        </select>
                                    </div>
                                    <div className="submit_butoon mb-2 md:mt-4 items-center flex justify center">
                                        <button
                                            type="submit"
                                            className="rounded-lg px-2 py-2 text-white bg-primary_dark"
                                        >
                                            Submit form
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <hr />
                            <div className="two_button md:mt-4 items-start space-y-3 md:space-x-3 flex flex-col md:flex-row">
                                <button
                                    type="submit"
                                    className="rounded-lg mt-3 px-2 py-2 text-white bg-btn_green"
                                >
                                    Large modal
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-lg px-2 py-2 text-white bg-btn_green"
                                >
                                    Regular plan
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </section>
    );
}

export default Try_services;
