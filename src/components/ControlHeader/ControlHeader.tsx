import {
  FaBed,
  FaCalendarDay,
  FaCar,
  FaPersonBooth,
  FaPlane,
  FaTaxi,
} from "react-icons/fa";
import "./ControlHeader.css";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

interface DateProps {
  selection: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
}

export default function ControlHeader() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const formatDate = `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
    date[0].endDate,
    "MM/dd/yyyy"
  )}`;
  const [openOption, setOptions] = useState(false);
  const [options, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div className="header">
      <div className="container">
        <div className="headerList">
          <div className="headerList">
            <div className="headerListItem active">
              <FaBed />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FaTaxi />
              <span>Airport taxis</span>
            </div>
            <div className="headerListItem">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FaCar />
              <span>Car rental</span>
            </div>
            <div className="headerListItem">
              <FaPlane />
              <span>Flights</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="headerTitle">A lifetime of discounts? It's genius. </h1>
      <p className="headerDesc">
        Get rewrdeed for you travels unlock instant savings of 10% or with a
        free ticketbooking in a company
      </p>
      <button className="headerBtn">Sign in/ Register</button>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FaBed className="headerIcon" />
          <input
            type="text"
            placeholder="where are you going?"
            className="headerSearchInput"
          />
        </div>
        <div className="headerSearchItem">
          <FaCalendarDay className="headerIcon" />
          <span
            className="headerSearchText"
            onClick={() => setOpenDate(!openDate)}
          >
            {formatDate}
          </span>
          {openDate && (
            <DateRange
              className="date"
              editableDateInputs={true}
              onChange={(item: DateProps) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          )}
        </div>
        <div className="headerSearchItem">
          <FaPersonBooth className="headerIcon" />
          <span className="headerSearchText">{`${options.adult} adult - ${options.children} - children ${options.room} room(s)`}</span>
          <div className="options">
            <div className="optionsItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button className="optionCounterButton">-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterButton">+</button>
              </div>
            </div>
            <div className="optionsItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                <button className="optionCounterButton"> - </button>
                <span className="optionCounterNumber">0</span>
                <button className="optionCounterButton">+</button>
              </div>
            </div>
            <div className="optionsItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
                <button className="optionCounterButton">-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterButton">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn">Search</button>
        </div>
      </div>
    </div>
  );
}
