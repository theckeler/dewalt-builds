//import React, { useState } from "react";

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
}) => {
  return (
    <div
      className={`inputs-container ${whichStep === 8 ? "floating" : "static"}`}
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
    </div>
  );
};

export default Inputs;
