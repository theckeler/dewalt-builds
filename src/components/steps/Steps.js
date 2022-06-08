import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";

import Buttons from "../elements/Buttons";
import Inputs from "../inputs/Inputs";
import OutputsPricing from "../outputs/OutputsPricing";

const Steps = ({
  whichStep,
  setWhichStep,
  customerInputs,
  setDuoarea,
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
  editThis,
  setEditThis,
  latestAvgPowerPrice,
  setLatestAvgPowerPrice,
  latestFuelWeeklyPrice,
  setLatestFuelWeeklyPrice,
}) => {
  return (
    <>
      {(() => {
        switch (whichStep) {
          case 2:
            return (
              <Step2
                {...{
                  customerInputs,
                  setCustomerInputs,
                  whichStep,
                  setWhichStep,
                  editThis,
                  setEditThis,
                }}
              />
            );
          case 3:
            return (
              <Step3
                {...{
                  customerInputs,
                  setCustomerInputs,
                  whichStep,
                  setWhichStep,
                  editThis,
                  setEditThis,
                }}
              />
            );
          case 4:
            return (
              <Step4
                {...{
                  whichStep,
                  customerInputs,
                  setDuoarea,
                  setCustomerInputs,
                  editThis,
                  setEditThis,
                }}
              />
            );
          case 5:
            return (
              <Step5
                {...{
                  whichStep,
                  setCustomerInputs,
                  customerInputs,
                  editThis,
                  setEditThis,
                }}
              />
            );
          case 6:
            return (
              <Step6
                {...{
                  whichStep,
                  customerInputs,
                  setCustomerInputs,
                  editThis,
                  setEditThis,
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
                  setDuoarea,
                  setCustomerInputs,
                  editThis,
                  setEditThis,
                  latestAvgPowerPrice,
                  setLatestAvgPowerPrice,
                  latestFuelWeeklyPrice,
                  setLatestFuelWeeklyPrice,
                }}
              />
            );
        }
      })()}
      {whichStep !== 8 && (
        <>
          <section
            className="coh-container section coh-style-section input-button-container"
            data-gs-background-color="light-grey"
          >
            <div className="section-inner">
              <div className="step coh-container-boxed">
                <Buttons {...{ whichStep, setWhichStep }} />
                <Inputs
                  {...{
                    setDuoarea,
                    customerInputs,
                    setCustomerInputs,
                    whichStep,
                    setWhichStep,
                    editThis,
                    setEditThis,
                    latestAvgPowerPrice,
                    setLatestAvgPowerPrice,
                    latestFuelWeeklyPrice,
                    setLatestFuelWeeklyPrice,
                  }}
                />
              </div>
            </div>
          </section>
          <section className="container-outputs">
            <OutputsPricing {...{ pricing, requiredEquipment }} />
          </section>
        </>
      )}
    </>
  );
};

export default Steps;
