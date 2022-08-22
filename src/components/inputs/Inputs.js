import React, { useState } from "react";

import State from "./State";
import GasZTRPrice from "./GasZTRPrice";
import DaysMowedPerWeek from "./DaysMowedPerWeek";
import NumberNGBRUnits from "./NumberNGBRUnits";
import MowingHours from "./MowingHours";
import LengthMowingSeason from "./LengthMowingSeason";

const Inputs = ({
  setCustomerInputs,
  setDuoarea,
  customerInputs,
  whichStep,
  setWhichStep,
  editThis,
  setEditThis,
  latestAvgPowerPrice,
  setLatestAvgPowerPrice,
  latestFuelWeeklyPrice,
  setLatestFuelWeeklyPrice,
  checkObserve,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".menu-back").classList.toggle("active");
    setEditThis({
      state: false,
      daysMowedPerWeek: false,
      numberNGBRUnits: false,
      mowingHours: false,
      lengthMowingSeason: false,
      gasZTRPrice: false,
    });
  };

  return (
    <>
      <div
        className={`inputs-container ${
          whichStep === 8 ? "floating" : "static"
        } ${toggleMenu ? "active" : ""} ${
          checkObserve ? "not-pinned" : "pinned"
        }`}
        id={`paas-inputs-${whichStep === 8 ? "floating" : "static"}`}
      >
        <ul className="coh-container-boxed inputs" id="inputs">
          <li className={`column center ${whichStep === 1 ? "active" : ""}`}>
            <div className="input-container">
              <State
                {...{
                  setDuoarea,
                  customerInputs,
                  setCustomerInputs,
                  inStep: false,
                  whichStep,
                  setWhichStep,
                  editThis,
                  setEditThis,
                  latestAvgPowerPrice,
                  setLatestAvgPowerPrice,
                  latestFuelWeeklyPrice,
                  setLatestFuelWeeklyPrice,
                }}
              />
            </div>
          </li>
          <li className={`column center ${whichStep === 2 ? "active" : ""}`}>
            <div className="input-container">
              <GasZTRPrice
                {...{
                  customerInputs,
                  setCustomerInputs,
                  inStep: false,
                  whichStep,
                  setWhichStep,
                  editThis,
                  setEditThis,
                }}
              />
            </div>
          </li>
          <li className={`column center ${whichStep === 3 ? "active" : ""}`}>
            <div className="input-container">
              <DaysMowedPerWeek
                {...{
                  customerInputs,
                  setCustomerInputs,
                  inStep: false,
                  whichStep,
                  setWhichStep,
                  editThis,
                  setEditThis,
                }}
              />
            </div>
          </li>
          <li className={`column center ${whichStep === 4 ? "active" : ""}`}>
            <div className="input-container">
              <NumberNGBRUnits
                {...{
                  customerInputs,
                  setCustomerInputs,
                  inStep: false,
                  whichStep,
                  setWhichStep,
                  editThis,
                  setEditThis,
                }}
              />
            </div>
          </li>
          <li className={`column center ${whichStep === 5 ? "active" : ""}`}>
            <div className="input-container">
              <MowingHours
                {...{
                  customerInputs,
                  setCustomerInputs,
                  inStep: false,
                  whichStep,
                  setWhichStep,
                  editThis,
                  setEditThis,
                }}
              />
            </div>
          </li>
          <li className={`column center ${whichStep === 6 ? "active" : ""}`}>
            <div className="input-container">
              <LengthMowingSeason
                {...{
                  customerInputs,
                  setCustomerInputs,
                  inStep: false,
                  whichStep,
                  setWhichStep,
                  editThis,
                  setEditThis,
                }}
              />
            </div>
          </li>
        </ul>
        <button
          className="menu-button hide-desktop"
          onClick={(e) => {
            onClick(e);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M6 36v-3h26v3Zm33.9-2.6-9.45-9.45 9.4-9.4L42 16.7l-7.25 7.25 7.3 7.3ZM6 25.4v-3h20v3ZM6 15v-3h26v3Z" />
          </svg>
        </button>
      </div>
      <div
        className="menu-back hide-desktop"
        onClick={(e) => {
          onClick(e);
        }}
      ></div>
    </>
  );
};

export default Inputs;
