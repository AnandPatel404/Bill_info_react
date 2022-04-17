import React from "react";

function Chang_Password() {
    return (
        <div className="flex flex-col p-4">
            <div className="headings">
                <h1 className="text-xl font-semibold mb-2 text-[#495057]">
                    Profile
                </h1>
                <p className="text-gray-600 mb-6">
                    Provide valuable, actionable feedback to your users with
                    HTML5 form validation–available in all our supported
                    browsers.
                </p>
            </div>
            <div className="flex justify-center ">
                <form action="" className="text-[#495057] overflow-x-hidden ">
                    <div className="forname flex flex-col ">
                        <label htmlFor="old_password" className="mb-2">
                            Old Password :
                        </label>
                        <input
                            type="password"
                            name="old_password"
                            id="old_password"
                            placeholder="Enter old password"
                            className="py-2 px-3 md:w-72  border-[1px] rounded-md border-[#ced4da] text-[#495057] font-normal text-sm"
                        />
                    </div>
                    <div className="forname flex flex-col">
                        <label htmlFor="number" className="mb-2">
                            New Password :
                        </label>
                        <input
                            type="password"
                            name="New_password"
                            id="New_password"
                            placeholder="Enter new password"
                            className="py-2 px-3 md:w-72 border-[1px] rounded-md border-[#ced4da] text-[#495057] font-normal text-sm"
                        />
                    </div>
                    <div className="forname flex flex-col">
                        <label htmlFor="email" className="mb-2">
                            Confirm Password :
                        </label>
                        <input
                            type="password"
                            name="New_password"
                            id="new_password"
                            placeholder="Enter confirm password"
                            className="py-2 px-3 md:w-72 border-[1px] rounded-md border-[#ced4da] text-[#495057] font-normal text-sm"
                        />
                    </div>
                    <div className="forname mt-5">
                        <button
                            type="submit"
                            className=" bg-primary_dark text-white rounded-md mb-2 px-4 py-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chang_Password;
