import ButtonEdit from "../elements/ButtonEdit";

const MowingHours = ({
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
      mowingHours: e.target.value,
    });

    whichStep === 8 &&
      setEditThis({
        state: false,
        gasZTRPrice: false,
        daysMowedPerWeek: false,
        numberNGBRUnits: false,
        lengthMowingSeason: false,
        mowingHours: false,
      });
  };

  const handleEdit = (e) => {
    setEditThis({
      state: false,
      gasZTRPrice: false,
      daysMowedPerWeek: false,
      numberNGBRUnits: false,
      lengthMowingSeason: false,
      mowingHours: !editThis.mowingHours,
    });
  };

  return (
    <>
      <label for="mowingHours">
        {inStep ? "How many hours do you mow per day?" : "Mowing Hours"}
        <ButtonEdit {...{ whichStep }} onClick={handleEdit} />
      </label>
      {inStep || editThis.mowingHours ? (
        <span className="input">
          <ul className="buttons input-buttons">
            <li>
              <button
                className={`step-button coh-style-branded-button ${
                  customerInputs.mowingHours === "3" ? "active" : null
                }`}
                name="mowingHours"
                value="3"
                onClick={(e) => {
                  handleChange(e);
                }}
              >
                &#60;4
              </button>
            </li>
            <li>
              <button
                className={`step-button coh-style-branded-button ${
                  customerInputs.mowingHours === "5" ? "active" : null
                }`}
                name="mowingHours"
                value="5"
                onClick={(e) => {
                  handleChange(e);
                }}
              >
                4-6
              </button>
            </li>
            <li>
              <button
                className={`step-button coh-style-branded-button ${
                  customerInputs.mowingHours === "7" ? "active" : null
                }`}
                name="mowingHours"
                value="7"
                onClick={(e) => {
                  handleChange(e);
                }}
              >
                6-8
              </button>
            </li>
            <li>
              <button
                className={`step-button coh-style-branded-button ${
                  customerInputs.mowingHours === "9" ? "active" : null
                }`}
                name="mowingHours"
                value="9"
                onClick={(e) => {
                  handleChange(e);
                }}
              >
                8+
              </button>
            </li>
          </ul>
        </span>
      ) : (
        <>
          <span className="coh-heading subtitle coh-style-h2---display">
            {(() => {
              switch (customerInputs.mowingHours) {
                case "5":
                  return <span>4-6</span>;

                case "7":
                  return <span>6-8</span>;

                case "9":
                  return <span>8+</span>;

                default:
                  return <span>&#60;4</span>;
              }
            })()}
          </span>
          {whichStep !== 8 && (
            <>
              <button
                onClick={(e) => {
                  setWhichStep(5);
                  onStepClick(5);
                }}
                id="go-button-5"
                className="go-button"
              >
                GO TO STEP 5
              </button>
              <span className="circle">5</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default MowingHours;
