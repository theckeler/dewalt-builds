const HelpButton = ({ tip }) => {
  const buttonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget
      .closest(".tooltip")
      .querySelector(".tip")
      .classList.toggle("active");
  };

  return (
    <>
      <div className="tooltip">
        <div className="tip">{tip}</div>
        <button onClick={buttonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 230">
            <circle cx="115" cy="115" r="115" />
            <path
              fill="#fff"
              d="M103.5 172.5h23v23h-23zM150.3 106.4 140 117c-8.3 8.4-13.5 15.3-13.5 32.5h-23v-5.8c0-12.7 5.2-24.2 13.5-32.5l14.3-14.5c4.3-4.1 6.8-9.9 6.8-16.2 0-12.7-10.3-23-23-23s-23 10.3-23 23H69c0-25.4 20.6-46 46-46s46 20.6 46 46c0 10.1-4.1 19.3-10.7 25.9z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default HelpButton;
