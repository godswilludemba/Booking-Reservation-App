import React, { useState } from "react";
import { MdCancel, MdLocationOn } from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import { AiFillStop } from "react-icons/ai";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1594560913095-8cf34bab82ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer  flex justify-center mt-5">
        {open && (
          <div className="slider items-center w-screen h-screen top-0 left-0 bg-[rgba(166,188,245,0.43)] sticky z-50">
            <MdCancel
              onClick={() => setOpen(false)}
              className="close absolute top-5 right-5 text-2xl font-bold text-red-700 cursor-pointer"
            />
            <FaArrowCircleLeft
              onClick={() => handleMove("l")}
              className="left cursor-pointer absolute top-[50%] left-[3%] text-[40px] text-gray-100"
            />
            <div className="sliderWrapper w-full h-full flex justify-center items-center">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="sliderImg w-[90%] h-[80vh]"
              />
            </div>
            <FaArrowCircleRight
              onClick={() => handleMove("r")}
              className="right cursor-pointer absolute bottom-[45%] right-[3%] text-[40px] text-gray-100"
            />
          </div>
        )}
        <div className="hotelWrapper relative w-full max-w-5xl flex flex-col gap-2">
          <button className="bookNow cursor-pointer absolute top-2 right-0 bg-green-800 text-white rounded-xl py-1.5 px-2.5">
            Reserve or Book Now
          </button>
          <h1 className="hotelTitle text-lg font-semibold">
            De-Xhrine Hotel & Suit
          </h1>
          <div className="hotelAddress flex text-sm items-center gap-2">
            <MdLocationOn />
            <span className="address">st Johns 567 East London</span>
          </div>
          <span className="hotelDistance text-orange-300 font-semibold">
            Nice Location || 150m from east-west Gate
          </span>
          <span className="hotelPriceHighLight text-green-500 font-medium">
            Book a Stay over # 400,000 and get a free airport taxi
          </span>
          <div className="hotelImage flex flex-wrap justify-between gap-y-1.5">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper w-[33%]">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImgs w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex justify-between gap-5 mt-5">
            <div className="hotelDetailText flex-1">
              <h1 className="htTitle font-bold text-lg text-gray-500">
                Stay in a Calm, lively and Healthy Arena
              </h1>
              <p className="htDescription text-sm mt-5 mb-5">
                You're eligible for a Genius discount at De-Xhrine Suites! To
                save at this property, all you have to do is sign in. Situated
                in Ikeja, 1.2 km from Kalakuta Museum, De-Xhrine Suites features
                accommodation with a restaurant, free private parking and a bar.
                With free WiFi, this 3-star hotel offers room service and a
                24-hour front desk. Synagogue Church Of all Nations is 17 km
                from the hotel and Central Mosque of Lagos is 19 km away. A Full
                English/Irish breakfast is available each morning at the hotel.
                National Stadium Lagos is 13 km from De-Xhrine Suites, while
                National Art Theatre is 16 km from the property. The nearest
                airport is Murtala Muhammed International Airport, 3 km from the
                accommodation. Couples particularly like the location{" "}
              </p>
            </div>
            <div className="hotelDetailPrice bg-slate-300 flex flex-col gap-5 p-5 w-[25%] h-content mb-5 rounded-md">
              <h1 className="priceTitle text-lg font-semibold text-gray-700 ">
                Property on top highlight, fit for a 5-Night stay
              </h1>
              <span className="pDesc flex justify-center gap-1 text-sm">
                <span className=" text-green-400">
                  <MdLocationOn />
                </span>
                <p className="text-blue-400">
                  {" "}
                  Top location: Highly rated by recent guests (8.1)
                </p>
              </span>
              <span className="flex justify-center gap-1 text-sm">
                <span className=" text-green-400">
                  <RiParkingBoxLine />
                </span>
                Free private parking available at the hotel
              </span>

              <h2 className="price text-gray-600 font-bold">
                <i># 789,000</i> <small>(5-Nights)</small>
              </h2>
              <button className="bg-green-800 rounded cursor-pointer">
                {" "}
                Book or Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}
