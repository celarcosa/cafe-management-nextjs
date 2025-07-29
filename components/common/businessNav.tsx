import React from "react";
import {PlusCircle} from "lucide-react";

export default function BusinessNav (params: any) {
    return (
        <div className="lg:fixed lg:top-0 lg:left-0 lg:bottom-0 relative lg:w-[50px] w-full lg:bg-gray-200 bg-gray-50 lg:pt-6 lg:pr-2 lg:pl-2 lg:pb-6 pt-4 pb-4 z-100">
            <div className="lg:mt-[3rem] grid lg:grid-cols-1 grid-cols-4 gap-1">
                <div className="lg:pl-0 pl-2 lg:pr-0 pr-2">
                    <a href="/1">
                        <div className="lg:tooltip lg:tooltip-right flex justify-center" data-tip="Starbucks">
                            <img className={`lg:w-full w-10 rounded-box ${params.merchantId == 1 ? 'border-indigo-500 border-[3px]' : ''}`}
                                 src="https://www.pngplay.com/wp-content/uploads/8/Starbucks-Coffee-Logo-PNG-HD-Quality.png"/>
                        </div>
                        <div className="lg:hidden block w-full truncate">
                            Starbucks
                        </div>
                    </a>
                </div>
                <div className="lg:pl-0 pl-2 lg:pr-0 pr-2">
                    <div className="lg:tooltip lg:tooltip-right flex justify-center" data-tip="Add Merchant">
                        <div
                            className="flex justify-center items-center lg:bg-gray-300 bg-gray-100 p-1 lg:w-full w-[40px] lg:h-auto h-[40px] rounded-box">
                            <a href="/merchants/onboard"><PlusCircle/></a>
                        </div>
                    </div>
                    <div className="lg:hidden block w-full truncate text-center">
                        Add
                    </div>
                </div>
            </div>
        </div>
    )
}