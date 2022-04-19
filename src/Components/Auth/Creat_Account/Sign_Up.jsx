import { useGetUserMutation } from "../../../Redux/Api/User_SIgn";
import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
function Sign_Up() {
    const [Name, setName] = useState("");
    const [userName, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Referral, setReferral] = useState("");
    const forName = (e) => {
        setName(e.target.value);
    };
    const forUserName = (e) => {
        setUsername(e.target.value);
    };
    const forUserEmail = (e) => {
        setEmail(e.target.value);
    };
    const forReferral = (e) => {
        setReferral(e.target.value);
    };
    const [forShow, setForShow] = useState(false);
    const [otps, setOtp] = useState(false);
    const [forPasswords, setForPasswords] = useState(false);
    // const name = useRef(null);
    // const email = useRef(null);
    // const username = useRef(null);
    // const referral_code = useRef(null);
    // const otp_code = useRef(null);
    // const password = useRef(null);
    // const conformPassword = useRef(null);
    // const has = useRef(null);

    // const otpdataSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         if (otp_code.current.value == "") {
    //             swal("Oops!", "Please fill all the fields", "error");
    //         }
    //         await fetch("http://localhost:8000/auth/otp_verify", {
    //             method: "post",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 otp: otp_code.current.value,
    //                 username: username.current.value,
    //             }),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 if (data.status === "success") {
    //                     swal(
    //                         "Success",
    //                         "You have successfully signed up",
    //                         "success"
    //                     );
    //                     setForPasswords(false);
    //                     window.localStorage.setItem("hash", data.hash);
    //                 } else {
    //                     swal("Error", "Something went wrong", "error");
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // // finel setp

    // const finelSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await fetch("http://localhost:8000/auth/register_set_password", {
    //             method: "post",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name: name.current.value,
    //                 username: username.current.value,
    //                 email: email.current.value,
    //                 referral_code: referral_code.current.value,
    //                 password: password.current.value,
    //                 confirm_password: conformPassword.current.value,
    //                 hash: window.localStorage.getItem("hash"),
    //             }),
    //         })
    //             .then((res) => res.json())
    //             .then((res) => {
    //                 if (res.status == "success") {
    //                     swal(
    //                         "Success",
    //                         "You have successfully signed up",
    //                         "success"
    //                     );
    //                     window.localStorage.removeItem("hash");
    //                     History.push("/auth/login");
    //                 } else {
    //                     swal({
    //                         title: res.title,
    //                         text: res.msg,
    //                         icon: res.status,
    //                     });
    //                 }
    //             });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    const [creatUser, response] = useGetUserMutation();
    const userdata = {
        name: Name,
        username: userName,
        email: Email,
        referral_code: Referral,
    };
    console.log(response);
    // console.log(userdata);
    const submit = async (e) => {
        e.preventDefault();
        try {
            if (Name == "" || Email == "" || userName == "") {
                swal("Oops!", "Please fill all the fields", "error");
            }
            await creatUser(userdata).then((response) => {
                if (response.data.status === "success") {
                    swal(
                        "Success",
                        "You have successfully signed up",
                        "success"
                    );
                    setOtp(true);
                    setForPasswords(true);
                } else {
                    swal({
                        title: response.data.title,
                        text: response.data.msg,
                        icon: response.data.status,
                    });
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section>
            <section
                className={`${
                    otps === false && forPasswords == false ? "flex" : "hidden"
                } flex-col items-center h-screen bg-primary_dark`}
                id="register_form"
            >
                <div className="pt-14 pb-10">
                    <div className="text-3xl text-white font-medium">
                        Create an Account for free
                    </div>
                </div>
                <div
                    className="flex py-6 px-6 md:max-w-md lg:max-w-full md:mx-auto w-1/3 rounded items-center justify-center bg-white"
                    style={{ boxShadow: "0 1px 46px -4px rgb(0 0 0 / 28%)" }}
                >
                    <div className="w-full h-full flex flex-col">
                        <form
                            action=""
                            className="w-full mx-auto"
                            method="post"
                        >
                            <div className="flex mb-4 flex-col">
                                <label
                                    htmlFor="name"
                                    className="text-base font-medium mb-2 text-gray-600"
                                >
                                    Name :
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="py-3 rounded border border-gray-300"
                                    placeholder="   Enter your name"
                                    // ref={name}
                                    onChange={forName}
                                />
                            </div>
                            <div className="flex mb-4 flex-col">
                                <label
                                    htmlFor="username"
                                    className="text-base font-medium mb-2 text-gray-600"
                                >
                                    Mobile no. :
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="py-3 rounded border border-gray-300"
                                    maxLength="10"
                                    placeholder="   Enter your mobile no."
                                    // ref={username}
                                    onChange={forUserName}
                                />
                            </div>
                            <div className="flex mb-4 flex-col">
                                <label
                                    htmlFor="email"
                                    className="text-base font-medium mb-2 text-gray-600"
                                >
                                    Email ID :
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="py-3 rounded border border-gray-300"
                                    placeholder="   Enter your email id"
                                    onChange={forUserEmail}
                                    // ref={email}
                                />
                            </div>
                            <div className="flex mb-4 flex-col">
                                <label
                                    htmlFor="referral_code"
                                    className="text-base font-medium mb-2 text-gray-600"
                                >
                                    Referral Code :
                                </label>
                                <input
                                    type="text"
                                    name="referral_code"
                                    id="referral_code"
                                    className="py-3 rounded border border-gray-300"
                                    maxLength="10"
                                    placeholder="   Enter referral code (optional)"
                                    // ref={referral_code}
                                    onChange={forReferral}
                                />
                            </div>
                            <div className="flex justify-between items-center flex-row">
                                <Link
                                    to="/auth/login"
                                    className="text-sm text-primary font-semibold"
                                >
                                    Already have a billinfo account?
                                </Link>
                                <button
                                    type="submit"
                                    onClick={submit}
                                    className="register_detail_btn px-6 py-4 bg-primary text-white font-medium rounded whitespace-nowrap"
                                >
                                    Sign up as a business
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* otp section veryfying */}
            <section
                className={`${
                    otps === true && forPasswords === true ? "flex" : "hidden"
                } flex-col items-center bg-primary_dark h-screen`}
                id="otp_form"
            >
                <div className="pt-14 pb-10">
                    <div className="text-3xl text-white font-medium text-center">
                        Verify OTP
                    </div>
                </div>
                <div
                    className="flex py-6 px-6 md:max-w-md lg:max-w-full md:mx-auto w-1/3 rounded items-center justify-center bg-white"
                    style={{ boxShadow: " 0 1px 46px -4px rgb(0 0 0 / 28%)" }}
                >
                    <div className="w-full h-full flex flex-col">
                        <form
                            action=""
                            className="w-full mx-auto"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="username"
                                value=""
                                className=" py-3 rounded border border-gray-300 placeholder-gray-400"
                            />
                            <div className="flex  flex-col mb-4">
                                <label htmlFor="otp">OTP :</label>
                                <input
                                    type="text"
                                    className="py-3 rounded border border-gray-300 placeholder-gray-400"
                                    id="otp"
                                    name="otp"
                                    minLength="6"
                                    maxLength="6"
                                    placeholder="   Enter your otp"
                                    // ref={otp_code}
                                />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <Link
                                    to=""
                                    className="resend_otp_btn text-sm text-primary font-semibold"
                                >
                                    Resend OTP ?
                                </Link>
                                <button
                                    type="submit"
                                    // onClick={otpdataSubmit}
                                    className="verify_otp_btn px-6 py-4 bg-primary text-white font-medium rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* password section */}
            <section
                id="password_form"
                className={`${
                    otps === true && forPasswords === false ? "flex" : "hidden"
                } flex-col  items-center h-screen bg-primary_dark`}
            >
                <div className="pt-14 pb-10">
                    <div className="text-3xl text-white font-medium text-center">
                        Set Password
                    </div>
                </div>
                <div
                    className="flex py-6 px-6 md:max-w-md lg:max-w-full md:mx-auto w-1/3 rounded items-center justify-center bg-white"
                    style={{ boxShadow: "0 1px 46px -4px rgb(0 0 0 / 28%)" }}
                >
                    <div className="w-full h-full flex flex-col">
                        <form
                            action=""
                            className="w-full mx-auto"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="hase"
                                value=""
                                // ref={has}
                                id="hase"
                                className="py-3 rounded border border-gray-300 placeholder-gray-400"
                            />
                            <div className="flex mb-4 flex-col">
                                <label
                                    htmlFor="password"
                                    className="text-base font-medium mb-2 text-gray-600"
                                >
                                    Password :
                                </label>
                                <input
                                    type="password"
                                    className="py-3 rounded border border-gray-300 placeholder-gray-400"
                                    name="password"
                                    id="password"
                                    // ref={password}
                                    placeholder="   Enter your password"
                                />
                            </div>
                            <div className="flex mb-4 flex-col">
                                <label
                                    htmlFor="confirm_password"
                                    className="text-base font-medium mb-2 text-gray-600"
                                >
                                    Confirm Password :
                                </label>
                                <input
                                    type="password"
                                    className="py-3 rounded border border-gray-300 placeholder-gray-400"
                                    name="confirm_password"
                                    id="confirm_password"
                                    // ref={conformPassword}
                                    placeholder="   Enter Confirm Password"
                                />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <Link to="/auth/login">
                                    Have a Billinfo account?
                                </Link>
                                <button
                                    type="submit"
                                    // onClick={finelSubmit}
                                    className="px-6 py-4 bg-primary text-white font-medium rounded  register_set_password_btn"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Sign_Up;
