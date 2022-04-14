import { React, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBars,
    faCompress,
    faCircleUser,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
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
        //
    };
    return (
        <section>
            <nav className={`sidebar ${isOpen ? " sidebar" : "close"}`}>
                <header>
                    <div className="logo_and_handburger flex flex-row justify-between px-3 py-2 items-center">
                        <div className="logo">
                            <h1 className="font-semibold text-[1.4rem] text-primary_dark text nav-text">
                                Billinfo
                            </h1>
                        </div>
                        <div
                            className="handburger text-icon_color text-base text nav-text"
                            onClick={closeNav}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                    <div
                        onClick={openNav}
                        className={`bx bx-chevron-right toggle ${
                            isOpen ? "hidden" : " flex"
                        }`}
                    >
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                    </div>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links space-y-5 flex flex-col justify-center ">
                            <li className="nav-link">
                                <Link to="/" className="space-x-4">
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
                                <Link to="/" className="space-x-4">
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
                                <Link to="/" className="space-x-4">
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
                                <Link to="/" className="space-x-4">
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
                                <Link to="/" className="space-x-4">
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
                                <Link to="/" className="space-x-4">
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
                                <Link to="/" className="space-x-4">
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
