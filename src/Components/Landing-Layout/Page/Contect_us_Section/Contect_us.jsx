import React from "react";

function Contect_us() {
    return (
        <section className="text-gray-900 border-b">
            <div className="pt-16 pb-16 md:flex-row px-4 sm:px-8 md:px-4 xl:px-0 max-w-screen-lg mx-auto items-center flex-col flex">
                <div className="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 md:items-start md:mb-0">
                    <div className="mb-8 flex-col flex">
                        <div className="mb-4 font-medium leading-none  text-3xl">
                            We're here to help
                        </div>
                        <div className="w-full text-gray-600 tracking-wide font-normal leading-none  text-lg">
                            Have any questions? We'd love to hear from you.
                        </div>
                    </div>
                    <div className="w-3/4 flex-col flex">
                        <form action="" className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="Name"
                                        className="text-lg font-medium mb-2"
                                    >
                                        Name :
                                    </label>
                                    <input
                                        type="text"
                                        className="py-5 rounded border border-gray-300 placeholder-gray-400"
                                        id="mobile_no"
                                        placeholder="   Enter your name"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="mobile_no"
                                        className="text-lg font-medium mb-2"
                                    >
                                        Mobile no. :
                                    </label>
                                    <input
                                        type="number"
                                        className="py-5 rounded border border-gray-300 placeholder-gray-400"
                                        id="mobile_no"
                                        placeholder="   Enter your mobile no."
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="mobile_no"
                                        className="text-lg font-medium mb-2"
                                    >
                                        Email :
                                    </label>
                                    <input
                                        type="email"
                                        className="py-5 rounded border border-gray-300 placeholder-gray-400"
                                        id="email"
                                        placeholder="   Enter your email address"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="mobile_no"
                                        className="text-lg font-medium mb-2"
                                    >
                                        Message :
                                    </label>
                                    <input
                                        type="text"
                                        className="py-5 rounded border border-gray-300 placeholder-gray-400"
                                        id="mobile_no"
                                        placeholder="   Enter your message"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="flex items-end h-full pt-2 ">
                                    <button
                                        type="submit"
                                        className="mt-auto px-4 py-5 bg-primary_dark border border-primary_dark text-white font-medium rounded modal-open"
                                        data-toggle="modal"
                                        data-target="prepaidPlan"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img
                        src="/images/svg/contact_us_img.svg"
                        alt=""
                        className="object-cover object-center rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default Contect_us;
