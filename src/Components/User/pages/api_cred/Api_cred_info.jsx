import React from "react";

function Api_cred_info({ name, des, inputName, buttonName }) {
    return (
        <div className="tokan flex flex-col">
            <div className="name">
                <h1 className="text-[#495057] font-semibold mb-2">{name}</h1>
                <p className="text-[#74788d] mb-6">{des}</p>
            </div>
            <div className="flex flex-col">
                <div>
                    <label htmlFor="text" className="mb-2 font-medium">
                        {inputName}
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        placeholder="APi Token"
                        className="w-full border-[1px] py-2 px-3 border-[#ced4da] text-[#495057] font-normal text-sm"
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="text-[#fff] bg-primary_dark border-primary_dark font-normal py-2 px-3 my-4 rounded-md"
                >
                    {buttonName}
                </button>
            </div>
        </div>
    );
}

export default Api_cred_info;
