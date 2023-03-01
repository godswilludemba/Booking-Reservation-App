import React from "react";
import MailList from "./MailList";

export default function SearchItem() {
  return (
    <div className="searchItem border-2 border-orange-100 p-2.5 rounded flex justify-between gap-5 mb-5">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/269377457.webp?k=c2bc7da1e48ba5c7a05b32dad86f547389cbda1c57cfd498a7e70e3024055046&o=&s=1"
        alt=""
        className="siImg w-[200px] h-[200px] object-cover"
      />
      <div className="siDesc flex flex-col gap-2 flex-auto">
        <h1 className="siTitle font-semibold text-lg text-orange-400">
          Tower street Apartment
        </h1>
        <span className="siDistance text-[12px]">500m from center</span>
        <span className="siTaxOp text-[12px] bg-green-600 text-white w-max p-1 rounded ">
          Free airport Taxi
        </span>
        <span className="siSubtitle text-[12px] font-bold ">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures text-[12px]">
          Enter studio * 1 bathroom * 21m 1 full beds
        </span>
        <span className="siCancelOp text-[12px] text-green-500 font-bold">
          Free cancellation
        </span>
        <span className="siCancelOpSubtitle text-[12px] text-green-500">
          You can cancel Later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails flex flex-col justify-between">
        <div className="siRating flex justify-between">
          <span className="font-semibold">Excellent</span>
          <button className="bg-orange-300 text-white p-1.5 rounded-lg font-bold">
            8.9
          </button>
        </div>
        <div className="detailText text-right flex flex-col gap-1">
          <span className="siPrice text-[12px]"># 1245</span>
          <span className="siTaxOp text-[12px] text-gray-300">
            Includes taxes and fees
          </span>
          <button className="siCheckButton bg-green-300 text-white font-bold py-1 px-2 rounded-t-md cursor-pointer">
            See Availability
          </button>
        </div>
      </div>
    </div>
  );
}
