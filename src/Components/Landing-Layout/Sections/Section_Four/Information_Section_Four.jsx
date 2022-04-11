import React from "react";
import { Link } from "react-router-dom";
function Information_Section_Four() {
    return (
        <section className="text-white bg-primary_dark">
            <div className="max-w-screen-lg mx-auto overflow-x-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-center my-28 px-2 gap-10 lg:gap-0">
                    <div className="flex flex-col justify-start items-start">
                        <div className="mb-4 font-medium leading-none text-center lg:text-left text-[1.8rem]">
                            Get bill information & Plans API of all Indian
                            operators
                        </div>
                        <div className="font-normal leading-none text-center lg:text-left text-xl">
                            Our API is reliable, super-fast, and powerful with
                            99.99% uptime
                        </div>
                    </div>
                    <Link
                        to="/auth/register"
                        className="inline-flex items-center bg-btn_green px-8 py-4 font-semibold rounded text-base focus:outline-none md:mt-0 whitespace-nowrap"
                    >
                        {" "}
                        Get API
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Information_Section_Four;
