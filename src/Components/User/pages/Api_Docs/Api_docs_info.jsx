import React from "react";

function Api_docs_info() {
    const urls =
        "https://couponmanager.in/api/get_coupon?api_token={your API token}&provider_id={your providerID}&amount={amount}&order_id={orderID}";
    const urls_2 = `{
        "status": "success",
        "msg": "Coupon found",
        "provider_name": "Google Play Card",
        "amount": 10,
        "code": "1234567890987654",
        "extra_field": ""
    }`;
    const urls_3 = `{"status":"error","msg":"Coupon not found"}`;
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="button_groups lg:w-[250px] lg:pr-6 lg:mr-6">
                <div className="lg:flex flex-row  lg:flex-col ">
                    <div className="grid grid-cols-1 md:grid-col-2 ">
                        <button className="bg-primary_dark text-white rounded mb-2 py-2 ">
                            Prepaid Plans
                        </button>
                        <button className=" rounded mb-2 py-2 px-4">
                            Prepaid Roffer
                        </button>
                        <button className=" rounded mb-2 py-2 px-4">
                            DTH Info
                        </button>
                        <button className=" rounded mb-2 py-2 px-4">
                            DTH Plans
                        </button>
                        <button className=" rounded mb-2 py-2 px-4">
                            DTH Roffer
                        </button>
                        <button className=" rounded mb-2 py-2 px-4">
                            Bill Details Fetch
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full mb-4">
                <div className="name_and_img flex  justify-between ">
                    <div className="name">
                        <p className="text-[#495057] font-semibold text-base">
                            Regular Prepaid Plan 3
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/opretor/mobile.svg"
                            alt=""
                            className="w-12 h-12"
                        />
                    </div>
                </div>
                <div>
                    <table className="border-[1px] border-[#f5f6f8] ">
                        <tbody className="items-start">
                            <tr>
                                <td className="p-7 flex justify-start">URL</td>
                                <td className="pt-7 ">{urls}</td>
                            </tr>
                            <tr>
                                <td className="p-7 flex justify-start">
                                    Success Response
                                </td>
                                <td className="pt-7 ">
                                    <pre>{urls_2}</pre>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-7 flex justify-start">
                                    Error Response
                                </td>
                                <td>
                                    <pre>{urls_3}</pre>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Api_docs_info;
