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
import { NavLink, useNavigate } from "react-router-dom";

interface DateProps {
  selection: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
}

interface HandleOptionProps {
  name: "adult" | "children" | "room"; // Apenas essas três opções são permitidas
  operation: "i" | "d"; // Apenas 'i' ou 'd' são permitidos
}
interface RenderProps {
  controls?: boolean;
}

export default function ControlHeader({ controls }: RenderProps) {
  const [destination, setDestination] = useState("");
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
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  function handleOption({ name, operation }: HandleOptionProps) {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }
  const navigate = useNavigate();

  let classes = "container";

  if (controls) {
    classes += "list listMode";
  }

  function handleSearch() {
    navigate("/list", { state: {destination, date, options} });
  }

  return (
    <div className="header">
      <div className="">
        <div className={classes}>
          <div className="headerList">
            <NavLink to="/" className="headerListItem">
              <FaBed />
              <span>Attractions</span>
            </NavLink>
            <NavLink to="/list" className="headerListItem">
              <FaTaxi />
              <span>Airport taxis</span>
            </NavLink>
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
      {controls && (
        <>
          <h1 className="headerTitle">
            A lifetime of discounts? It's genius.{" "}
          </h1>
          <p className="headerDesc">
            Get rewardeed for you travels unlock instant savings of 10% or with
            a free ticketbooking in a company.www
          </p>
          <button className="headerBtn">Sign in/ Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FaBed className="headerIcon" />
              <input
                type="text"
                placeholder="where are you going?"
                className="headerSearchInput"
                onChange={e => setDestination(e.target.value)}
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
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult - ${options.children} - children ${options.room} room(s)`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionsItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() =>
                          handleOption({ name: "adult", operation: "d" })
                        }
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() =>
                          handleOption({ name: "adult", operation: "i" })
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() =>
                          handleOption({ name: "children", operation: "d" })
                        }
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        disabled={options.children <= -1}
                        className="optionCounterButton"
                        onClick={() =>
                          handleOption({ name: "children", operation: "i" })
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() =>
                          handleOption({ name: "room", operation: "d" })
                        }
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() =>
                          handleOption({ name: "room", operation: "i" })
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
