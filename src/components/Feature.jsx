import React from "react";

export default function Feature() {
  return (
    <div className="feature w-full max-w-5xl flex justify-between gap-5 z-10">
      <div className="featureItem relative text-white rounded-sm">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/822312.jpg?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o="
          alt="hotel"
          className="featureImg w-[100%] object-cover rounded-[10px]"
        />
        <div className="featureTitles absolute bottom-5 left-5 font-semibold">
          <h1>Dublin</h1>
          <h2>002 Properties</h2>
        </div>
      </div>

      <div className="featureItem relative text-white rounded-sm">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o="
          alt="hotel"
          className="featureImg w-[100%] object-cover rounded-[10px]"
        />
        <div className="featureTitles absolute bottom-5 left-5 font-semibold">
          <h1>Paris</h1>
          <h2>004 Properties</h2>
        </div>
      </div>

      <div className="featureItem relative text-white rounded-sm">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
          alt="hotel"
          className="featureImg w-[100%] object-cover rounded-[10px]"
        />
        <div className="featureTitles absolute bottom-5 left-5 font-semibold">
          <h1>Dubai</h1>
          <h2>007 Properties</h2>
        </div>
      </div>
    </div>
  );
}
