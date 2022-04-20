import React from "react";

function B_Section_Two_blue() {
    return (
        <section className="text-white bg-primary_dark">
            <div className=" max-w-screen-xl px-5 py-12 mx-auto">
                <div className="flex flex-col md:flex-row text-center">
                    <div className="p-4 md:w-1/3">
                        <h2 className="title-font font-medium text-3xl text-white sm:text-5xl">
                            500K+
                        </h2>
                        <p className="leading-relaxed">
                            Daily bill fetch API hits
                        </p>
                    </div>
                    <hr />
                    <div className="p-4 md:w-1/3">
                        <h2 className="title-font font-medium text-3xl text-white sm:text-5xl">
                            250+
                        </h2>
                        <p className="leading-relaxed">
                            Operator bill fetch APIs
                        </p>
                    </div>
                    <hr />
                    <div className="p-4 md:w-1/3">
                        <h2 className="title-font font-medium text-3xl text-white sm:text-5xl">
                            500+
                        </h2>
                        <p className="leading-relaxed">Happy users</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default B_Section_Two_blue;
