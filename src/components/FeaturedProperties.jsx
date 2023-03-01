import React from "react";

export default function FeaturedProperties() {
  return (
    <div className="fp w-full max-w-5xl flex justify-between gap-1">
      <div className="fpItem flex flex-col flex-1 gap-[2px]">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1"
          alt=""
          className="fpImg w-full"
        />
        <span className="fpName font-bold">Continents Apartments</span>
        <span className="fpCity font-light">
          Prague 1, Czech Republic, Prague
        </span>
        <span className="fpPrice font-medium">NGN 28,073</span>
        <div className="fpRating">
          <button className="bg-red-500 border-none p-[3px] mr-[10px] font-bold">
            7.8
          </button>
          <span className="rtTag text-sm">Excellent</span>
        </div>
      </div>

      <div className="fpItem flex flex-col flex-1 gap-[2px]">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1"
          alt=""
          className="fpImg w-full"
        />
        <span className="fpName font-bold">Villa Domina</span>
        <span className="fpCity font-light">
          Split City Centre, Croatia, Split
        </span>
        <span className="fpPrice font-medium">NGN 21,856</span>
        <div className="fpRating">
          <button className="bg-red-500 border-none p-[3px] mr-[10px] font-bold">
            8.8
          </button>
          <span className="rtTag text-sm">Fabulous</span>
        </div>
      </div>

      <div className="fpItem flex flex-col flex-1 gap-[2px]">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
          className="fpImg w-full"
        />
        <span className="fpName font-bold">7Seasons Apartments Budapest</span>
        <span className="fpCity font-light">
          06. Terézváros, Hungary, Budapest
        </span>
        <span className="fpPrice font-medium">NGN 41,576</span>
        <div className="fpRating">
          <button className="bg-red-500 border-none p-[3px] mr-[10px] font-bold">
            7.8
          </button>
          <span className="rtTag text-sm">Very Good</span>
        </div>
      </div>

      <div className="fpItem flex flex-col flex-1 gap-[2px]">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
          alt=""
          className="fpImg w-full"
        />
        <span className="fpName font-bold">Oriente Palace Apartments</span>
        <span className="fpCity font-light">Centro, Spain, Madrid</span>
        <span className="fpPrice font-medium">NGN 56,098</span>
        <div className="fpRating">
          <button className="bg-red-500 border-none p-[3px] mr-[10px] font-bold">
            7.8
          </button>
          <span className="rtTag text-sm">Excellent</span>
        </div>
      </div>
    </div>
  );
}
