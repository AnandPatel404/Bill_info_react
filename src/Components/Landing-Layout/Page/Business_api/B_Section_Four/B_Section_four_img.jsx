import React from "react";
import { Link } from "react-router-dom";
function B_Section_four_img() {
    return (
        <section className="overflow-x-hidden text-gray-700 relative bg-lite_primary_bg">
            <div className="py-36 md:flex-row px-4 sm:px-8 md:px-4 xl:px-0 max-w-screen-xl flex flex-col items-center mx-auto">
                <div className="my-1 w-1/2 md:mb-0 flex flex-col items-start mb-16 text-left">
                    <div className="font-medium text-3xl mb-2 text-black title-font">
                        Become a Billinfo Affiliate & Earn Money.
                    </div>
                    <div className="text-base text-left mb-4">
                        Become a billinfo influencer - We will pay you a
                        commission for referring people to our website that make
                        a purchase.
                    </div>
                    <Link
                        to="/auth/register"
                        className="z-30 px-8 py-4 font-semibold rounded text-base text-white bg-primary focus:outline-none md:mt-0 inline-flex items-center border-0 mt-4"
                    >
                        Start earning
                    </Link>
                </div>
                <div className="h-full w-full absolute -right-80 flex items-end justify-end">
                    <img
                        src="/images/svg/bill_info_banner.svg"
                        alt=""
                        className="h-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default B_Section_four_img;
