import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
function Plan() {
    return (
        <div className="bg-[#f5f6f8] p-5 rounded-md">
            <div className="flex flex-col md:flex-row">
                <div className="bg-[#dae8ff] p-4 rounded-md w-full md:w-2/6">
                    <h1 className="text-[#1652F0] font-medium text-3xl">
                        All
                        <br />
                        Plan
                        <br />
                        Included With
                    </h1>
                </div>
                <div className="Details md:p-4 mt-4 md:mt-0 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                        <div className="p-4">
                            <ul className="flex flex-col  space-y-5 text-[#495057]">
                                <li className="flex justify-between ">
                                    Prepaid Plan
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-primary"
                                    />
                                </li>
                                <li className="flex justify-between">
                                    Prepaid Roffer
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-primary"
                                    />
                                </li>
                                <li className="flex justify-between">
                                    Bill Details Fetch
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-primary"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <ul className="flex flex-col space-y-5 text-[#495057]">
                                <li className="flex justify-between">
                                    DTH Plan
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-primary"
                                    />
                                </li>
                                <li className="flex justify-between">
                                    DTH Roffer
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-primary"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <ul className="flex flex-col space-y-5 text-[#495057]">
                                <li className="flex justify-between">
                                    DTH Heavy Refresh
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-primary"
                                    />
                                </li>
                                <li className="flex justify-between">
                                    DTH Customer Info
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-primary"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan;
