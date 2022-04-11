import React from "react";
import { Link } from "react-router-dom";
function BillFaching_Section() {
    return (
        <section className="text-white bg-img bg-primary_dark bg-center bg-no-repeat bg-cover 2xl:bg-auto 2xl:bg-repeat-x">
            <div className="max-w-screen-lg mx-auto overflow-x-hidden px-4 sm:px-8 md:px-4 xl:px-0">
                <div className="flex flex-col justify-center items-center mt-24 mb-24">
                    <div className="mb-4 font-semibold sm:font-bold leading-tight text-center text-3xl lg:text-5xl">
                        Explore best recharge deals and offers from the brand
                        you love
                    </div>
                    <div className="tracking-wide font-normal leading-none text-center text-base mb-10">
                        Hassle-free recharge offers a hunting tool for you.
                    </div>
                    <Link
                        to="#become_affiliates"
                        className="inline-flex items-center bg-btn_green px-6 py-4 font-bold rounded text-base focus:outline-none md:mt-0"
                    >
                        Fetch Bill Now
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default BillFaching_Section;
