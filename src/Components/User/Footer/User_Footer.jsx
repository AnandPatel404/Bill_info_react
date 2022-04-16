import React from "react";
function User_Footer() {
    return (
        <div className="flex w-full justify-between p-4">
            <div className="pl-20">2022 © Bill Info.</div>
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
