import React from "react";

function Upper_Hader(props) {
    return (
        <div className={`${props.className ? props.className : " "}`}>
            <div className="  flex flex-col md:flex-row  md:justify-between w-full">
                <div>
                    <p className="text-[#495057] text-lg font-semibold">
                        {props.first}
                    </p>
                </div>
                <div>
                    <p className="text-[#495057] text-sm">{props.second}</p>
                </div>
            </div>
        </div>
    );
}

export default Upper_Hader;
