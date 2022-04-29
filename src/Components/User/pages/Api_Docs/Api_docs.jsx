import React from "react";

function Api_docs(props) {
    return (
        <div className={`${props.className ? props.className : " "}`}>
            <div className="text-base font-semibold  flex justify-between w-full">
                <div>
                    <p className="text-[#495057] ">{props.first}</p>
                </div>
                <div>
                    <p className="text-[#495057]">{props.second}</p>
                </div>
            </div>
        </div>
    );
}

export default Api_docs;
