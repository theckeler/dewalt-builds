import React from "react";
import Inputs from "../inputs/Inputs";
import Outputs from "../outputs/Outputs";

const Step8 = ({
  customerInputs,
  whichStep,
  setPADDRegion,
  setCustomerInputs,
  pricing,
  totalMonthlyPaaSPowerCost,
  totalMonthlyPaaSMaintenanceCost,
  requiredEquipment,
  breakeven,
  reductionFromNGBRResale,
  gasZTR,
  cashPurchase,
  NGBRWithFlexiblePowerProgram,
  numberOfMaintenanceJobsPerYear,
  averageTotalTimeForServicing,
  monthlyPaaSPowerCostNGBR,
  monthlyFuelCostPerZTR,
  monthlyMaintenanceCostPerNGBR,
  monthlyMaintenanceCostPerZTR,
  enviromentalBenefits,
  poundsOfCO2Avoided,
}) => {
  return (
    <>
      <Inputs
        {...{ setPADDRegion, customerInputs, setCustomerInputs, whichStep }}
      />

      <Outputs
        {...{
          pricing,
          totalMonthlyPaaSPowerCost,
          totalMonthlyPaaSMaintenanceCost,
          requiredEquipment,
          breakeven,
          reductionFromNGBRResale,
          gasZTR,
          cashPurchase,
          NGBRWithFlexiblePowerProgram,
          numberOfMaintenanceJobsPerYear,
          averageTotalTimeForServicing,
          monthlyPaaSPowerCostNGBR,
          customerInputs,
          monthlyFuelCostPerZTR,
          monthlyMaintenanceCostPerNGBR,
          monthlyMaintenanceCostPerZTR,
          enviromentalBenefits,
          poundsOfCO2Avoided,
          whichStep,
        }}
      />
    </>
  );
};

export default Step8;
