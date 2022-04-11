import { React, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
function Log_In() {
    const history = useHistory();
    // const [data, setData] = useState({});
    const username = useRef(null);
    const password = useRef(null);
    const reddirect = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: "post",
                url: "http://localhost:8000/auth/login",
                data: {
                    username: username.current.value,
                    password: password.current.value,
                },
            });
            if (response.data.status === "success") {
                swal("Login Successfully", "", "success");
                history.push("/");
            }
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <section className="flex flex-col items-center bg-primary_dark h-screen ">
            <div className="pt-14 pb-10">
                <div className="font-medium text-3xl text-white">
                    Sign in to Billinfo
                </div>
            </div>
            <div
                className="flex items-center justify-center bg-white py-6 px-6 md:max-w-md lg:max-w-full md:mx-auto w-1/3 rounded"
                style={{ boxShadow: "0 1px 46px -4px rgb(0 0 0 / 28%)" }}
            >
                <div className="w-full h-full flex flex-col">
                    <form
                        action=""
                        className="w-full mx-auto"
                        method="POST"
                        onSubmit={reddirect}
                    >
                        <div className="flex flex-col mb-4">
                            <label
                                htmlFor="username"
                                className="text-base font-medium mb-2 text-gray-600"
                            >
                                Mobile No :
                            </label>
                            <input
                                type="text"
                                className="py-3 rounded border border-gray-300 placeholder-gray-400"
                                name="username"
                                id="username"
                                placeholder="   Enter your mobile no."
                                tabIndex="1"
                                autoFocus
                                ref={username}
                            />
                        </div>
                        <div className="flex flex-col mb-4">
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
                                placeholder="   Enter your password."
                                tabIndex="2"
                                ref={password}
                            />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <Link
                                to="/auth/register"
                                className="text-sm text-primary_dark font-semibold"
                                tabIndex="4"
                            >
                                Don't have an account?
                            </Link>
                            <button
                                type="submit"
                                className="px-6 py-4 bg-primary_dark text-white font-medium rounded whitespace-nowrap"
                                tabIndex="3"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="pt-4">
                <div className="flex  flex-row">
                    <Link
                        className="pr-3 text-sm text-white font-medium"
                        to="/auth/forgot"
                        tabIndex="5"
                    >
                        Forgot password?
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Log_In;
