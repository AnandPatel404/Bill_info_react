import { React, useState } from "react";

function B_Section_Information() {
    const [state, setState] = useState(false);
    const open = () => {
        setState(true);
        if (state === true) {
            setInterval(() => {
                setState(false);
            }, 6000);
        }
    };
    return (
        <section className="text-gray-900">
            <div className="max-w-screen-xl px-4 sm:px-8 md:px-4 xl:px-24 mx-auto">
                <div className="mb-16 sm:mb-20 lg:mb-24 mt-2 sm:mt-10 Accordion">
                    <ul className="Accordion__tabs list-none w-full">
                        <li className="Accordion__tab w-full">
                            <div className="Accordion__tab__headline flex justify-between items-center transition py-7 cursor-pointer">
                                <div className="text-primary_dark w-full text-xl font-medium select-none">
                                    What is the API hit limit?
                                </div>
                                <span className="icon" onClick={open}></span>
                            </div>
                            <div
                                className={`font-normal text-base Accordion__tab__content border-b-2 border-gray-300 overflow-hidden text-gray-600 ${
                                    state === true ? "max-h-8" : "max-h-0"
                                }`}
                            >
                                <div className="wrapper">
                                    <p className="pb-5">
                                        API hit limit will depend on your
                                        package.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="Accordion__tab w-full">
                            <div className="Accordion__tab__headline flex justify-between items-center transition py-7 cursor-pointer">
                                <div className="text-primary_dark w-full text-xl font-medium select-none">
                                    What are 121 offers?
                                </div>
                                <span className="icon" onClick={open}></span>
                            </div>
                            <div
                                className={`font-normal text-base Accordion__tab__content border-b-2 border-gray-300 overflow-hidden text-gray-600 ${
                                    state === true ? "max-h-8" : "max-h-0"
                                }`}
                            >
                                <div className="wrapper">
                                    <p className="pb-5">
                                        121 offers are personalized offers by
                                        your operator.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="Accordion__tab w-full">
                            <div className="Accordion__tab__headline flex justify-between items-center transition py-7 cursor-pointer">
                                <div className="text-primary_dark w-full text-xl font-medium select-none">
                                    What plans are provided in the API?
                                </div>
                                <span className="icon" onClick={open}></span>
                            </div>
                            <div
                                className={`font-normal text-base Accordion__tab__content border-b-2 border-gray-300 overflow-hidden text-gray-600 ${
                                    state === true ? "max-h-8" : "max-h-0"
                                }`}
                            >
                                <div className="wrapper">
                                    <p className="pb-5">
                                        Our API provides Prepaid plan, 121
                                        offers plan, Operator check API, DTH
                                        plan, Gplay gc check API.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="Accordion__tab w-full">
                            <div className="Accordion__tab__headline flex justify-between items-center transition py-7 cursor-pointer">
                                <div className="text-primary_dark w-full text-xl font-medium select-none">
                                    What plans are provided in the API?
                                </div>
                                <span className="icon" onClick={open}></span>
                            </div>
                            <div
                                className={`font-normal text-base Accordion__tab__content border-b-2 border-gray-300 overflow-hidden text-gray-600 ${
                                    state === true ? "max-h-8" : "max-h-0"
                                }`}
                            >
                                <div className="wrapper">
                                    <p className="pb-5">
                                        Our API provides Prepaid plan, 121
                                        offers plan, Operator check API, DTH
                                        plan, Gplay gc check API.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="Accordion__tab w-full">
                            <div className="Accordion__tab__headline flex justify-between items-center transition py-7 cursor-pointer">
                                <div className="text-primary_dark w-full text-xl font-medium select-none">
                                    Do you provide Amount validation API ?
                                </div>
                                <span className="icon" onClick={open}></span>
                            </div>
                            <div
                                className={`font-normal text-base Accordion__tab__content border-b-2 border-gray-300 overflow-hidden text-gray-600 ${
                                    state === true ? "max-h-8" : "max-h-0"
                                }`}
                            >
                                <div className="wrapper">
                                    <p className="pb-5">Yes, We provide.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default B_Section_Information;
