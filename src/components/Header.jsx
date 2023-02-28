import React, { useState } from "react";
import { MdAttractions, MdHotel } from "react-icons/md";
import { ImAirplane } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdGroups } from "react-icons/md";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

export default function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header bg-gray-600 text-white flex justify-center relative">
      <div
        className={
          type === "list"
            ? "listContainer listMood"
            : "headerContainer w-full max-w-5xl mt-5 mb-16"
        }
      >
        <div
          className={
            type === "list"
              ? "listContainer listMood flex  w-full max-w-5xl gap-10 mb-12 mr-28 justify-center"
              : "headerList flex gap-10 "
          }
        >
          <div className="headerListItem flex items-center gap-2.5 rounded-full p-2.5 border-2  ">
            <MdHotel />
            <span>Relaxation</span>
          </div>
          <div className="headerListItem flex items-center gap-2.5 ">
            <ImAirplane />
            <span>Flights</span>
          </div>
          <div className="headerListItem flex items-center gap-2.5 ">
            <AiFillCar />
            <span>Car rental</span>
          </div>
          <div className="headerListItem flex items-center gap-2.5 ">
            <MdAttractions />
            <span>Attraction</span>
          </div>
          <div className="headerListItem flex items-center gap-2.5 ">
            <FaTaxi />
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle font-semibold text-2xl">
              Genius Services with a lifetime discount
            </h1>
            <p className="headerDesc mt-5 mb-5">
              Get a substantial reward on all completed services || Grab and
              Unlock instant savings of 3% or more with a free Booking $
              Reservation account
            </p>
            <button className="headerBtn bg-gray-400 p-2 font-sm text-white cursor-pointer">
              Sign In/ Register
            </button>
            <div
              className="headerSearch h-5 flex bg-white items-center justify-around border-2
        py-5 border-yellow-300 absolute bottom-[-25px] w-full max-w-5xl"
            >
              <div className="headerSearchItem   flex items-center justify-center gap-2">
                <MdHotel className="text-gray-300" />
                <input
                  type="text"
                  placeholder="where are you going"
                  className="headerSearchInput border-none"
                />
              </div>

              <div className="headerSearchItem  flex items-center justify-center gap-2">
                <SlCalender className="text-gray-300" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText text-gray-400 cursor-pointer"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-[42px] z-20"
                  />
                )}
              </div>

              <div className="headerSearchItem  flex items-center justify-center gap-2">
                <MdGroups className="text-gray-300" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText text-gray-400 cursor-pointer"
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                </span>

                {openOptions && (
                  <div className="options absolute top-[42px] shadow-md bg-white border-1 z-20">
                    <div className="optionItem text-gray-300 gap-1 w-56 flex justify-between m-5">
                      <span className="optionText mr-1">Adult</span>
                      <div className="optionCounter flex items-center gap-1 text-black ">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                          className="optionCounterButton  mr-1  text-white px-2 bg-gray-300"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber mr-1">
                          {options.adult}
                        </span>
                        <button
                          onClick={() => handleOption("adult", "i")}
                          className="optionCounterButton text-white  bg-gray-300 px-2"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem text-gray-300 gap-1 w-56 flex justify-between m-5">
                      <span className="optionText mr-1">Children</span>
                      <div className="optionCounter flex items-center gap-1 text-black ">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className="optionCounterButton mr-1  text-white  px-2 bg-gray-300"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber mr-1">
                          {options.children}
                        </span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="optionCounterButton text-white px-2 bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem text-gray-300 gap-1 w-56 flex justify-between m-5">
                      <span className="optionText mr-1">Room</span>
                      <div className="optionCounter flex items-center gap-1  text-black">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className="optionCounterButton mr-1  text-white  px-2 bg-gray-300"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber mr-1">
                          {options.room}
                        </span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="optionCounterButton text-white px-2 bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem  flex items-center justify-center gap-1">
                <button className="text-white bg-slate-400 py-1 px-2 rounded">
                  Search
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}
