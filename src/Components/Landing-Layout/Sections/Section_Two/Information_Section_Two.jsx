import React from "react";
function Information_Section_Two() {
    const style = {
        "--tw-shadow":
            " 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    };
    return (
        <section className="text-gray-800 bg-double-liteblue bg-[rgba(17, 51, 83, 0.02)]">
            <div className="max-w-screen-xl mx-auto overflow-x-hidden px-4 flex justify-center sm:px-8 md:px-5 lg:px-24 pt-16 pb-24">
                <div className="flex text-left sm:text-center flex-col lg:flex-row justify-center items-start relative w-full">
                    <div className="lg:flex hidden absolute w-3/5 top-20 h-px bg-gray-200"></div>
                    <div className="mt-3 lg:p-4 w-full lg:w-1/3 flex flex-row lg:flex-col lg:justify-center lg:items-center">
                        <div className="px-9 py-5 rounded-lg mb-5 z-10">
                            <svg
                                className="rounded-full "
                                width="60"
                                height="60"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={style}
                            >
                                <circle
                                    cx="256"
                                    cy="256"
                                    r="256"
                                    fill="white"
                                ></circle>
                                <path
                                    d="M249.75 352H280.5V172H249.75L216 192.25V225.5L249.75 204.875V352Z"
                                    fill="#1652F0"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex ml-5 md:ml-4 flex-col lg:items-center">
                            <div className="font-medium text-left text-xl sm:text-xl">
                                Select bill type
                            </div>
                            <div className="mt-2 font-normal text-primary_dark opacity-70 text-base w-full lg:w-11/12">
                                We provide a range of bill categories to choose
                                from
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 lg:p-4 w-full lg:w-1/3 flex flex-row lg:flex-col lg:justify-center lg:items-center">
                        <div className="px-9 py-5 rounded-lg mb-5 z-10">
                            <svg
                                className="shadow-xl rounded-full"
                                width="60"
                                height="60"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="256"
                                    cy="256"
                                    r="256"
                                    fill="white"
                                ></circle>
                                <path
                                    d="M193.5 351.75H317.375V323.375H240.125L286.25 282.5C293.083 276.5 298.792 271.042 303.375 266.125C308.042 261.125 311.542 255.75 313.875 250C316.208 244.167 317.375 236.958 317.375 228.375C317.375 216.625 314.708 206.25 309.375 197.25C304.125 188.167 296.958 181.083 287.875 176C278.792 170.833 268.458 168.25 256.875 168.25C244.458 168.25 233.5 170.708 224 175.625C214.5 180.542 207.083 187.458 201.75 196.375C196.417 205.292 193.75 215.75 193.75 227.75H224.75C224.583 222.25 225.833 217.125 228.5 212.375C231.167 207.625 234.875 203.833 239.625 201C244.458 198.083 250 196.625 256.25 196.625C265.167 196.625 272.417 199.625 278 205.625C283.667 211.542 286.5 219 286.5 228C286.5 232.417 285.292 237 282.875 241.75C280.542 246.5 276.417 251.542 270.5 256.875L193.5 325.5V351.75Z"
                                    fill="#1652F0"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex ml-5 md:ml-4 flex-col lg:items-center">
                            <div className="font-medium text-left text-xl sm:text-xl">
                                Enter bill info
                            </div>
                            <div className="mt-2 font-normal text-primary_dark opacity-70 text-base w-full lgw-11/12">
                                Select operator & enter your bill number to
                                fetch its information
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 lg:p-4 w-full lg:w-1/3 flex flex-row lg:flex-col lg:justify-center lg:items-center">
                        <div className="px-9 py-5 rounded-lg mb-5 z-10">
                            <svg
                                className="shadow-xl rounded-full"
                                width="60"
                                height="60"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle className="cx='256' cy='256' r='256' fill='white'"></circle>
                                <path
                                    d="M252 355.375C263.25 355.375 273.5 352.792 282.75 347.625C292.083 342.375 299.5 335.25 305 326.25C310.583 317.25 313.375 307.083 313.375 295.75C313.375 286.667 311.667 278.208 308.25 270.375C304.833 262.542 299.875 255.917 293.375 250.5C286.875 245.083 279 241.417 269.75 239.5L310.375 200.5V172H200V200.375H274.5L222.5 244.875L236.25 268.625C241.417 265.792 246.625 264.375 251.875 264.375C260.958 264.375 268.375 267.375 274.125 273.375C279.875 279.375 282.75 286.833 282.75 295.75C282.75 304.583 279.792 311.958 273.875 317.875C268.042 323.792 260.708 326.792 251.875 326.875C245.292 326.958 239.208 325.083 233.625 321.25C228.042 317.333 224.208 311.792 222.125 304.625L193 312.5C195.583 321.167 199.792 328.75 205.625 335.25C211.542 341.667 218.5 346.625 226.5 350.125C234.5 353.625 243 355.375 252 355.375Z"
                                    fill="#1652F0"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex ml-5 md:ml-4 flex-col lg:items-center">
                            <div className="font-medium text-left text-xl sm:text-xl">
                                Enjoy!
                            </div>
                            <div className="mt-2 font-normal text-primary_dark opacity-70 text-base w-full lgw-11/12">
                                Your bill will be displayed instantly, you can
                                complete your recharge with your preferred
                                partner.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Information_Section_Two;
