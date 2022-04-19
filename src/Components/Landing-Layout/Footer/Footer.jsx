import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="text-gray-700 transition.duration-500 ease-in-out transform bg-white">
            <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto md:items-center lg:items-start lg:flex-row md:flex-no-wrap py-20 px-4 sm:px-8 md:px-4 xl:px-0">
                <div className="flex flex-col w-64 mx-auto text-center md:mx-0 md:text-left">
                    <Link
                        to="/"
                        className="text-xl font-semibold tracking-widest text-primary rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        <div className="flex items-start justify-start">
                            <img
                                src="/images/svg/billinfo_dark_logo.svg"
                                alt=""
                                className="h-4"
                            />
                        </div>
                    </Link>
                    <div className="w-2/3 text-xs mt-5 text-gray-600">
                        Explore the best recharge plan and offers from your
                        favorite service provider.
                    </div>
                </div>
                <div className="md:pl-20 md:mt-0 flex flex-wrap flex-grow mt-8 -mb-10 text-left">
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h1 className="mb-3 text-base font-medium text-black">
                            Recharge plan API
                        </h1>
                        <ul className="mb-10 space-y-1 list-none">
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Prepaid plan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    121 offers plan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Operator check API
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    DTH plan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Gplay gc check API
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h1 className="mb-3 text-base font-medium text-black">
                            Bill payment fetch API
                        </h1>
                        <ul className="mb-10 space-y-1 list-none">
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Postpaid bill
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Electricity bill
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Water bill
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Gas bill
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Broadband
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h1 className="mb-3 text-base font-medium text-black">
                            Other service
                        </h1>
                        <ul className="mb-10 space-y-1 list-none">
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Credit card bill
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Health insurance
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Loan EMI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Municipal tax
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/business_api"
                                    className="mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-sm ring-offset-current ring-offset-2"
                                >
                                    Insurance
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full px-8 mt-4 rounded-b-lg">
                <div className=" flex flex-col flex-wrap mx-auto items-start md:flex-row md:flex-no-wrap py-5 px-4 sm:px-8 md:px-4 xl:px-0">
                    <p className="sm:text-left text-sm text-center text-black">
                        © 2021 billinfo.in
                    </p>
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <Link
                            to="/contact_us"
                            className="text-gray-900 text-sm"
                        >
                            Help
                        </Link>
                        <Link to="/terms" className="text-gray-900 text-sm">
                            Terms Of Service
                        </Link>
                        <Link to="/privacy" className="text-gray-900 text-sm">
                            Privacy Policy
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
