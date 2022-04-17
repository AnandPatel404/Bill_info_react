import React from "react";

function Forget_password() {
    return (
        <section className="flex flex-col items-center h-screen bg-primary_dark">
            <div className="pt-14 pb-10">
                <div className="text-3xl text-white font-medium">
                    Forgot Password
                </div>
            </div>
            <div className="flex py-6 px-6  md:mx-auto md:w-1/3 rounded items-center justify-center bg-white">
                <div className="w-full h-full flex flex-col">
                    <form action="" className="w-full mx-auto">
                        <div className="flex mb-4 flex-col">
                            <label
                                htmlFor="username"
                                className="text-base font-medium mb-2 text-gray-600"
                            >
                                Mobile No :
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                maxLength="10"
                                placeholder="   Enter registered mobile no."
                                className="py-3 rounded border border-gray-300 placeholder-gray-400"
                            />
                        </div>
                        <div className="justify-end items-center flex-row flex">
                            <button className="forgot_btn px-6 py-4 bg-primary_dark text-white font-medium rounded">
                                submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Forget_password;
