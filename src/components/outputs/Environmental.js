import React from "react";
import { ReactComponent as IconTrees } from "../../images/icon-trees.svg";
import { ReactComponent as IconCar } from "../../images/icon-car.svg";
import { ReactComponent as IconCo2 } from "../../images/icon-co2.svg";

const Environmental = ({ enviromentalBenefits, poundsOfCO2Avoided }) => {
  const treeNum = (
    poundsOfCO2Avoided /
    enviromentalBenefits.poundsCO2SequesteredPerUrbanTreePlanted /
    100
  ).toFixed(0);
  let treeIcons = [];
  for (let i = 0; i < treeNum; i++) {
    treeIcons.push(<IconTrees key={i} />);
  }

  const carNum = (
    (enviromentalBenefits.poundsCO2EmittedPerMileDrivenInACar *
      poundsOfCO2Avoided) /
    1000
  ).toFixed(0);
  let carIcons = [];
  for (let i = 0; i < carNum; i++) {
    carIcons.push(<IconCar key={i} />);
  }

  const co2Num = poundsOfCO2Avoided.toFixed(0) / 1000;
  let c02Icons = [];
  for (let i = 0; i < co2Num; i++) {
    c02Icons.push(<IconCo2 key={i} />);
  }

  return (
    <ul className="outputs">
      <li className="title">Environmental benefits</li>
      <li className="svg-icon">
        <div className="overlay">
          Trees to plant to avoid equivalent CO2:
          {(
            poundsOfCO2Avoided /
            enviromentalBenefits.poundsCO2SequesteredPerUrbanTreePlanted
          ).toFixed(2)}
        </div>
        {treeIcons}
      </li>
      <li className="svg-icon">
        <div className="overlay">
          Equivalent miles driven in a car:
          {(
            enviromentalBenefits.poundsCO2EmittedPerMileDrivenInACar *
            poundsOfCO2Avoided
          ).toFixed(2)}
        </div>
        {carIcons}
      </li>
      <li className="svg-icon">
        <div className="overlay">
          Pounds of CO2 avoided:
          {poundsOfCO2Avoided.toFixed(2)}
        </div>
        {c02Icons}
      </li>
    </ul>
  );
};

export default Environmental;
