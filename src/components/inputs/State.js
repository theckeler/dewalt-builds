import statesJSON from "../../data/states.json";
import ButtonEdit from "../elements/ButtonEdit";

const State = ({
  setDuoarea,
  customerInputs,
  setCustomerInputs,
  inStep,
  whichStep,
  setWhichStep,
  editThis,
  setEditThis,
  latestAvgPowerPrice,
  setLatestAvgPowerPrice,
  latestFuelWeeklyPrice,
  setLatestFuelWeeklyPrice,
}) => {
  let states = JSON.parse(JSON.stringify(statesJSON));

  const handleEdit = (e) => {
    setEditThis({
      gasZTRPrice: false,
      daysMowedPerWeek: false,
      numberNGBRUnits: false,
      mowingHours: false,
      lengthMowingSeason: false,
      state: !editThis.state,
    });
  };
  return (
    <>
      <label id="location">
        {inStep ? "Which state do you operate in?" : "State"}
        <ButtonEdit {...{ whichStep }} onClick={handleEdit} />
      </label>
      {inStep || editThis.state ? (
        <span className="input">
          <select
            name="location"
            id="location"
            value={customerInputs.location}
            onChange={(e) => {
              setCustomerInputs({
                ...customerInputs,
                location: e.target.value,
              });
              const newState = states.find(
                (state) => state.abbr === e.target.value
              );
              setDuoarea(newState.duoarea);
              setEditThis({
                gasZTRPrice: false,
                daysMowedPerWeek: false,
                numberNGBRUnits: false,
                mowingHours: false,
                lengthMowingSeason: false,
                state: false,
              });
            }}
          >
            {states.map((state) => {
              return (
                <option key={state.abbr} value={state.abbr}>
                  {state.name} ({state.duoarea})
                </option>
              );
            })}
          </select>

          <button
            className="coh-link coh-style-button-action center"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#state-refine")
                .classList.toggle("active");
            }}
          >
            Refine Prices »
          </button>

          <div className="state-refine-container" id="state-refine">
            <div className="state-refine">
              <label>
                Current Electricity Price: $
                {Number(latestAvgPowerPrice).toFixed(2)} per KWh
              </label>
              <input
                type="range"
                min="0"
                max="3"
                step=".01"
                value={latestAvgPowerPrice}
                onChange={(e) => {
                  setLatestAvgPowerPrice(e.target.value);
                }}
                name="latestAvgPowerPrice"
                id="latestAvgPowerPrice"
                list="latestAvgPowerPrice-ticks"
              />

              <label
                style={{
                  paddingTop: "20px",
                  marginTop: "20px",
                  borderTop: "1px solid #888888",
                }}
              >
                Current Fuel Price: ${Number(latestFuelWeeklyPrice).toFixed(2)}{" "}
                per GAL
              </label>
              <input
                type="range"
                min="4"
                max="10"
                step=".01"
                value={latestFuelWeeklyPrice}
                onChange={(e) => {
                  setLatestFuelWeeklyPrice(e.target.value);
                }}
                name="latestFuelWeeklyPrice"
                id="latestFuelWeeklyPrice"
                list="latestFuelWeeklyPrice-ticks"
              />
            </div>
          </div>
        </span>
      ) : (
        <>
          <span className="coh-heading subtitle coh-style-h2---display">
            {customerInputs.location}
          </span>
          {whichStep !== 8 && (
            <>
              <button onClick={(e) => setWhichStep(1)} className="go-button">
                GO TO STEP 1
              </button>
              <span className="circle">1</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default State;
