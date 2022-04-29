import React from "react";
import { Link } from "react-router-dom";
function grid() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4">
            <div className="p-6 flex flex-col shadw border-[1px] border-[#eceff1] bg-[#fff]">
                <div className="px-1">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="flex flex-col text-center md:text-left">
                            <h1 className="text-primary text-2xl font-medium mb-2">
                                White List IP
                            </h1>
                            <p className="text-[#74788d] text-xs mb-2">
                                IP whitelisting is when you grant network access
                                only to specific IP addresses
                            </p>
                        </div>
                        <div className="flex w-2/4 my-2 md:w-11/12 items-center justify-center lg:items-start px-2 md:justify-end order-first md:order-last">
                            <svg
                                className="px-4 "
                                viewBox="0 0 256 256"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M224 0H32V256H224V0Z"
                                    fill="#BFE9FF"
                                ></path>
                                <path
                                    d="M256 168H0V220H256V168Z"
                                    fill="#56B4FC"
                                ></path>
                                <path
                                    d="M256 102H0V154H256V102Z"
                                    fill="#56B4FC"
                                ></path>
                                <path
                                    d="M256 36H0V88H256V36Z"
                                    fill="#56B4FC"
                                ></path>
                                <path
                                    d="M224 168H32V220H224V168Z"
                                    fill="#1652F0"
                                ></path>
                                <path
                                    d="M155.2 210C158.956 210 162 206.956 162 203.2C162 199.444 158.956 196.4 155.2 196.4C151.444 196.4 148.4 199.444 148.4 203.2C148.4 206.956 151.444 210 155.2 210Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M177.2 210C180.956 210 184 206.956 184 203.2C184 199.444 180.956 196.4 177.2 196.4C173.444 196.4 170.4 199.444 170.4 203.2C170.4 206.956 173.444 210 177.2 210Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M198.4 210C202.155 210 205.2 206.956 205.2 203.2C205.2 199.444 202.155 196.4 198.4 196.4C194.644 196.4 191.6 199.444 191.6 203.2C191.6 206.956 194.644 210 198.4 210Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M224 102H32V154H224V102Z"
                                    fill="#1652F0"
                                ></path>
                                <path
                                    d="M155.2 144C158.956 144 162 140.956 162 137.2C162 133.444 158.956 130.4 155.2 130.4C151.444 130.4 148.4 133.444 148.4 137.2C148.4 140.956 151.444 144 155.2 144Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M177.2 144C180.956 144 184 140.956 184 137.2C184 133.444 180.956 130.4 177.2 130.4C173.444 130.4 170.4 133.444 170.4 137.2C170.4 140.956 173.444 144 177.2 144Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M198.4 144C202.155 144 205.2 140.956 205.2 137.2C205.2 133.444 202.155 130.4 198.4 130.4C194.644 130.4 191.6 133.444 191.6 137.2C191.6 140.956 194.644 144 198.4 144Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M224 36H32V88H224V36Z"
                                    fill="#1652F0"
                                ></path>
                                <path
                                    d="M155.2 78C158.956 78 162 74.9555 162 71.2C162 67.4445 158.956 64.4 155.2 64.4C151.444 64.4 148.4 67.4445 148.4 71.2C148.4 74.9555 151.444 78 155.2 78Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M177.2 78C180.956 78 184 74.9555 184 71.2C184 67.4445 180.956 64.4 177.2 64.4C173.444 64.4 170.4 67.4445 170.4 71.2C170.4 74.9555 173.444 78 177.2 78Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M198.4 78C202.155 78 205.2 74.9555 205.2 71.2C205.2 67.4445 202.155 64.4 198.4 64.4C194.644 64.4 191.6 67.4445 191.6 71.2C191.6 74.9555 194.644 78 198.4 78Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start">
                    <Link
                        className="mt-8  btn btn-outline-primary waves-effect waves-primary"
                        to="/users/api_cred"
                    >
                        Set ip Address
                    </Link>
                </div>
            </div>
            <div className="p-6 flex flex-col shadw border-[1px] bg-[#fff]">
                <div className="px-1">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="flex flex-col text-center md:text-left">
                            <h1 className="text-primary text-2xl font-medium mb-2">
                                Operator Status
                            </h1>
                            <p className="text-[#74788d] text-xs mb-2">
                                You can check Plans, Roffer & Bill fetch
                                operator status in Live
                            </p>
                        </div>
                        <div className="flex w-2/4 my-2 md:w-11/12 items-center justify-center lg:items-start px-2 md:justify-end order-first md:order-last">
                            <svg
                                className="px-4"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_413_3248)">
                                    <rect
                                        y="48"
                                        width="512"
                                        height="414"
                                        fill="#D4EEFF"
                                    ></rect>
                                    <rect
                                        x="155"
                                        y="179"
                                        width="287"
                                        height="18"
                                        fill="#1652F0"
                                    ></rect>
                                    <rect
                                        x="155"
                                        y="38"
                                        width="287"
                                        height="18"
                                        fill="#1652F0"
                                    ></rect>
                                    <rect
                                        x="155"
                                        y="85"
                                        width="287"
                                        height="18"
                                        fill="#1652F0"
                                    ></rect>
                                    <rect
                                        x="155"
                                        y="132"
                                        width="287"
                                        height="18"
                                        fill="#1652F0"
                                    ></rect>
                                    <rect
                                        x="67"
                                        y="48"
                                        width="379"
                                        height="414"
                                        fill="#1652F0"
                                    ></rect>
                                    <rect
                                        x="67"
                                        width="379"
                                        height="48"
                                        fill="#56B4FC"
                                    ></rect>
                                    <rect
                                        x="67"
                                        y="462"
                                        width="379"
                                        height="50"
                                        fill="#56B4FC"
                                    ></rect>
                                    <path
                                        d="M401 399L294.479 291L507.521 291L401 399Z"
                                        fill="white"
                                    ></path>
                                    <path
                                        d="M114 94L220.521 202L7.47887 202L114 94Z"
                                        fill="white"
                                    ></path>
                                    <rect
                                        x="261"
                                        y="94"
                                        width="156"
                                        height="20"
                                        fill="white"
                                    ></rect>
                                    <rect
                                        x="261"
                                        y="181"
                                        width="156"
                                        height="20"
                                        fill="white"
                                    ></rect>
                                    <rect
                                        x="261"
                                        y="138"
                                        width="156"
                                        height="19"
                                        fill="white"
                                    ></rect>
                                </g>
                                <defs>
                                    <clippath id="clip0_413_3248">
                                        <rect
                                            width="512"
                                            height="512"
                                            fill="white"
                                        ></rect>
                                    </clippath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start">
                    <Link
                        className="mt-8  btn btn-outline-primary waves-effect waves-primary"
                        to="/users/api_cred"
                    >
                        Live status
                    </Link>
                </div>
            </div>
            <div className="p-6 flex flex-col shadw border-[1px] bg-[#fff]">
                <div className="px-1">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="flex flex-col text-center md:text-left">
                            <h1 className="text-primary text-2xl font-medium mb-2">
                                API Docs
                            </h1>
                            <p className="text-[#74788d] text-xs mb-2">
                                Connect Billinfo with your platform
                            </p>
                        </div>
                        <div className="flex w-2/4 my-2 md:w-11/12 items-center justify-center lg:items-start px-2 md:justify-end order-first md:order-last">
                            <svg
                                className="px-4 md:w-8/12"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_409_3253)">
                                    <path
                                        d="M24 81V512H404V81H24Z"
                                        fill="#1652F0"
                                    ></path>
                                    <path
                                        d="M421.461 424.163L433.443 387.034L468.554 405.319L494.33 379.497L475.381 344.881L513 333.017L513 296.587L475.381 284.583L493.633 250.665L467.858 224.843L432.747 243.128L420.764 206L384.957 206L372.975 243.128L337.864 224.843L312.367 250.665L330.619 285.281L293 297.285L293 333.715L330.619 345.719L312.367 380.335L338.142 406.157L373.253 387.872L385.236 425L421.6 425L421.6 424.163L421.461 424.163Z"
                                        fill="#56B4FC"
                                    ></path>
                                    <path
                                        d="M422.597 419.982L433.375 387.362L468.648 405.623L494.544 379.834L476.907 344.705L513.3 333.413L514 295.775L476.207 284.483L494.543 250.609L468.648 224.819L433.375 243.081L421.337 206L403 206L403 425L421.337 425L422.597 419.982Z"
                                        fill="#1652F0"
                                    ></path>
                                    <path
                                        d="M376 314.5C376 329.688 388.312 342 403.5 342C418.688 342 431 329.688 431 314.5C431 299.312 418.688 287 403.5 287C388.312 287 376 299.312 376 314.5Z"
                                        fill="white"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M24 81H404L323.5 0H24V81Z"
                                        fill="#D4EEFF"
                                    ></path>
                                    <rect
                                        x="74"
                                        y="130"
                                        width="219"
                                        height="18"
                                        fill="white"
                                    ></rect>
                                    <rect
                                        x="74"
                                        y="176"
                                        width="219"
                                        height="18"
                                        fill="white"
                                    ></rect>
                                </g>
                                <defs>
                                    <clippath id="clip0_409_3253">
                                        <rect
                                            width="512"
                                            height="512"
                                            fill="white"
                                        ></rect>
                                    </clippath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start">
                    <Link
                        className="btn btn-outline-primary waves-effect waves-primary"
                        to="/users/api_cred"
                    >
                        Read Api Docs
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default grid;
