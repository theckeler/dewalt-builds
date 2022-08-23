import React from "react";

import OutputsPricing from "./OutputsPricing";
import OutputsVersus from "./OutputsVersus";
import OutputsMaintenance from "./OutputsMaintenance";
import OutputsTCO from "./OutputsTCO";
import OutputsBreakeven from "./OutputsBreakeven";
import OutputsEnviromental from "./OutputsEnviromental";
import OutputsCTA from "./OutputsCTA";

const Outputs = ({
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
  editThis,
  setEditThis,
}) => {
  return (
    <div
      onClick={() => {
        if (
          editThis.state ||
          editThis.daysMowedPerWeek ||
          editThis.numberNGBRUnits ||
          editThis.mowingHours ||
          editThis.lengthMowingSeason ||
          editThis.gasZTRPrice
        ) {
          setEditThis({
            state: false,
            daysMowedPerWeek: false,
            numberNGBRUnits: false,
            mowingHours: false,
            lengthMowingSeason: false,
            gasZTRPrice: false,
          });
        }
      }}
    >
      <OutputsPricing {...{ pricing, requiredEquipment }} />
      <OutputsCTA />
      <OutputsVersus
        {...{
          monthlyPaaSPowerCostNGBR,
          customerInputs,
          monthlyFuelCostPerZTR,
          monthlyMaintenanceCostPerNGBR,
          monthlyMaintenanceCostPerZTR,
          pricing,
        }}
      />
      <OutputsMaintenance
        {...{
          numberOfMaintenanceJobsPerYear,
          averageTotalTimeForServicing,
          totalMonthlyPaaSMaintenanceCost,
          totalMonthlyPaaSPowerCost,
        }}
      />
      <OutputsTCO {...{ gasZTR, cashPurchase, NGBRWithFlexiblePowerProgram }} />
      <OutputsCTA />
      <OutputsBreakeven {...{ breakeven, reductionFromNGBRResale }} />
      <OutputsEnviromental {...{ enviromentalBenefits, poundsOfCO2Avoided }} />
    </div>
  );
};

export default Outputs;
