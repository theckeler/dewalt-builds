import RangeTicks from "../elements/RangeTicks";
import ButtonEdit from "../elements/ButtonEdit";

const LengthMowingSeason = ({
  customerInputs,
  setCustomerInputs,
  inStep,
  whichStep,
  setWhichStep,
  editThis,
  setEditThis,
  onStepClick,
}) => {
  const handleChange = (e) => {
    setCustomerInputs({
      ...customerInputs,
      lengthMowingSeason: e.target.value,
    });
  };

  const handleClick = (e) => {
    setCustomerInputs({
      ...customerInputs,
      lengthMowingSeason: e.target.value,
    });
    setEditThis({
      state: false,
      daysMowedPerWeek: false,
      numberNGBRUnits: false,
      mowingHours: false,
      lengthMowingSeason: false,
      gasZTRPrice: false,
    });
  };

  const handleEdit = (e) => {
    setEditThis({
      state: false,
      gasZTRPrice: false,
      daysMowedPerWeek: false,
      numberNGBRUnits: false,
      mowingHours: false,
      lengthMowingSeason: !editThis.lengthMowingSeason,
    });
  };

  return (
    <>
      <label for="lengthMowingSeason">
        {inStep ? "How long is your mowing season per year?" : "Season"}
        <ButtonEdit {...{ whichStep }} onClick={handleEdit} />
      </label>
      {inStep || editThis.lengthMowingSeason ? (
        <span className="input">
          <input
            type="range"
            min="6"
            max="12"
            step="1"
            value={customerInputs.lengthMowingSeason}
            onChange={handleChange}
            onMouseUp={(e) => {
              setEditThis({
                state: false,
                daysMowedPerWeek: false,
                numberNGBRUnits: false,
                mowingHours: false,
                lengthMowingSeason: false,
                gasZTRPrice: false,
              });
            }}
            name="lengthMowingSeason"
            id="lengthMowingSeason"
            list="lengthMowingSeason-ticks"
          />
          <RangeTicks
            handleClick={handleClick}
            sliderID="lengthMowingSeason"
            startTick={6}
            endTick={12}
            currentTick={customerInputs.lengthMowingSeason}
          />
          <output className="slider-output coh-heading subtitle coh-style-h2---display">
            {editThis.lengthMowingSeason && customerInputs.lengthMowingSeason}
          </output>
        </span>
      ) : (
        <>
          <span className="coh-heading subtitle coh-style-h2---display">
            {customerInputs.lengthMowingSeason}
          </span>
          {whichStep !== 8 && (
            <>
              <button
                onClick={(e) => {
                  setWhichStep(6);
                  onStepClick(6);
                }}
                id="go-button-6"
                className="go-button"
              >
                GO TO STEP 6
              </button>
              <span className="circle">6</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default LengthMowingSeason;
