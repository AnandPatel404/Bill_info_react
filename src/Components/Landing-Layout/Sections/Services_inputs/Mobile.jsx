import React from "react";

function Mobile() {
    return (
        <div className="contentWrapper w-full overflow-y-auto pt-6">
            <div
                id="content_1"
                className="content active text-left  w-full pl-px"
            >
                <form action="" className="grid grid-cols-12 gap-4">
                    <div className="col-span-4 flex flex-col pb-4">
                        <label
                            htmlFor="mobile_no"
                            className="text-lg font-medium mb-2"
                        >
                            Mobile no. :
                        </label>
                        <input
                            type="text"
                            className="py-5 rounded border border-gray-300 placeholder-gray-400"
                            id="mobile_no"
                            placeholder="   Enter mobile"
                        />
                    </div>
                    <div className="col-span-3">
                        <div className="flex flex-col pb-4">
                            <label
                                htmlFor="operator"
                                className="text-lg font-medium mb-2"
                            >
                                Operator :
                            </label>
                            <select
                                name="operator_id"
                                id="operator_id"
                                className="py-5  select-operator border border-gray-300 focus:border-none"
                            >
                                <option value="">Select Operator</option>
                                <option value="1">Airtel</option>
                                <option value="2">Aircel</option>
                                <option value="3">Vodafone</option>
                                <option value="4">Idea</option>
                                <option value="5">Reliance</option>
                                <option value="6">Tata Docomo</option>
                                <option value="7">Bsnl</option>
                                <option value="8">MTS</option>
                                <option value="9">MTNL</option>
                                <option value="10">Videocon</option>
                                <option value="11">M-Pesa</option>
                                <option value="12">Jio</option>
                                <option value="13">Bharti Airtel</option>
                                <option value="14">Bsnl</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="flex flex-col pb-4">
                            <label
                                htmlFor="states"
                                className="text-lg font-medium mb-2"
                            >
                                State :
                            </label>
                            <select
                                name="state_id"
                                id="state_id"
                                className="py-5  border border-gray-300 focus:border-none"
                            >
                                <option value="">select state</option>
                                <option value="1">Andhra Pradesh</option>
                                <option value="2">Arunachal Pradesh</option>
                                <option value="3">Assam</option>
                                <option value="4">Bihar</option>
                                <option value="5">Chhattisgarh</option>
                                <option value="6">Goa</option>
                                <option value="7">Gujarat</option>
                                <option value="8">Haryana</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex flex-col items-end h-full pb-4">
                            <button
                                className="view_plan mt-auto w-full px-4 py-5 bg-primary_dark border border-primary_dark text-white font-medium rounded"
                                type="submit"
                            >
                                View Plans
                            </button>
                        </div>
                        {/* <div className="col-span-12">
                    <div className="w-full flex flex-row justify-center">
                        <Link
                            className="text-primary_dark underline mx-4"
                            to="/"
                        >
                            View Plans
                        </Link>
                        <Link
                            className="text-primary_dark underline mx-4"
                            to="/"
                        >
                            Roffers
                        </Link>
                    </div>
                </div> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Mobile;
