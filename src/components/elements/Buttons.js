import Button from "../elements/Button";

const Buttons = ({ whichStep, setWhichStep, onStepClick }) => {
  return (
    <ul className="buttons">
      <li>
        {whichStep > 1 && (
          <Button
            {...{
              setWhichStep,
              buttonText: "‹ <span>Previous</span>",
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
            buttonText: "Skip<span>&nbsp;to Results&nbsp;</span> »",
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
              buttonText: "<span>Next</span> ›",
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
