const Environmental = ({ enviromentalBenefits, poundsOfCO2Avoided }) => {
  return (
    <ul className="outputs">
      <li className="title">Environmental benefits</li>
      <li>
        <span>Equivalent miles driven in a car</span>
        <span>
          {(
            enviromentalBenefits.poundsCO2EmittedPerMileDrivenInACar *
            poundsOfCO2Avoided
          ).toFixed(2)}
        </span>
      </li>
      <li>
        <span>Trees to plant to avoid equivalent CO2</span>
        <span>
          {(
            poundsOfCO2Avoided /
            enviromentalBenefits.poundsCO2SequesteredPerUrbanTreePlanted
          ).toFixed(2)}
        </span>
      </li>
      <li>
        <span>Pounds of CO2 avoided</span>
        <span>{poundsOfCO2Avoided.toFixed(2)}</span>
      </li>
    </ul>
  );
};

export default Environmental;
