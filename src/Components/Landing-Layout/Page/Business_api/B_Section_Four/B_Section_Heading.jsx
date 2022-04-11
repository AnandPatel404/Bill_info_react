import React from "react";
import { Link } from "react-router-dom";
function B_Section_Heading() {
    return (
        <section className="text-gray-900">
            <div className="px-4 sm:px-8 md:px-4 xl:px-0 max-w-screen-xl mx-auto">
                <div className="flex flex-col justify-center pt-20 sm:pt-24 md:pt-20 pb-10 items-center">
                    <div className="mb-8 font-medium leading-none text-center text-3xl ">
                        Frequently Asked Questions{" "}
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="text-gray-600 tracking-wide font-normal leading-none text-center text-lg mr-2">
                            Can’t find the answer you’re looking for?
                        </div>
                        <Link
                            to="/contact_us"
                            className="text-gray-600 tracking-wide font-normal leading-none text-center text-lg underline"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default B_Section_Heading;
