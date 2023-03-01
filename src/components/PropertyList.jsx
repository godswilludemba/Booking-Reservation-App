import React from "react";

export default function PropertyList() {
  return (
    <div className="pList w-full max-w-5xl flex justify-between  gap-1">
      <div className="pListItem rounded-t overflow-hidden cursor-pointer">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitle">
          <h1 className="text-lg font-semibold">Hotels</h1>
          <h2 className="font-normal text-sm">311 Hotels</h2>
        </div>
      </div>

      <div className="pListItem rounded-t overflow-hidden cursor-pointer">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o="
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitle">
          <h1 className="text-lg font-semibold">Apartments</h1>
          <h2 className="font-normal text-sm">31133 Hotel</h2>
        </div>
      </div>

      <div className="pListItem rounded-t overflow-hidden cursor-pointer">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitle">
          <h1 className="text-lg font-semibold">Resorts</h1>
          <h2 className="font-normal text-sm">33311 Hotels</h2>
        </div>
      </div>

      <div className="pListItem rounded-t overflow-hidden cursor-pointer">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o="
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitle">
          <h1 className="text-lg font-semibold">Villas</h1>
          <h2 className="font-normal text-sm">4561 Hotels</h2>
        </div>
      </div>

      <div className="pListItem rounded-t overflow-hidden cursor-pointer">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o="
          alt=""
          className="pListImg w-full h-[150px] object-cover"
        />
        <div className="pListTitle">
          <h1 className="text-lg font-semibold">Glamping</h1>
          <h2 className="font-normal text-sm">4561 Hotels</h2>
        </div>
      </div>
    </div>
  );
}
