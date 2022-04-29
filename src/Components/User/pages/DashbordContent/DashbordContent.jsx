import React, { useRef, useState, useEffect } from "react";
import Slider from "./Slider";
import Grid from "./grid";
import Ref_and_svg from "./Ref_and_svg";
import axios from "axios";
function DashbordContent() {
    const [Show, setShow] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8000/users/dashboard").then((res) => {
            console.log(res);
        });
    });
    return (
        <section className="relative">
            <section className="bg-[#f6f9fc] ">
                <div className="pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-4 ">
                        <div className="p-4 border-[1px] border-[#eceff1] shadw bg-[#fff] rounded-sm">
                            <div className="my-1 text-xl text-[#495057] font-medium">
                                No plan
                            </div>
                            <div className="text-[#74788d] text-sm">
                                Active ROffer Plan
                            </div>
                        </div>
                        <div className="p-4 border-[1px] border-[#eceff1] shadw bg-[#fff] rounded-sm">
                            <div className="my-1 text-xl text-[#495057] font-medium">
                                No plan
                            </div>
                            <div className="text-[#74788d] text-sm">
                                Active ROffer Plan
                            </div>
                        </div>
                        <div className="p-4 border-[1px] border-[#eceff1] shadw bg-[#fff] rounded-sm">
                            <div className="my-1 text-xl text-[#495057] font-medium">
                                No plan
                            </div>
                            <div className="text-[#74788d] text-sm">
                                Active ROffer Plan
                            </div>
                        </div>
                        <div className="p-4 border-[1px] border-[#eceff1] shadw bg-[#fff] rounded-sm">
                            <div className="my-1 text-xl text-[#495057] font-medium">
                                No plan
                            </div>
                            <div className="text-[#74788d] text-sm">
                                Active ROffer Plan
                            </div>
                        </div>
                    </div>
                </div>

                <Slider />
                <Grid />
                <Ref_and_svg />
            </section>
        </section>
    );
}

export default DashbordContent;
