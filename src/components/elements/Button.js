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
      dangerouslySetInnerHTML={{ __html: buttonText }}
    />
  );
};

export default Button;
