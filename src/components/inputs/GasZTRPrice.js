import ButtonEdit from "../elements/ButtonEdit";
import RangeTicks from "../elements/RangeTicks";
import dollarUSLocale from "../../utils/dollarUSLocale";

const GasZTRPrice = ({
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
      gasZTRPrice: e.target.value,
    });
  };

  const handleClick = (e) => {
    setCustomerInputs({
      ...customerInputs,
      gasZTRPrice: e.target.value,
    });
  };

  const handleEdit = (e) => {
    setEditThis({
      state: false,
      daysMowedPerWeek: false,
      numberNGBRUnits: false,
      mowingHours: false,
      lengthMowingSeason: false,
      gasZTRPrice: !editThis.gasZTRPrice,
    });
  };

  return (
    <>
      <label>
        {inStep
          ? "What's the price of a new, commercial-grade gas ZTR?"
          : "ZTR Price"}
        <ButtonEdit {...{ whichStep }} onClick={handleEdit} />
      </label>
      {inStep || editThis.gasZTRPrice ? (
        <span className="input">
          <input
            type="range"
            min="9000"
            max="16000"
            step="10"
            value={customerInputs.gasZTRPrice}
            onChange={(e) => {
              handleChange(e);
            }}
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
            name="gasZTRPrice"
            id="gasZTRPrice"
            list="gasZTRPrice-ticks"
          />
          <RangeTicks
            handleClick={handleClick}
            sliderID="daysMowedPerWeek"
            startTick={9000}
            endTick={16000}
            currentTick={customerInputs.daysMowedPerWeek}
            skipTicks={true}
          />
          <output
            htmlFor="gasZTRPrice"
            className="slider-output coh-heading subtitle coh-style-h2---display"
          >
            {dollarUSLocale.format(customerInputs.gasZTRPrice)}
          </output>
        </span>
      ) : (
        <>
          <span className="coh-heading subtitle coh-style-h2---display">
            {customerInputs.gasZTRPrice}
          </span>
          {whichStep !== 8 && (
            <>
              <button onClick={(e) => setWhichStep(2)} className="go-button">
                GO TO STEP 2
              </button>
              <span className="circle">2</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default GasZTRPrice;
