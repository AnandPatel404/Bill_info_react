import React from "react";
import VarticalNavbar from "../../Navebar/Navbar_User";
function DashbordContent() {
    return (
        <section className="relative">
            <VarticalNavbar />
            <section className="bg-[#f6f9fc] h-screen">
                <div className="container pt-16 md:pl-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-3  ">
                        <div className="p-5 border-[1px] border-[rgb(236, 239, 241)] shadw bg-[#fff]">
                            <div className="my-1 text-2xl">0</div>
                            <div className="text-[#74788d]">Today's add</div>
                        </div>
                        <div className="shadw p-5 border-[1px] border-[rgb(236, 239, 241)]  shadw bg-[#fff]">
                            <div className="my-1 text-2xl">0</div>
                            <div className="text-[#74788d]">Today's add</div>
                        </div>
                        <div className="p-5 border-[1px] border-[rgb(236, 239, 241)]  shadw bg-[#fff]">
                            <div className="my-1 text-2xl">0</div>
                            <div className="text-[#74788d]">Today's add</div>
                        </div>
                        <div className="p-5 border-[1px] border-[rgb(236, 239, 241)]  shadw bg-[#fff]">
                            <div className="my-1 text-2xl">0</div>
                            <div className="text-[#74788d]">Today's add</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default DashbordContent;
