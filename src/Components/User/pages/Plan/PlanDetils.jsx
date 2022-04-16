import React from "react";

function PlanDetils(props) {
    return (
        <div className="flex flex-col md:flex-row mt-8 border-[1px] ">
            <div className="flex bg-[#f5f6f8] w-64 p-4">
                <div className="flex text-3xl font-semibold  justify-center items-center">
                    <p className="name">{props.name}</p>
                </div>
            </div>
            <div className="second flex-1 px-2">
                <div className="flex p-4 justify-between text-[#495057] flex-col md:flex-row space-y-3 md:space-y-0">
                    <div className="flex flex-col ">
                        <h1 className="name ">Request Per Day</h1>
                        <p className="text-3xl">{props.req}</p>
                    </div>
                    <div className="amount_and_year">
                        <p>Yearly</p>
                        <h1 className="text-3xl">₹{props.price}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-[#f5f6f8] items-center text-center p-4">
                <div>
                    <button
                        type="submit"
                        className="px-3 md:px-20 py-2 bg-primary_dark text-white rounded-md"
                    >
                        choose This Plan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlanDetils;
