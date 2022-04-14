import React from "react";

function DashbordContent() {
    return (
        <section className="bg-[#f6f9fc] h-screen">
            <div className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-3  ">
                    <div
                        className="p-5 border-[1px] border-[rgb(236, 239, 241)]"
                        style={{
                            boxShadow: "rgb(17 51 83 / 2%) 0px 4px 12px 0px;",
                        }}
                    >
                        <div className="my-1 text-2xl">0</div>
                        <div className="text-[#74788d]">Today's add</div>
                    </div>
                    <div
                        className="p-5 border-[1px] border-[rgb(236, 239, 241)] "
                        style={{
                            boxShadow: "rgb(17 51 83 / 2%) 0px 4px 12px 0px;",
                        }}
                    >
                        <div className="my-1 text-2xl">0</div>
                        <div className="text-[#74788d]">Today's add</div>
                    </div>
                    <div
                        className="p-5 border-[1px] border-[rgb(236, 239, 241)] "
                        style={{
                            boxShadow: "rgb(17 51 83 / 2%) 0px 4px 12px 0px;",
                        }}
                    >
                        <div className="my-1 text-2xl">0</div>
                        <div className="text-[#74788d]">Today's add</div>
                    </div>
                    <div
                        className="p-5 border-[1px] border-[rgb(236, 239, 241)] "
                        style={{
                            boxShadow: "rgb(17 51 83 / 2%) 0px 4px 12px 0px;",
                        }}
                    >
                        <div className="my-1 text-2xl">0</div>
                        <div className="text-[#74788d]">Today's add</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashbordContent;
