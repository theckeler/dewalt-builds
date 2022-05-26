import Button from "../elements/Button";

const Buttons = ({ whichStep, setWhichStep }) => {
  return (
    <ul className="buttons">
      <li>
        {whichStep > 1 ? (
          <Button
            {...{
              setWhichStep,
              buttonText: "‹ Previous",
              whichStep: whichStep - 1,
              addClass: "coh-style-branded-button left",
            }}
          />
        ) : null}
      </li>
      <li>
        <Button
          {...{
            setWhichStep,
            buttonText: "Skip to results »",
            whichStep: 8,
            addClass: "center",
          }}
        />
      </li>
      <li>
        <Button
          {...{
            setWhichStep,
            buttonText: "Next ›",
            whichStep: whichStep + 1,
            addClass: "coh-style-branded-button  right",
          }}
        />
      </li>
    </ul>
  );
};

export default Buttons;
