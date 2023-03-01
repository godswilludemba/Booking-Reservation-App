import React from "react";

export default function MailList() {
  return (
    <div className="mail w-full mt-[50px] bg-slate-500 text-white flex flex-col items-center gap-2 p-[50px] ">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="your Email"
          className="w-[300px] h-8 p-2 border-none mr-[10px] rounded"
        />
        <button className=" h-[40px] px-1.5 bg-gray-600 text-white font-medium border-none rounded cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}
