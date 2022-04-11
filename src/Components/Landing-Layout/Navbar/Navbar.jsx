import { React, useState } from "react";
import { Link } from "react-router-dom";
function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="w-full text-white bg-primary_dark border-b-[1px] border-primary_bg top-0 sticky onscroll-shadow transition-shadow duration-500 z-20">
            <div
                className="flex flex-col max-w-screen-xl mx-auto lg:items-center lg:justify-between lg:flex-row px-4 sm:px-8 md:px-4 xl:px-0 lg:py-0 py-3"
                x-data=""
            >
                <div className="flex flex-row items-center justify-between">
                    <Link
                        to="/"
                        className="text-xl font-semibold tracking-widest text-white rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        <div className="flex items-start justify-start">
                            <img
                                src="/images/svg/billinfo_lite_logo.svg"
                                alt=""
                                className="h-6"
                            />
                        </div>
                    </Link>
                    <button
                        className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
                        // onClick="open = !open"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                x-show="!open"
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                                className="block"
                                onClick={() => setIsOpen(!isOpen)}
                            ></path>
                            <path
                                x-show="open"
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                className="hidden"
                            ></path>
                        </svg>
                    </button>
                </div>
                <nav
                    className={`flex-col ${
                        isOpen === true ? "inline-flex" : "hidden"
                    } relative lg:pb-0 lg:flex justify-center items-center w-full lg:flex-row`}
                >
                    <Link
                        to="/"
                        className="bg-transparent pt-5 py-3 text-sm font-medium w-20 lg:mr-5 md:mt-0  hover:text-gray-100 focus:text-gray-100 focus:outline-none whitespace-nowrap focus:shadow-outline text-center hover:border-white hover:border-b-4"
                    >
                        Home
                    </Link>
                    <Link
                        to="/business_api"
                        className="bg-transparent pt-5 py-3 text-sm font-medium w-32 lg:mr-5 md:mt-0  hover:text-gray-100 focus:text-gray-100 focus:outline-none whitespace-nowrap focus:shadow-outline text-center border-b-4 border-primary_dark hover:border-white"
                    >
                        Business API
                    </Link>
                    <Link
                        to="/contact_us"
                        className="bg-transparent pt-5 py-3 text-sm font-medium w-24 lg:mr-24 md:mt-0  hover:text-gray-100 focus:text-gray-100 focus:outline-none whitespace-nowrap focus:shadow-outline text-center border-b-4 border-primary_dark hover:border-white"
                    >
                        Contact Us
                    </Link>
                    <div className="flex flex-row lg:justify-end">
                        <div className="flex flex-col lg:absolute top-3.5 right-36 justify-start px-4">
                            <div className="text-xs leading-none">
                                Business :
                            </div>
                            <Link
                                to="/auth/login"
                                className="inline-flex items-center mt-4 underline pb-2 font-medium rounded text-sm hover:font-semibold text-white hover:text-gray-100 focus:text-gray-100 focus:outline-none md:mt-0"
                            >
                                Sign in
                            </Link>
                        </div>
                        <Link
                            to="/auth/register"
                            className="inline-flex items-center mt-4 lg:absolute top-2.5 right-0 px-4 py-2 font-medium rounded text-sm text-primary bg-white focus:outline-none md:mt-0"
                        >
                            Create Account
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Layout;
