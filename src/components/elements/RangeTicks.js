const RangeTicks = ({
  startTick,
  endTick,
  sliderID,
  handleClick,
  currentTick,
  skipTicks,
}) => {
  const array = [];
  for (let i = startTick; i <= endTick; i++) {
    array.push(i);
  }

  return (
    <datalist className="ticks" id={`${sliderID}-ticks`}>
      {skipTicks ? (
        <>
          <option
            className="no-circle"
            value={startTick}
            onClick={handleClick}
            key={startTick}
          >
            {startTick}
          </option>
          <option
            className="no-circle"
            value={endTick}
            onClick={handleClick}
            key={endTick}
          >
            {endTick}
          </option>
        </>
      ) : (
        array.map((x) => {
          return (
            <option
              value={x}
              onClick={handleClick}
              key={x}
              className={Number(currentTick) === x ? "active" : ""}
            >
              {x < 10 ? "" + x : x}
            </option>
          );
        })
      )}
    </datalist>
  );
};

export default RangeTicks;
