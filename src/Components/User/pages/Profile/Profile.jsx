import React from "react";

function Profile() {
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
                        <label htmlFor="name" className="mb-2">
                            Name :
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="py-2 px-3 md:w-72  border-[1px] rounded-md border-[#ced4da] text-[#495057] font-normal text-sm"
                        />
                    </div>
                    <div className="forname flex flex-col">
                        <label htmlFor="number" className="mb-2">
                            Mobile no :
                        </label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            placeholder="Mobile no"
                            disabled
                            className="py-2 px-3 md:w-72 border-[1px] rounded-md border-[#ced4da] text-[#495057] font-normal text-sm"
                        />
                    </div>
                    <div className="forname flex flex-col">
                        <label htmlFor="email" className="mb-2">
                            Email :
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="py-2 px-3 md:w-72 border-[1px] rounded-md border-[#ced4da] text-[#495057] font-normal text-sm"
                        />
                    </div>
                    <div className="forname flex flex-col">
                        <label htmlFor="Address" className="mb-2">
                            Address :
                        </label>
                        <input
                            type="text"
                            name="Address"
                            id="Address"
                            className="py-2 px-3 md:w-72 border-[1px] rounded-md border-[#ced4da] text-[#495057] font-normal text-sm"
                            placeholder="Address"
                        />
                    </div>
                    <div className="forname flex flex-col">
                        <label htmlFor="Referral" className="mb-2">
                            Referral Code :
                        </label>
                        <input
                            type="text"
                            name="Referral"
                            id="Referral"
                            className="py-2 px-3 md:w-72 border-[1px] rounded-md border-[#ced4da] text-[#495057] font-normal text-sm"
                            placeholder="Referral Code"
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

export default Profile;
