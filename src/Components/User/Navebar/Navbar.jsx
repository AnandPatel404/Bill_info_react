import { React, useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faCompress,
    faCircleUser,
    faChevronDown,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    let { path, url } = useRouteMatch();
    const navigation = url.split("/");
    const lastIndex = navigation.slice(-1);
    // console.log(lastIndex);
    const fullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };
    const userProfile = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header id="page-topbar relative ">
            <nav className="fixed right-0 top-0 left-0 z-50 w-full ">
                <div className="main-menu items-center bg-nav_color flex lg:px-5 justify-between px-2 py-4 border-b-[1px]">
                    <div className="icon items-center flex  md:space-x-6 ">
                        <div className="icon cursor-pointer text-icon_color text-base"></div>
                        <div className="navigation hidden md:inline-block">
                            <h1 className="text-black ml-1 md:ml-12 text-xs md:text-xl">
                                <span className="text-base md:text-xl text-black font-semibold ml-1 md:ml-12s">
                                    Dashboard/
                                </span>
                                {lastIndex[0] ? lastIndex[0] : "Dashboard"}
                            </h1>
                        </div>
                        {/* <div>
                            <FontAwesomeIcon
                                icon={faBars}
                                onClick={props.forNav}
                            />
                        </div> */}
                    </div>
                    <div className="two_icon flex text-icon_color text-2xl lg:space-x-5">
                        <div className="collaps_icon hidden lg:inline-block">
                            <FontAwesomeIcon
                                icon={faCompress}
                                onClick={fullScreen}
                            />
                        </div>
                        <div
                            className="user_icon text-icon_color flex items-center gap-2 md:mr-6 cursor-pointer"
                            onClick={userProfile}
                        >
                            <img
                                src="/images/user.png"
                                alt=""
                                className="w-8 h-8"
                            />
                            <p className="text-lg">anand</p>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="text-xxs"
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <div
                className={`profile absolute right-0 top-16 bg-[#fff] py-2 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <div className="flex flex-col space-between ">
                    <div className="change_pasword flex my-2">
                        <div>
                            <FontAwesomeIcon
                                icon={faCircleUser}
                                className="text-[#74788d] mx-2"
                            />
                        </div>
                        <div>
                            <Link
                                to="/users/profile"
                                className="text-[#212529]"
                            >
                                Profile
                            </Link>
                        </div>
                    </div>
                    <div className="change_pasword flex my-2">
                        <div>
                            <FontAwesomeIcon
                                icon={faCircleUser}
                                className="text-[#74788d] mx-2"
                            />
                        </div>
                        <div>
                            <Link to="/" className="text-[#212529]">
                                Change Password
                            </Link>
                        </div>
                    </div>
                    <div className="change_pasword flex my-2 ">
                        <div>
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                className="text-[#74788d] mx-2"
                            />
                        </div>
                        <div>
                            <Link to="/" className="text-[#212529]">
                                Log Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
