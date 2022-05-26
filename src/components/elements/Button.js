const Button = ({ whichStep, setWhichStep, buttonText, addClass }) => {
  return (
    <button
      className={`coh-link coh-style-button-action ${addClass}`}
      onClick={() => {
        setWhichStep(whichStep);
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
