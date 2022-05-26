import statesJSON from "../../data/states.json";
import ButtonEdit from "../elements/ButtonEdit";

const State = ({
  customerInputs,
  //setCustomerInputs,
  setPADDRegion,
  inStep,
  whichStep,
  setWhichStep,
  editThis,
  setEditThis,
}) => {
  let states = JSON.parse(JSON.stringify(statesJSON));

  const handleChange = (e) => {
    //  setCustomerInputs({
    //    ...customerInputs,
    //    gasZTRPrice: e.target.value,
    //  });
  };

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
        {inStep ? "Which state do you operate in? (disabled)" : "State"}
        {/* <ButtonEdit {...{ whichStep, setEditThis }} /> */}
        <ButtonEdit {...{ whichStep }} onClick={handleEdit} />
      </label>
      {inStep || editThis.state ? (
        <span className="input">
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
            disabled
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
