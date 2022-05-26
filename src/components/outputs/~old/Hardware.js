const Hardware = ({ requiredEquipment }) => {
  return (
    <ul className="outputs">
      <li className="title">
        Hardware: Number of required batteries and chargers
      </li>
      <li>
        <span>Total number of batteries</span>
        <span>{requiredEquipment.totalBateries}</span>
      </li>
      <li>
        <span>Total number of chargers</span>
        <span>{requiredEquipment.totalChargers}</span>
      </li>
    </ul>
  );
};

export default Hardware;
