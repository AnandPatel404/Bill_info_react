import { React, useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
function Navbar_User(props) {
    const [count, setCount] = useState(false);

    const c = () => {
        setCount(!count);
    };
    const close = () => {
        setCount(!count);
    };

    const [isOpen, setIsOpen] = useState(false);
    let { path, url } = useRouteMatch();
    const navigation = url.split("/");
    const lastIndex = `Dashbord | ${navigation.slice(-1)}`;
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
        <section>
            <nav className={`${count ? " close" : ""}`}>
                <div className="logo-name text-primary_dark">
                    <span className="logo_name font-semibold text-[1.4rem]">
                        Billinfo
                    </span>
                </div>

                <div className="menu-items ">
                    <ul className="nav-links space-y-5">
                        <li>
                            <Link to="/users/dashboard">
                                <i>
                                    <Unicons.UilEstate />
                                </i>
                                <span className="link-name">Dahsboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/try_service">
                                <i>
                                    <Unicons.UilEstate />
                                </i>
                                <span className="link-name">Try Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/op_status">
                                <i>
                                    <Unicons.UilEstate />
                                </i>
                                <span className="link-name">
                                    Opretor Status
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/plan">
                                <i>
                                    <Unicons.UilEstate />
                                </i>
                                <span className="link-name">Buy Plan</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/users/purchase_report">
                                <i>
                                    <Unicons.UilEstate />
                                </i>
                                <span className="link-name">
                                    Purchase Report
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/api_docs">
                                <i>
                                    <Unicons.UilEstate />
                                </i>
                                <span className="link-name">API Docs</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/users/api_cred">
                                <i>
                                    <Unicons.UilEstate />
                                </i>
                                <span className="link-name">
                                    API Credentials
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i>
                                    <Unicons.UilEstate />
                                </i>
                                <span className="link-name">Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="dashboard">
                <div className="top">
                    <div className="sidebar-toggle flex items-center space-x-3">
                        <i onClick={c}>
                            <Unicons.UilBars />
                        </i>
                        <h1 className="hidden lg:inline-block text-base">
                            {lastIndex}
                        </h1>
                    </div>
                    <div>
                        <div className="two_icon flex text-icon_color text-2xl lg:space-x-5">
                            <div className="collaps_icon hidden lg:inline-block">
                                <Unicons.UilExpandArrows onClick={fullScreen} />
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
                                <Unicons.UilAngleDown />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`profile z-50 absolute right-0 top-12 md:top-20 bg-[#fff] py-2 ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="flex flex-col space-between ">
                            <div className="change_pasword flex my-2">
                                <div>
                                    <Unicons.UilUserCircle className="text-[#74788d] mx-2" />
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
                                    <Unicons.UilUserCircle className="text-[#74788d] mx-2" />
                                </div>
                                <div>
                                    <Link
                                        to="/users/change_password"
                                        className="text-[#212529]"
                                    >
                                        Change Password
                                    </Link>
                                </div>
                            </div>
                            <div className="change_pasword flex my-2 ">
                                <div>
                                    <Unicons.UilUserCircle className="text-[#74788d] mx-2" />
                                </div>
                                <div>
                                    <Link to="/" className="text-[#212529]">
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dash-content">{props.children}</div>
            </section>
        </section>
    );
}

export default Navbar_User;
