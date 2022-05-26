const Button = ({ whichStep, onClick }) => {
  return (
    <>
      {whichStep === 8 && (
        <button onClick={onClick} className="coh-style-branded-button icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path d="M6 37.9v-3h12.35v3Zm0-24.8v-3h20.65v3ZM21.35 42V30.75h3v4.15H42v3H24.35V42Zm-6-12.4v-4.1H6v-3h9.35v-4.2h3v11.3Zm6-4.1v-3H42v3Zm8.3-8.25V6h3v4.1H42v3h-9.35v4.15Z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Button;
