const RangeTicks = ({ startTick, endTick, sliderID, handleClick }) => {
  const array = [];
  for (let i = startTick; i <= endTick; i++) {
    array.push(i);
  }

  return (
    <datalist className="ticks" id={`${sliderID}-ticks`}>
      {array.map((x) => {
        return (
          <option value={x} onClick={handleClick} key={x}>
            {x}
          </option>
        );
      })}
    </datalist>
  );
};

export default RangeTicks;
