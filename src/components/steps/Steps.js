import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";

const Steps = ({
  whichStep,
  setWhichStep,
  customerInputs,
  setPADDRegion,
  setCustomerInputs,
  pricing,
  requiredEquipment,
  totalMonthlyPaaSPowerCost,
  totalMonthlyPaaSMaintenanceCost,
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
      {(() => {
        switch (whichStep) {
          case 2:
            return (
              <Step2
                {...{
                  whichStep,
                  setWhichStep,
                  customerInputs,
                  setPADDRegion,
                  setCustomerInputs,
                  pricing,
                  requiredEquipment,
                }}
              />
            );
          case 3:
            return (
              <Step3
                {...{
                  whichStep,
                  setWhichStep,
                  customerInputs,
                  setPADDRegion,
                  setCustomerInputs,
                  pricing,
                  requiredEquipment,
                }}
              />
            );
          case 4:
            return (
              <Step4
                {...{
                  whichStep,
                  setWhichStep,
                  customerInputs,
                  setPADDRegion,
                  setCustomerInputs,
                  pricing,
                  requiredEquipment,
                }}
              />
            );
          case 5:
            return (
              <Step5
                {...{
                  whichStep,
                  setWhichStep,
                  setCustomerInputs,
                  setPADDRegion,
                  customerInputs,
                  pricing,
                  requiredEquipment,
                }}
              />
            );
          case 6:
            return (
              <Step6
                {...{
                  whichStep,
                  setWhichStep,
                  customerInputs,
                  setPADDRegion,
                  setCustomerInputs,
                  pricing,
                  requiredEquipment,
                }}
              />
            );
          case 7:
            return <Step7 {...{ whichStep, setWhichStep, customerInputs }} />;
          case 8:
            return (
              <Step8
                {...{
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
                }}
              />
            );

          default:
            return (
              <Step1
                {...{
                  whichStep,
                  setWhichStep,
                  customerInputs,
                  setPADDRegion,
                  setCustomerInputs,
                  pricing,
                  requiredEquipment,
                }}
              />
            );
        }
      })()}
    </>
  );
};

export default Steps;
