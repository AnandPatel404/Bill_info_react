import React from "react";

function Card(props) {
    return (
        <div
            className={`border-[#eceff1] shadw bg-[#fff] p-5 rounded-md ${
                props.className ? props.className : " "
            }`}
        >
            {props.children}
        </div>
    );
}

export default Card;
