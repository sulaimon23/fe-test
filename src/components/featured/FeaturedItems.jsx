import React from "react";
import FeaturedImages from "@/assets/featured";
import FeaturedCard from "./FeaturedCard";

const FeaturedItems = () => {
    const featuredItems = [
        {
            title: "Apple MacBook Air 13&quot; M1 Chip 8GB 256GB 2020 Model - Rose Gold",
            price: "₦795,000",
            img: FeaturedImages.GoldMacbook,
        },
        {
            title: "Phone 8 - 256GB, 4G LTE, Green (Refurbished)",
            price: "₦141,999",
            img: FeaturedImages.Iphone,
        },
        {
            title: "Modern Office Table Desk Computer Table Furniture",
            price: "₦37,000",
            img: FeaturedImages.Desk,
        },
        {
            title: "Modern Office Table Desk Computer Table Furniture",
            price: "₦37,000",
            img: FeaturedImages.Desk,
        },
        {
            title: "Acer Travelmate P2 15.6&quot; Fhd Core I7 -1165g7 256gb Ssd 8gb Ram, Win 10 Pro, 12 Hrs Battery Life, FingerPrint + Wireless Mouse",
            price: "₦377,000",
            img: FeaturedImages.Acer,
        },
        {
            title: "Samsung Galaxy A23, 4GB/128GB Memory, Android 12 - Balck",
            price: "₦141,999",
            img: FeaturedImages.Samsung,
        },
        {
            title: "Apple MacBook Air 13&quot; M1 Chip 8GB 256GB 2020 Model - Space Grey",
            price: "₦552,000",
            img: FeaturedImages.GrayMackbook,
        },
        {
            title: "Apple MacBook Air 13&quot; M1 Chip 8GB 256GB 2020 Model - Space Grey",
            price: "₦552,000",
            img: FeaturedImages.GrayMackbook,
        },
    ];
    return (
        <div className="mb-[48px] gap-[20px] gap-y-[24px]  grid grid-cols-1 md:grid-cols-4 flex-wrap justify-start">
            {featuredItems.map((item, index) => (
                <FeaturedCard key={index} item={item} />
            ))}
        </div>
    );
};

export default FeaturedItems;
