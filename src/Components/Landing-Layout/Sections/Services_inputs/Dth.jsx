import React from "react";

function Dth() {
    return (
        <div className="content text-left  w-full pl-px " id="content_2">
            <form action="" className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                    <div className="flex pb-4 flex-col">
                        <label
                            htmlFor="dth_operator"
                            className="text-lg font-medium mb-2"
                        >
                            Operator :
                        </label>
                        <select
                            name="dth_operator"
                            id="dth_operator"
                            className="border py-5 border-gray-300 focus:border-none select-dth text-[#74788d]"
                        >
                            <option value="">Select DTH operator</option>
                            <option value="1">Airtel</option>
                            <option value="2">Aircel</option>
                            <option value="3">Vodafone</option>
                            <option value="4">Idea</option>
                            <option value="5">Reliance</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="pb-4 flex flex-col">
                        <label
                            htmlFor="mobile_no"
                            className="text-lg font-medium mb-2"
                        >
                            DTH no. :
                        </label>
                        <input
                            type="text"
                            className="py-5 rounded border border-gray-300 placeholder-gray-400"
                            id="mobile_no"
                            placeholder="   Enter mobile"
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex items-end h-full pb-4">
                        <button
                            className="mt-auto w-full px-4 py-5 bg-primary_dark border border-primary_dark text-white font-medium rounded modal-open"
                            type="submit"
                            data-toggle="modal"
                            data-target="prepaidPlan"
                        >
                            Bill Fetch
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Dth;
