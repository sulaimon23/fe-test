import React from "react";
import FeaturedItems from "./FeaturedItems";

const index = () => {
    return (
        <div className="flex justify-center mt-14 md:mt-0 items-center bg-white px-4">
            <div className="max-w-[1295px] w-full md:border md:border-gray-200 pt-6 md:rounded-[12px] md:p-6 md:shadow-featured">
                <div>
                    <div className="flex justify-between items-center gap-[20px] border-b border-gray-200 pb-5 mb-5">
                        <h5>Featured Items</h5>
                        <div className=" cursor-pointer hover:shadow-md duration-300 flex justify-between items-center gap-[10px] px-[14px] py-[8px] h-[36px] rounded-[8px] border border-gray-300 shadow-button hover:scale-105">
                            <span className="leading-[20px] font-[600] text-xs text-grey-700 ">
                                View Auction
                            </span>
                        </div>
                    </div>
                    <div>
                        <FeaturedItems />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
