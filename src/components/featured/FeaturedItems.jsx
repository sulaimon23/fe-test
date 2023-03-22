import React from "react";
import FeaturedCard from "./FeaturedCard";
import { useGetItemsQuery } from "@/redux/services/itemApi";

const FeaturedItems = () => {
    const { isLoading, data } = useGetItemsQuery(null);

    return (
        <div className="mb-[48px] gap-[20px] gap-y-[24px]  grid grid-cols-1 md:grid-cols-4 flex-wrap justify-start">
            {!isLoading &&
                data.data.map((item, index) => (
                    <FeaturedCard key={index} item={item} />
                ))}
        </div>
    );
};

export default FeaturedItems;
