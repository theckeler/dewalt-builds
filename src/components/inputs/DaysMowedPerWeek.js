import RangeTicks from "../elements/RangeTicks";
import ButtonEdit from "../elements/ButtonEdit";

const DaysMowedPerWeek = ({
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
      daysMowedPerWeek: e.target.value,
    });
  };

  const handleClick = (e) => {
    setCustomerInputs({
      ...customerInputs,
      daysMowedPerWeek: e.target.value,
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
      numberNGBRUnits: false,
      mowingHours: false,
      lengthMowingSeason: false,
      daysMowedPerWeek: !editThis.daysMowedPerWeek,
    });
  };

  return (
    <>
      <label id="daysMowedPerWeek">
        {inStep ? "How many days do you mow per week?" : "Days Mowed"}
        <ButtonEdit {...{ whichStep }} onClick={handleEdit} />
      </label>
      {inStep || editThis.daysMowedPerWeek ? (
        <span className="input">
          <input
            type="range"
            min="4"
            max="7"
            step="1"
            value={customerInputs.daysMowedPerWeek}
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
            name="daysMowedPerWeek"
            list="daysMowedPerWeek-ticks"
          />
          <RangeTicks
            handleClick={handleClick}
            sliderID="daysMowedPerWeek"
            startTick={4}
            endTick={7}
            currentTick={customerInputs.daysMowedPerWeek}
          />
          <output className="slider-output coh-heading subtitle coh-style-h2---display">
            {editThis.daysMowedPerWeek && customerInputs.daysMowedPerWeek}
          </output>
        </span>
      ) : (
        <>
          <span className="coh-heading subtitle coh-style-h2---display">
            {customerInputs.daysMowedPerWeek}
          </span>
          {whichStep !== 8 && (
            <>
              <button onClick={(e) => setWhichStep(3)} className="go-button">
                GO TO STEP 3
              </button>
              <span className="circle">3</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DaysMowedPerWeek;
