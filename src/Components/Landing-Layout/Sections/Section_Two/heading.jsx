import React from "react";

function Heading() {
    return (
        <section className="text-gray-900 bg-[rgba(17, 51, 83, 0.02)]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-4 xl:px-0'">
                <div className="flex flex-col justify-center pt-20 sm:pt-24 md:pt-28 items-center">
                    <div className="mb-8 font-medium leading-none text-center text-3xl">
                        How does it work? Simple!
                    </div>
                    <div className="text-gray-600 tracking-wide font-normal leading-none text-center text-lg">
                        Fetching bill information on billinfo is as easy as
                        1.2.3
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Heading;
