import statesJSON from "../data/states.json";
import RangeTicks from "./RangeTicks";

const CustomerInputsForm = ({
  setPADDRegion,
  customerInputs,
  setCustomerInputs,
}) => {
  const handleChange = (e) => {
    // e.target.querySelector("#thumb").innerHTML = "sadjajsd";

    let inputValue;
    if (isNaN(e.target.value)) {
      inputValue = e.target.value;
    } else {
      inputValue = Number(e.target.value);
    }

    setCustomerInputs({
      ...customerInputs,
      [e.target.getAttribute("name")]: inputValue,
    });
  };

  const handleClick = (e) => {
    setCustomerInputs({
      ...customerInputs,
      [e.target.parentNode.previousSibling.getAttribute("name")]:
        e.target.value,
    });
  };

  const buttonClick = (e) => {
    e.preventDefault();
    document.querySelectorAll("button").forEach(function (button) {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  let states = JSON.parse(JSON.stringify(statesJSON));

  return (
    <ul className="inputs">
      <li className="column">
        <span>
          <label id="location">Which state do you operate in?</label>
        </span>
        <span>
          <select
            htmlFor="location"
            value={customerInputs.location}
            onChange={(e) => {
              handleChange(e);
              const newState = states.find(
                (state) => state.abbr === e.target.value
              );
              setPADDRegion(`PADD${newState.padd}`);
            }}
          >
            {states.map((state) => {
              return (
                <option key={state.abbr} value={state.abbr}>
                  {state.name} - PADD {state.padd}
                </option>
              );
            })}
          </select>
        </span>
      </li>
      <li className="column range">
        <span>
          <label>What's the price of a new, commercial-grade gas ZTR?</label>
        </span>
        <span className="input">
          <output htmlFor="gasZTRPrice" className="slider-output">
            {customerInputs.gasZTRPrice}
          </output>
          <input
            type="range"
            min="9000"
            max="16000"
            step="1"
            value={customerInputs.gasZTRPrice}
            onChange={handleChange}
            name="gasZTRPrice"
            list="gasZTRPrice-ticks"
          />
          <datalist className="ticks" id="gasZTRPrice-ticks">
            <option value="9000" onClick={handleClick}>
              9000
            </option>
            <option value="16000" onClick={handleClick}>
              16000
            </option>
          </datalist>
        </span>
      </li>
      <li className="column range">
        <span>
          <label id="daysMowedPerWeek">
            How many days do you mow per week?
          </label>
        </span>
        <span className="input">
          <output className="slider-output">
            {customerInputs.daysMowedPerWeek}
          </output>
          <input
            type="range"
            min="4"
            max="7"
            step="1"
            value={customerInputs.daysMowedPerWeek}
            onChange={handleChange}
            name="daysMowedPerWeek"
            list="daysMowedPerWeek-ticks"
          />
          <RangeTicks
            handleClick={handleClick}
            sliderID="daysMowedPerWeek"
            startTick={4}
            endTick={7}
          />
        </span>
      </li>
      <li className="column range">
        <span>
          <label id="numberNGBRUnits">
            How many NGBRs do you plan to operate?
          </label>
        </span>
        <span className="input">
          <output className="slider-output">
            {customerInputs.numberNGBRUnits}
          </output>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={customerInputs.numberNGBRUnits}
            onChange={handleChange}
            name="numberNGBRUnits"
            list="numberNGBRUnits-ticks"
          />
          <RangeTicks
            handleClick={handleClick}
            sliderID="numberNGBRUnits"
            startTick={1}
            endTick={10}
          />
        </span>
      </li>
      <li className="column">
        <span>
          <label id="mowingHours">How many hours do you mow per day?</label>
        </span>
        <span>
          <ul className="buttons">
            <li>
              <button
                name="mowingHours"
                value="3"
                onClick={(e) => {
                  buttonClick(e);
                  handleChange(e);
                }}
              >
                &#60;4
              </button>
            </li>
            <li>
              <button
                name="mowingHours"
                value="5"
                onClick={(e) => {
                  buttonClick(e);
                  handleChange(e);
                }}
              >
                4-6
              </button>
            </li>
            <li>
              <button
                className="active"
                name="mowingHours"
                value="7"
                onClick={(e) => {
                  buttonClick(e);
                  handleChange(e);
                }}
              >
                6-8
              </button>
            </li>
            <li>
              <button
                name="mowingHours"
                value="9"
                onClick={(e) => {
                  buttonClick(e);
                  handleChange(e);
                }}
              >
                8+
              </button>
            </li>
          </ul>
        </span>
      </li>
      <li className="column range">
        <span>
          <label id="lengthMowingSeason">
            How long is your mowing season per year?
          </label>
        </span>
        <span className="input">
          <output className="slider-output">
            {customerInputs.lengthMowingSeason}
          </output>
          <input
            type="range"
            min="6"
            max="12"
            step="1"
            value={customerInputs.lengthMowingSeason}
            onChange={handleChange}
            name="lengthMowingSeason"
            list="lengthMowingSeason-ticks"
          />
          <RangeTicks
            handleClick={handleClick}
            sliderID="lengthMowingSeason"
            startTick={6}
            endTick={12}
          />
        </span>
      </li>
    </ul>
  );
};

export default CustomerInputsForm;
