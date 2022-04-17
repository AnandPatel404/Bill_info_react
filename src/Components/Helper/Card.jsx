import React from "react";

function Card(props) {
    return (
        <div
            className={`bg-[#fff] border-[1px] p-5 rounded-md ${
                props.className ? props.className : " "
            }`}
        >
            {props.children}
        </div>
    );
}

export default Card;
