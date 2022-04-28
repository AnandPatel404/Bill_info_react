import React from "react";

function Container(props) {
    return (
        <section className=" container mt-5 overflow-x-hidden bg-[#f6f9fc] ">
            {props.children}
        </section>
    );
}

export default Container;
