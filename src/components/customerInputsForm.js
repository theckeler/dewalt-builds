import statesJSON from "../data/states.json";

const CustomerInputsForm = ({
  handleChange,
  setPADDRegion,
  buttonClick,
  customerInputs,
}) => {
  let states = JSON.parse(JSON.stringify(statesJSON));

  return (
    <ul className="inputs">
      <li className="column range">
        <span>
          <label id="gasZTRPrice">
            What's the price of a new, commercial-grade gas ZTR?
          </label>
        </span>
        <span className="input">
          <input
            type="range"
            min="9000"
            max="16000"
            step="1"
            value={customerInputs.gasZTRPrice}
            onChange={handleChange}
            htmlFor="gasZTRPrice"
            list="gasZTRPrice-ticks"
          />
          <datalist id="gasZTRPrice-ticks">
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option value="7"></option>
          </datalist>
          <span>{customerInputs.gasZTRPrice}</span>
        </span>
      </li>
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
              // console.log("state", state);
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
          <label id="daysMowedPerWeek">
            How many days do you mow per week?
          </label>
        </span>
        <span className="input">
          <input
            type="range"
            min="4"
            max="7"
            step="1"
            value={customerInputs.daysMowedPerWeek}
            onChange={handleChange}
            htmlFor="daysMowedPerWeek"
            list="daysMowedPerWeek-ticks"
          />
          <datalist id="daysMowedPerWeek-ticks">
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option value="7"></option>
          </datalist>
          <span>{customerInputs.daysMowedPerWeek}</span>
        </span>
      </li>
      <li className="column range">
        <span>
          <label id="numberNGBRUnits">
            How many NGBRs do you plan to operate?
          </label>
        </span>
        <span className="input">
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={customerInputs.numberNGBRUnits}
            onChange={handleChange}
            htmlFor="numberNGBRUnits"
          />
          <span>{customerInputs.numberNGBRUnits}</span>
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
                htmlFor="mowingHours"
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
                htmlFor="mowingHours"
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
                htmlFor="mowingHours"
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
                htmlFor="mowingHours"
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
          <input
            type="range"
            min="6"
            max="12"
            step="1"
            value={customerInputs.lengthMowingSeason}
            onChange={handleChange}
            htmlFor="lengthMowingSeason"
          />
          <span>{customerInputs.lengthMowingSeason}</span>
        </span>
      </li>
    </ul>
  );
};

export default CustomerInputsForm;
