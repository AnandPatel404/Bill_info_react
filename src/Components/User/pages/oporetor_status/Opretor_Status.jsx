import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretUp,
    faCaretDown,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
function Opretor_Status() {
    return (
        <section>
            <div className="flex flex-col tab-content  bg-[#fff] p-5 overflow-x-hidden">
                <div className="Opretor_Status flex flex-col md:flex-row md:justify-between mb-6">
                    <div className="flex flex-col">
                        <div className="heading font-semibold mb-2 text-[#495057]">
                            <p>Operator Status</p>
                        </div>
                        <div className="small-heading text-[#74788d]">
                            For basic styling—light padding and
                        </div>
                    </div>
                    <div className="icons flex space-x-4 items-center mt-5">
                        <div className="first flex flex-row space-x-1 md:space-x-2 text-base md:text-lg text-[#34c38f]">
                            <FontAwesomeIcon
                                icon={faCaretUp}
                                className="text-xl md:text-3xl"
                            />
                            <div>
                                <p className="font-semibold">Up</p>
                            </div>
                        </div>
                        <div className="second flex flex-row space-x-2 items-center text-lg text-[#f46a6a]">
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                className="text-xl md:text-3xl"
                            />
                            <div>
                                <p className="font-semibold">Down</p>
                            </div>
                        </div>
                        <div className="third flex flex-row space-x-2 text-lg text-[#f1b44c]">
                            <FontAwesomeIcon
                                icon={faCircle}
                                className="text-xl md:text-xl"
                            />
                            <div>
                                <p className="font-semibold">Issue</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="Opretor mt-2 md:mt-4 ">
                    <table className="w-full table-auto text-sm md:text-base">
                        <thead className="text-left font-semibold text-[#495057]">
                            <tr>
                                <th>Operator</th>
                                <th>Operator Code</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="items-center">
                                <td className="flex items-center p-3">
                                    <div className="icon">
                                        <img
                                            src="/images/svg/card_coinbase.png"
                                            alt=""
                                            className="w-10 h-10"
                                        />
                                    </div>
                                    <div className="heading">
                                        <p>Coinbase</p>
                                    </div>
                                </td>
                                <td>
                                    <p className="items-center p-3">idea</p>
                                </td>
                                <td className="flex items-center p-3">
                                    <FontAwesomeIcon
                                        icon={faCaretUp}
                                        className="text-3xl text-[#34c38f]"
                                    />
                                </td>
                            </tr>
                            <tr className="items-center">
                                <td className="flex items-center p-3">
                                    <div className="icon">
                                        <img
                                            src="/images/svg/card_coinbase.png"
                                            alt=""
                                            className="w-10 h-10"
                                        />
                                    </div>
                                    <div className="heading">
                                        <p>Coinbase</p>
                                    </div>
                                </td>
                                <td>
                                    <p className="items-center p-3">idea</p>
                                </td>
                                <td className="flex items-center p-3">
                                    <FontAwesomeIcon
                                        icon={faCaretDown}
                                        className="text-3xl text-[#f46a6a]"
                                    />
                                </td>
                            </tr>
                            <tr className="items-center">
                                <td className="flex items-center p-3">
                                    <div className="icon">
                                        <img
                                            src="/images/svg/card_coinbase.png"
                                            alt=""
                                            className="w-10 h-10"
                                        />
                                    </div>
                                    <div className="heading">
                                        <p>Coinbase</p>
                                    </div>
                                </td>
                                <td>
                                    <p className="items-center p-3">idea</p>
                                </td>
                                <td className="flex items-center p-3">
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        className="text-lg text-[#f1b44c]"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Opretor_Status;
