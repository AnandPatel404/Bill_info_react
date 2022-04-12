import { React, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBars,
    faCompress,
    faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
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
    };
    return (
        <header id="page-topbar relative ">
            <nav>
                <div className="main-menu items-center bg-nav_color flex lg:px-5 justify-between  px-2 py-4 border-b-[1px]">
                    <div className="icon items-center flex  md:space-x-6 ">
                        <div
                            className="icon cursor-pointer text-icon_color text-base"
                            onClick={openNav}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="navigation hidden md:inline-block">
                            <h1
                                className={`text-xl text-black font-semibold ${
                                    isOpen == true ? "ml-52" : "ml-0"
                                }`}
                            >
                                {lastIndex[0] ? lastIndex[0] : "Dashboard"}
                            </h1>
                        </div>
                    </div>
                    <div className="navigation md:hidden">
                        <h1 className="text-2xl text-black font-semibold">
                            {lastIndex[0] ? lastIndex[0] : "Dashboard"}
                        </h1>
                    </div>
                    <div className="two_icon flex text-icon_color text-2xl lg:space-x-5">
                        <div className="collaps_icon hidden lg:inline-block">
                            <FontAwesomeIcon icon={faCompress} />
                        </div>
                        <div className="user_icon text-icon_color">
                            <FontAwesomeIcon icon={faCircleUser} />
                        </div>
                    </div>
                </div>
            </nav>
            <section
                className={`absolute left-0 top-0 ${
                    isOpen == true ? "inline-block" : "hidden"
                }`}
            >
                <nav className="horizontal_nav bg-nav_color border-r-[1px] w-[250px] h-screen flex flex-col">
                    <div className="logo_and_handburger flex flex-row justify-between px-6 py-5 items-center">
                        <div className="logo">
                            <h1 className="font-semibold text-[1.4rem] text-primary_dark ">
                                Billinfo
                            </h1>
                        </div>
                        <div
                            className="handburger text-icon_color text-base"
                            onClick={closeNav}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                    <div className="flex justify-center px-5 pt-5 pb-7">
                        <ul className="w-full text-center font-medium space-y-8">
                            <li className="flex flex-row space-x-4">
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                />
                                <Link to="/" className="mt-1">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="flex flex-row space-x-4">
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                />
                                <Link to="/" className="mt-1">
                                    Try Services
                                </Link>
                            </li>
                            <li className="flex flex-row space-x-4">
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                />
                                <Link to="/" className="mt-1">
                                    Opretor Status
                                </Link>
                            </li>
                            <hr />
                            <li className="flex flex-row space-x-4">
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                />
                                <Link to="/" className="mt-1">
                                    Buy paln
                                </Link>
                            </li>
                            <li className="flex flex-row space-x-4">
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                />
                                <Link to="/" className="mt-1">
                                    Purchase Report
                                </Link>
                            </li>
                            <li className="flex flex-row space-x-4">
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="flex min-w-[1.5rem] p-2 rounded-full text-[1em] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                />
                                <Link to="/" className="mt-1">
                                    API Docs
                                </Link>
                            </li>
                            <li className="flex flex-row space-x-4">
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                />
                                <Link to="/" className="mt-1">
                                    API Credentials
                                </Link>
                            </li>
                            <hr />
                            <li className="flex flex-row space-x-4">
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="flex min-w-[1.5rem] p-2 rounded-full text-[1rem] leading-[1.40625rem] justify-center items-center bg-[#f1f3f5]"
                                />
                                <Link to="/" className="mt-1">
                                    Setting
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </header>
    );
}

export default Navbar;
