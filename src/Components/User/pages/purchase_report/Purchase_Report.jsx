import { React, useState, useEffect } from "react";

function Purchase_Report() {
    const [date, setData] = useState("Date");

    useEffect(() => {
        var today = new Date();
        const dateNow =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        setData(dateNow);
    });
    return (
        <div className="p-4 space-y-4">
            <div className="info space-y-2 mb-3">
                <div>
                    <h1 className="text-[#495057] font-semibold">API Report</h1>
                </div>
                <div className="pere ">
                    <p className="text-[#74788d]">
                        For basic styling—light padding and only horizontal
                        dividers—add the base class{" "}
                        <code className="text-red-300">.table</code> to any.
                    </p>
                </div>
            </div>

            <table className="w-full table-auto text-sm md:text-base">
                <thead className="text-left font-semibold text-[#495057]">
                    <tr>
                        <th>#</th>
                        <th>Mobile no.</th>
                        <th>Operator</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody className="text-[#495057]">
                    <tr className="items-center ">
                        <td className="pt-4"> 1</td>
                        <td className="pt-4">9876543210</td>
                        <td className="pt-4">Idea</td>
                        <td className="pt-4">{date}</td>
                    </tr>
                    <tr className="items-center">
                        <td className="pt-4"> 2</td>
                        <td className="pt-4">9876543210</td>
                        <td className="pt-4">Idea</td>
                        <td className="pt-4">{date}</td>
                    </tr>
                    <tr className="items-center">
                        <td className="pt-4"> 3</td>
                        <td className="pt-4">9876543210</td>
                        <td className="pt-4">Idea</td>
                        <td className="pt-4">{date}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Purchase_Report;
