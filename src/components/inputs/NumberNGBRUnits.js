import RangeTicks from "../elements/RangeTicks";
import ButtonEdit from "../elements/ButtonEdit";

const NumberNGBRUnits = ({
  customerInputs,
  setCustomerInputs,
  inStep,
  whichStep,
  setWhichStep,
  editThis,
  setEditThis,
}) => {
  const handleChange = (e) => {
    setCustomerInputs({
      ...customerInputs,
      numberNGBRUnits: e.target.value,
    });
  };

  const handleClick = (e) => {
    setCustomerInputs({
      ...customerInputs,
      numberNGBRUnits: e.target.value,
    });
  };

  const handleEdit = (e) => {
    setEditThis({
      state: false,
      gasZTRPrice: false,
      daysMowedPerWeek: false,
      mowingHours: false,
      lengthMowingSeason: false,
      numberNGBRUnits: !editThis.numberNGBRUnits,
    });
  };

  return (
    <>
      <label id="numberNGBRUnits">
        {inStep ? "How many NGBRs do you plan to operate?" : "Number of NGBRs"}
        <ButtonEdit {...{ whichStep }} onClick={handleEdit} />
      </label>
      {inStep || editThis.numberNGBRUnits ? (
        <span className="input">
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
            currentTick={customerInputs.numberNGBRUnits}
            endTick={10}
          />
        </span>
      ) : (
        <>
          <span className="coh-heading subtitle coh-style-h2---display">
            {customerInputs.numberNGBRUnits}
          </span>
          {whichStep !== 8 && (
            <>
              <button onClick={(e) => setWhichStep(4)} className="go-button">
                GO TO STEP 4
              </button>
              <span className="circle">4</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default NumberNGBRUnits;
