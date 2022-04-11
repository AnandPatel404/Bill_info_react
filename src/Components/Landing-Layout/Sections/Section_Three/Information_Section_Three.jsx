import React from "react";

function Information_Section_Three() {
    return (
        <section className="text-gray-900">
            <div className="max-w-screen-xl items-center mx-auto pt-0 pb-20 px-5 lg:px-24 overflow-x-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
                    <div className=" w-full mx-auto ">
                        <div className="p-6 mx-auto">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 ml-auto text-black">
                                <img
                                    src="/images/svg/watch.svg"
                                    alt=""
                                    className="w-16"
                                />
                            </div>
                            <h2 className="mb-8 text-xl text-black font-semibold">
                                Easy and Quick
                            </h2>
                            <p className="mx-auto mb-8 text-base px-5 text-gray-600 font-light">
                                With our unique features, you can fetch your
                                bill information on the go.
                            </p>
                        </div>
                    </div>
                    <div className="w-full mx-auto ">
                        <div className="p-6 mx-auto">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 ml-auto text-black">
                                <img
                                    src="/images/svg/Analitics.svg"
                                    alt=""
                                    className="w-16"
                                />
                            </div>
                            <h2 className="mb-8 text-xl text-black font-semibold">
                                Best of the best
                            </h2>
                            <p className="mx-auto mb-8 text-base px-5 text-gray-600 font-light">
                                Explore the best offers from your favorite
                                service provider.
                            </p>
                        </div>
                    </div>
                    <div className="w-full mx-auto ">
                        <div className="p-6 mx-auto">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 ml-auto text-black">
                                <img
                                    src="/images/svg/trushted.svg"
                                    alt=""
                                    className="w-16"
                                />
                            </div>
                            <h2 className="mb-8 text-xl text-black font-semibold">
                                Trusted & safe
                            </h2>
                            <p className="mx-auto mb-8 text-base px-5 text-gray-600 font-light">
                                We use the best security and several layers of
                                protocols to keep all your information safe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Information_Section_Three;
