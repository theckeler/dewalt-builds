import React from "react";
import Inputs from "../inputs/Inputs";
import Outputs from "../outputs/Outputs";

const Step8 = ({
  customerInputs,
  whichStep,
  setDuoarea,
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
  editThis,
  setEditThis,
  latestAvgPowerPrice,
  setLatestAvgPowerPrice,
  latestFuelWeeklyPrice,
  setLatestFuelWeeklyPrice,
}) => {
  return (
    <>
      <Inputs
        {...{
          setDuoarea,
          customerInputs,
          setCustomerInputs,
          whichStep,
          editThis,
          setEditThis,
          latestAvgPowerPrice,
          setLatestAvgPowerPrice,
          latestFuelWeeklyPrice,
          setLatestFuelWeeklyPrice,
        }}
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
          setEditThis,
        }}
      />
    </>
  );
};

export default Step8;
