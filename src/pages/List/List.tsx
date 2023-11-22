import { useLocation } from "react-router-dom";
import ControlHeader from "../../components/ControlHeader/ControlHeader";
import Header from "../../components/Header/Header";
import { DateRange } from "react-date-range";
import "./list.css";
import { useState } from "react";
import { format } from "date-fns";

interface DateProps {
  selection: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
}

export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state?.destination || ""
  );
  const [date, setDate] = useState(
    location.state?.date || [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]
  );
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(
    location.state?.options || {
      adult: 1,
      children: 0,
      room: 1,
    }
  );

  return (
    <>
      <Header />
      <ControlHeader />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="">Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="listItem">
              <label htmlFor="">Check in Date</label>
              <span className="dateBar" onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  className="date"
                  editableDateInputs={true}
                  onChange={(item: DateProps) => setDate([item.selection])}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
              <div className="listItem">
                <label>Options</label>
                <div className="listOptions">
                  <div className="listOptionItem">
                    <span className="listOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="listOptionInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="listOptionInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="listOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="listOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="listOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </>
  );
}
