import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem";
import MailList from "../components/MailList";
import Footer from "../components/Footer";

export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-[20px] ">
        <div className="listWrapper w-full max-w-5xl flex gap-5">
          <div className="listSearch flex-initial bg-slate-300 p-2.5 sticky top-2 h-max w-max">
            <h1 className="lsTitle text-black text-lg font-bold  mt-3">
              Search
            </h1>
            <div className="lsItem mb-1">
              <label className="text-black text-sm  flex flex-col">
                Destination
              </label>
              <input
                type="text"
                placeholder={destination}
                className="h-[30px] border-none p-1 w-full items-center"
              />
            </div>
            <div className="lsItem flex flex-col mb-1">
              <label className="text-black text-sm ">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="text-yellow-800 h-[30px] p-1  bg-white w-full flex items-center cursor-pointer"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem flex flex-col mb-1">
              <div className="lsOptions p-3">
                <label className="text-lg">Options</label>
                <div className="lsOptionItem flex flex-col mb-1 ">
                  <span className="lsOptionText text-sm ">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    min={100000}
                    className="lsOptionInput w-[56%]"
                  />
                </div>

                <div className="lsOptionItem   flex flex-col mb-1 ">
                  <span className="lsOptionText text-sm">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    min={400000}
                    className="lsOptionInput w-[56%]"
                  />
                </div>

                <div className="lsOptionItem  flex justify-between mb-1 ">
                  <span className="lsOptionText text-sm">Adult</span>
                  <input
                    placeholder={options.adult}
                    type="number"
                    min={1}
                    className="lsOptionInput w-[20%]"
                  />
                </div>

                <div className="lsOptionItem flex justify-between mb-1">
                  <span className="lsOptionText text-sm">Children</span>
                  <input
                    placeholder={options.children}
                    type="number"
                    min={0}
                    className="lsOptionInput w-[20%]"
                  />
                </div>

                <div className="lsOptionItem  flex justify-between mb-2">
                  <span className="lsOptionText text-sm">Room</span>
                  <input
                    placeholder={options.room}
                    type="number"
                    min={1}
                    className="lsOptionInput w-[20%]"
                  />
                </div>
              </div>
            </div>
            <button className="p-2 rounded bg-gray-500 text-white border-none w-full font-medium cursor-pointer">
              Search
            </button>
          </div>
          <div className="listResult flex-auto mb-20">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}
