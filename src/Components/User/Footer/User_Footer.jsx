import React from "react";
function User_Footer() {
    return (
        <div className="absolute bottom-0 hidden md:flex flex-col md:flex-row space-y-3 md:space-y-0 w-full justify-between p-4 shadw border-[1px] border-[#eceff1]">
            <div className="">2022 © Bill Info.</div>
            <div>
                Crafted with ❤️ by{" "}
                <a
                    href="https://doubleslash.in/"
                    className="text-primary"
                    target="_blank"
                >
                    {" "}
                    Double Slash Internet PVT. LTD.
                </a>
            </div>
        </div>
    );
}

export default User_Footer;
