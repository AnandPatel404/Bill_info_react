import { React, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCompress,
    faCircleUser,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let { path, url } = useRouteMatch();
    const navigation = url.split("/");
    const lastIndex = navigation.slice(-1);
    // console.log(lastIndex);
    const openNav = () => {
        setIsOpen(true);
    };
    const closeNav = () => {
        setIsOpen(false);
    };
    const fullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };
    return (
        <header id="page-topbar relative ">
            <nav className="fixed right-0 top-0 left-0 z-50 w-full ">
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
                                className={`text-xl text-black font-semibold ml-20`}
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
                            <FontAwesomeIcon
                                icon={faCompress}
                                onClick={fullScreen}
                            />
                        </div>
                        <div className="user_icon text-icon_color flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircleUser} />
                            <p className="text-lg">anand</p>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="text-xs"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
