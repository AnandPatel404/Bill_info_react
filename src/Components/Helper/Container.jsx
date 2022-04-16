import React from "react";

function Container(props) {
    return (
        <section className=" container pt-24 lg:pr-8 overflow-x-hidden bg-[#f6f9fc] h-screen">
            {props.children}
        </section>
    );
}

export default Container;
