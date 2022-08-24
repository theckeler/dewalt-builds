import Button from "../elements/Button";

const Buttons = ({ whichStep, setWhichStep, onStepClick }) => {
  return (
    <ul className="buttons">
      <li>
        {whichStep > 1 && (
          <Button
            {...{
              setWhichStep,
              buttonText: "‹ Previous",
              whichStep: whichStep - 1,
              addClass: "coh-style-branded-button left",
              onStepClick,
            }}
          />
        )}
      </li>
      <li>
        <Button
          {...{
            setWhichStep,
            buttonText: "Skip to results »",
            whichStep: 8,
            addClass: "center",
            onStepClick,
          }}
        />
      </li>
      <li>
        {whichStep !== 7 && (
          <Button
            {...{
              setWhichStep,
              buttonText: "Next ›",
              whichStep: whichStep + 1,
              addClass: "coh-style-branded-button  right",
              onStepClick,
            }}
          />
        )}
      </li>
    </ul>
  );
};

export default Buttons;
