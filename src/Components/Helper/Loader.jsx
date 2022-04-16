import React from "react";

function Loader() {
    return (
        <div className="loader flex flex-col justify-center items-center mt-80">
            <div className="spinner">
                <img
                    src="/images/svg/favicon.svg"
                    alt=""
                    className="w-28 h-28"
                />
            </div>
            <div>LODING...</div>
        </div>
    );
}

export default Loader;
