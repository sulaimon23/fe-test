import React from "react";
import HeroBg from "@/assets/heroBg.jpg";
import ProfileImg from "@/assets/profileImg.jpg";
import Image from "next/image";

const index = () => {
    return (
        <div className="flex justify-center bg-white md:px-4 items-center mb-8">
            <div className="relative max-w-[1295px] md:p-[12px] md:pt-6 md:px-6 w-full md:border md:border-gray-200 rounded-[12px] h-72 md:shadow-container">
                <div className="md:w-full h-44 md:h-40 overflow-hidden md:rounded-xl">
                    <Image
                        src={HeroBg}
                        alt="Hero bg"
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="flex md:gap-4 justify-start items-start w-full">
                    <div className="border-[4px] ml-4 md:ml-6 -mt-14 border-white overflow-hidden md:h-[114px] w-full max-w-[114px] rounded-full shadow-md shadow-gray-200">
                        <Image
                            src={ProfileImg}
                            alt="profile img"
                            className="object-cover h-full w-full"
                        />
                    </div>
                    <div className="w-full ml-4 mt-4 md:ml-0 flex flex-col md:flex-row gap-4 md:justify-between item-start">
                        <div>
                            <h3 className="font-[600] text-xs md:text-lg leading-[32px] text-gray-900">
                                Starts in: 3 days : 2 hours : 24 minutes{" "}
                            </h3>
                            <div className="flex justify-start mt-1 md:mt-2 items-center gap-6">
                                <span className="flex gap-[7px] justify-between items-center h-[28px] rounded-[16px] bg-warning-50 px-[12px] py-[4px] text-warning-700 font-[500] ">
                                    <span className="h-[6px] w-[6px] rounded-full bg-warning-500"></span>
                                    <span className="font-[500] text-[10px] md:text-xs leading-[20px] text-warning-700">
                                        Not Live
                                    </span>
                                </span>
                                <span className="text-gray-600 leading-[24px] font-[400] text-xs md:text-sm">
                                    Layers Auction
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="w-36 cursor-pointer hover:shadow-md duration-300 flex justify-between items-center gap-[10px] px-[14px] py-[8px] h-[36px] rounded-[8px] border border-gray-300 shadow-button hover:scale-105 ">
                                <svg
                                    width="19"
                                    height="20"
                                    viewBox="0 0 19 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.83332 18.3333V9.16666M1.66666 10.8333V16.6667C1.66666 17.5871 2.41285 18.3333 3.33332 18.3333H14.5219C15.7558 18.3333 16.8052 17.433 16.9928 16.2135L17.8902 10.3801C18.1232 8.86574 16.9515 7.49999 15.4193 7.49999H12.5C12.0398 7.49999 11.6667 7.12689 11.6667 6.66666V3.72152C11.6667 2.58665 10.7467 1.66666 9.61179 1.66666C9.3411 1.66666 9.09581 1.82607 8.98587 2.07343L6.05327 8.67177C5.91952 8.97271 5.62109 9.16666 5.29176 9.16666H3.33332C2.41285 9.16666 1.66666 9.91285 1.66666 10.8333Z"
                                        stroke="#344054"
                                        stroke-width="1.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <span className="leading-[20px] font-[600] text-xs text-grey-700">
                                    Accept Invite
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
