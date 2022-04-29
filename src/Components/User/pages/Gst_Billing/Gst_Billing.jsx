import React from "react";
import Card from "../../../Helper/Card";
function Gst_Billing() {
    return (
        <div className="p-4 flex flex-col justify-center items-center lg:flex-row lg:items-start">
            <div className="px-4">
                <svg
                    class="w-100 p-2 pt-0"
                    width="64"
                    height="60"
                    viewBox="0 0 48 48"
                    fill="none"
                >
                    <path d="M48 6H0V35.25H48V6Z" fill="#BFE9FF"></path>
                    <path
                        d="M36.75 33.1275L32.3775 31.7775L34.515 27.735L31.515 24.735L27.4725 26.8725L26.1225 22.5H21.8775L20.5275 26.8725L16.485 24.735L13.485 27.735L15.6225 31.7775L11.25 33.1275V37.3725L15.6225 38.7225L13.485 42.765L16.485 45.765L20.5275 43.6275L21.8775 48H26.1225L27.4725 43.6275L31.515 45.765L34.515 42.765L32.3775 38.7225L36.75 37.3725V33.1275Z"
                        fill="#56B4FC"
                    ></path>
                    <path
                        d="M36.75 33.1275L32.3775 31.7775L34.515 27.735L31.515 24.735L27.4725 26.8725L26.1225 22.5H21.8775L20.5275 26.8725L16.485 24.735L13.485 27.735L15.6225 31.7775L11.25 33.1275V35.25H36.75V33.1275Z"
                        fill="#1652F0"
                    ></path>
                    <path
                        d="M48 6H0V1.5C0 0.675 0.675 0 1.5 0H46.5C47.325 0 48 0.675 48 1.5V6Z"
                        fill="#1652F0"
                    ></path>
                    <path
                        d="M24 38.25C25.6569 38.25 27 36.9069 27 35.25C27 33.5931 25.6569 32.25 24 32.25C22.3431 32.25 21 33.5931 21 35.25C21 36.9069 22.3431 38.25 24 38.25Z"
                        fill="white"
                    ></path>
                    <path
                        d="M24 28.875C27.5175 28.875 30.375 31.7325 30.375 35.25C30.375 38.7675 27.5175 41.625 24 41.625C20.4825 41.625 17.625 38.7675 17.625 35.25C17.625 31.7325 20.4825 28.875 24 28.875ZM24 28.125C20.07 28.125 16.875 31.32 16.875 35.25C16.875 39.18 20.07 42.375 24 42.375C27.93 42.375 31.125 39.18 31.125 35.25C31.125 31.32 27.93 28.125 24 28.125Z"
                        fill="white"
                    ></path>
                    <path
                        d="M3.75 3.75C4.16421 3.75 4.5 3.41421 4.5 3C4.5 2.58579 4.16421 2.25 3.75 2.25C3.33579 2.25 3 2.58579 3 3C3 3.41421 3.33579 3.75 3.75 3.75Z"
                        fill="white"
                    ></path>
                    <path
                        d="M6.75 3.75C7.16421 3.75 7.5 3.41421 7.5 3C7.5 2.58579 7.16421 2.25 6.75 2.25C6.33579 2.25 6 2.58579 6 3C6 3.41421 6.33579 3.75 6.75 3.75Z"
                        fill="white"
                    ></path>
                    <path
                        d="M9.75 3.75C10.1642 3.75 10.5 3.41421 10.5 3C10.5 2.58579 10.1642 2.25 9.75 2.25C9.33579 2.25 9 2.58579 9 3C9 3.41421 9.33579 3.75 9.75 3.75Z"
                        fill="white"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-1 flex-col  ">
                <h1 className="text-[#495057] mb-1 font-semibold">GST no.</h1>
                <p className="text-[#74788d] mb-6">
                    Enter GST no. for add GST in your invoice.
                </p>
                <div>
                    <form
                        action=""
                        className="flex flex-col space-y-7 lg:space-y-0  lg:flex-row lg:space-x-7 "
                    >
                        <input
                            type="text"
                            name="Gst no"
                            id="Gst"
                            placeholder="  Gst no."
                            className="form-control w-full  lg:w-2/5"
                        />
                        <button
                            type="submit"
                            className="bg-primary_dark text-white rounded-md py-2 lg:py-0 lg:px-10"
                        >
                            Verify Gst
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Gst_Billing;
