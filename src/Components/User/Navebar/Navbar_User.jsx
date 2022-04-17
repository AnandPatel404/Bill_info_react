import { React, useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar_User() {
    const [isOpen, setIsOpen] = useState(false);
    let { path, url } = useRouteMatch();
    const navigation = url.split("/");
    const lastIndex = navigation.slice(-1);
    console.log(lastIndex);
    const openNav = () => {
        setIsOpen(true);
    };
    const closeNav = () => {
        setIsOpen(false);
        console.log("closed");
    };
    useEffect(() => {
        document.title = `Billinfo | ${lastIndex}`;
    });
    return (
        <section>
            <nav
                className={`sidebar hidden md:inline-block ${
                    isOpen ? " sidebar" : "close"
                }`}
            >
                <header>
                    <div className="logo_and_handburger flex flex-row justify-between px-3 py-2 items-center">
                        <div className="logo">
                            <h1 className="font-semibold text-[1.4rem] text-primary_dark text nav-text">
                                Billinfo
                            </h1>
                        </div>
                        <div
                            className="handburger text-icon_color text-xl text nav-text"
                            onClick={closeNav}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div
                        onClick={openNav}
                        className={`bx bx-chevron-right toggle ${
                            isOpen ? "hidden" : " flex"
                        }`}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links space-y-5 flex flex-col justify-center font-semibold">
                            <li className="nav-link">
                                <Link
                                    to="/users/dashboard"
                                    className="space-x-4"
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="flex min-w-[1.5rem] text-primary_dark p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                    />
                                    <span className="text nav-text">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link
                                    to="/users/try_service"
                                    className="space-x-4"
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                    />
                                    <span className="text nav-text">
                                        Try Service
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link
                                    to="/users/op_status"
                                    className="space-x-4"
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                    />
                                    <span className="text nav-text">
                                        Opretor Status
                                    </span>
                                </Link>
                            </li>
                            <hr />
                            <li className="nav-link">
                                <Link to="/users/plan" className="space-x-4">
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                    />
                                    <span className="text nav-text">
                                        Buy Plan
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link
                                    to="/users/purchase_report"
                                    className="space-x-4"
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                    />
                                    <span className="text nav-text">
                                        Purchase Report
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link
                                    to="/users/api_docs"
                                    className="space-x-4"
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                    />
                                    <span className="text nav-text">
                                        API Docs
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link
                                    to="/users/api_cred"
                                    className="space-x-4"
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                    />
                                    <span className="text nav-text">
                                        API Credentials
                                    </span>
                                </Link>
                            </li>
                            <hr />
                            <li className="nav-link">
                                <Link to="/" className="space-x-4">
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                    />
                                    <span className="text nav-text">
                                        Settings
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar_User;
