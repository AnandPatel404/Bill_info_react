import { React, useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
function Navbar_User(props) {
    const [count, setCount] = useState(false);

    const c = () => {
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

    // useEffect(() => {
    //     document.querySelectorAll("ul li").forEach((items) => {
    //         console.log(items);
    //         items.addEventListener("click", (e) => {
    //             e.preventDefault();
    //             document.querySelectorAll("li").forEach((em) => {
    //                 em.classList.remove("activeNAv");
    //             });
    //             items.classList.add("activeNAv");
    //         });
    //     });
    // });
    return (
        <section className="overflow-hidden">
            <nav className={`${count ? " close" : ""}`}>
                <div className="logo-name items-center">
                    <span className="logo_name font-semibold text-[1.4rem] cursor-pointer">
                        <Link
                            to="/users/dashboard"
                            className=" text-primary_dark"
                        >
                            Billinfo
                        </Link>
                    </span>
                    {/* <i onClick={c} className=" cursor-pointer">
                        <Unicons.UilTimes />
                    </i> */}
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
                        {/* <li>
                            <Link to="/users/try_service">
                                <i>
                                    <Unicons.UilAnalysis />
                                </i>
                                <span className="link-name">Try Service</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/users/op_status">
                                <i>
                                    <Unicons.UilAnalysis />
                                </i>
                                <span className="link-name">
                                    Opretor Status
                                </span>
                            </Link>
                        </li>
                        <li>
                            <hr />
                        </li>
                        {/* TODO : this is gst billing */}
                        <li>
                            <Link to="/users/gst/bill_details">
                                <i>
                                    <Unicons.UilBriefcase />
                                </i>
                                <span className="link-name">
                                    Gst Billing Details
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/plan">
                                <i>
                                    <Unicons.UilShoppingBag />
                                </i>
                                <span className="link-name">Buy Plan</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/purchase_report">
                                <i>
                                    <Unicons.UilNotes />
                                </i>
                                <span className="link-name">
                                    Purchase Report
                                </span>
                            </Link>
                        </li>
                        <hr />
                        {/* TODO : this is invoice */}
                        <li>
                            <Link to="/users/purchase_report">
                                <i>
                                    <Unicons.UilNotes />
                                </i>
                                <span className="link-name">invoices</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/users/api_docs">
                                <i>
                                    <Unicons.UilReceipt />
                                </i>
                                <span className="link-name">API Docs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/api_cred">
                                <i>
                                    <Unicons.UilBracketsCurly />
                                </i>
                                <span className="link-name">
                                    API Credentials
                                </span>
                            </Link>
                        </li>
                        <li>
                            <hr />
                            <Link to="/">
                                <i>
                                    <Unicons.UilLockAlt />
                                </i>
                                <span className="link-name">Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="dashboard">
                <div className="top">
                    <div className="py-3 sidebar-toggle flex items-center space-x-3">
                        {count ? (
                            <i onClick={c}>
                                <Unicons.UilBars />
                            </i>
                        ) : (
                            <i onClick={c}>
                                <Unicons.UilTimes />
                            </i>
                        )}

                        <h1 className="hidden lg:inline-block text-base">
                            {lastIndex}
                        </h1>
                    </div>
                    <div>
                        <div className="two_icon flex text-icon_color text-2xl lg:space-x-3">
                            <div className="collaps_icon hidden lg:inline-block items-center mt-1">
                                <Unicons.UilMinusPath onClick={fullScreen} />
                            </div>
                            <div
                                className="user_icon text-icon_color flex items-center  md:mr-6 cursor-pointer"
                                onClick={userProfile}
                            >
                                <img
                                    src="/images/user.png"
                                    alt=""
                                    className="w-9 h-9 p-1"
                                />
                                <p className="text-base text-center">anand</p>
                                <i className="text-xs">
                                    <Unicons.UilAngleDown />
                                </i>
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
