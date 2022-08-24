const Button = ({
  whichStep,
  setWhichStep,
  buttonText,
  addClass,
  onStepClick,
}) => {
  return (
    <button
      className={`coh-link coh-style-button-action ${addClass}`}
      onClick={(e) => {
        setWhichStep(whichStep);
        onStepClick(whichStep);
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
