const CustomerOutputs = () => {
  return (
    <form
      id="output"
      className={`main hide main-output ${checkObserve ? "on-screen" : ""}`}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#output").classList.toggle("active");
          document.querySelector("body").classList.toggle("active");
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" />
        </svg>
      </button>

      <div className="overflow">
        <ul>
          <li className="title">Customer-provided inputs for reference</li>
          <li className="green">
            <label>Geography / location (customerInputs.location)</label>
            <input value={customerInputs.location} readOnly />
          </li>
          <li className="green">
            <label>Days mowed per week (customerInputs.daysMowedPerWeek)</label>
            <input value={customerInputs.daysMowedPerWeek} readOnly />
          </li>
          <li className="green">
            <label>Number of NGBR units (customerInputs.numberNGBRUnits)</label>
            <input value={customerInputs.numberNGBRUnits} readOnly />
          </li>
          <li className="green">
            <label>
              [HELPER] Mowing hours for calculation (customerInputs.mowingHours)
            </label>
            <input value={customerInputs.mowingHours} readOnly />
          </li>
          <li>
            <label>
              [HELPER] Average weeks per month (averageWeeksPerMonth)
            </label>
            <input value={averageWeeksPerMonth} readOnly />
          </li>
          <li>
            <label className="red">
              Converting mowing frequency to monthly (mowingMonthly)
            </label>
            <input value={mowingMonthly} readOnly />
          </li>
          <li className="green">
            <label>
              Length of mowing season (customerInputs.lengthMowingSeason)
            </label>
            <input value={customerInputs.lengthMowingSeason} readOnly />
          </li>
          <li>
            <label>[HELPER] Length of off-season (lengthOffSeason)</label>
            <input value={lengthOffSeason} readOnly />
          </li>
          <li>
            <label>Price of gas ZTR (customerInputs.gasZTRPrice)</label>
            <input value={customerInputs.gasZTRPrice} readOnly />
          </li>
          <li>
            <label>
              Length of mowing operations for TCO (lengthMowingOperationsTCO)
            </label>
            <input value={lengthMowingOperationsTCO} readOnly />
          </li>
          <li>
            <label>
              Total mowing hours for TCO (totalHoursMowedTCOAnalysis)
            </label>
            <input value={totalHoursMowedTCOAnalysis} readOnly />
          </li>
        </ul>

        <ul>
          <li className="title">
            Hardware: Number of required batteries and chargers
          </li>
          <li className="gold">
            <label>Total number of batteries</label>
            <input value={requiredEquipment.totalBateries} readOnly />
          </li>
          <li className="gold">
            <label>Total number of chargers</label>
            <input value={requiredEquipment.totalChargers} readOnly />
          </li>
          <li>
            <label>Number of batteries per NGBR</label>
            <input value={requiredEquipment.bateries} readOnly />
          </li>
          <li>
            <label>Number of chargers per NGBR</label>
            <input value={requiredEquipment.chargers} readOnly />
          </li>
        </ul>

        <ul>
          <li className="title">
            Pricing: Flexible Power Program, 3- and 4-year financing, and cash
            buyout
          </li>
          <li>
            <label>PaaS premium over 4-year financing</label>
            <input value={paaSPremiumOverFourYearFinancing} readOnly />
          </li>
          <li>
            <label>Single charger cost</label>
            <input value={powerProgramCosts.charger} readOnly />
          </li>
          <li>
            <label>Single battery cost</label>
            <input value={powerProgramCosts.battery} readOnly />
          </li>
          <li className="gold">
            <label>Total Cash Price</label>
            <input value={pricing.totalCashPrice} readOnly />
          </li>
          <li className="gold">
            <label>Price/mo at 36 mos. 3.99%</label>
            <input value={pricing.priceMo36} readOnly />
          </li>
          <li className="gold">
            <label>Price/mo at 48 mos. 4.99%</label>
            <input value={pricing.priceMo48} readOnly />
          </li>
          <li className="gold">
            <label>Target PaaS Monthly Price</label>
            <input value={pricing.targetPaasMonthlyPrice} readOnly />
          </li>
          <li>
            <label className="red">Annualized PaaS Price</label>
            <input value={pricing.annualizedPaaSPrice} readOnly />
          </li>
          <li className="gold">
            <label className="red">Annual rebate from off-season</label>
            <input value={pricing.annualRebateOffSeason} readOnly />
          </li>
          <li className="red">
            <label>Annualized PaaS Price (with off-season)</label>
            <input
              value={
                pricing.annualizedPaaSPrice - pricing.annualRebateOffSeason
              }
              readOnly
            />
          </li>
        </ul>

        <ul>
          <li className="title">OpEx cost benchmarking: PaaS vs gas ZTRs</li>
        </ul>

        <ul>
          <li className="title">Power cost</li>
          <li className="gold red">
            <label>Total monthly PaaS power cost</label>
            <input value={totalMonthlyPaaSPowerCost} readOnly />
          </li>
          <li className="red">
            <label>Monthly PaaS power cost NGBR</label>
            <input value={monthlyPaaSPowerCostNGBR} readOnly />
          </li>
          <li className="green">
            <label>Latest average monthly power price</label>
            <input value={latestAvgPowerPrice} readOnly />
          </li>
          <li>
            <label>Power consumption rate per NGBR</label>
            <input value={NGBRBatteryCapacity} readOnly />
          </li>
          <li className="title">Maintenance cost</li>
          <li className="gold">
            <label>Total monthly PaaS maintenance cost</label>
            <input value={totalMonthlyPaaSMaintenanceCost} readOnly />
          </li>
          <li>
            <label>Monthly maintenance cost per NGBR</label>
            <input value={monthlyMaintenanceCostPerNGBR} readOnly />
          </li>
          <li>
            <label>Electric maintenance cost as % of gas</label>
            <input value={electricMaintenanceCostGas} readOnly />
          </li>
        </ul>

        <ul>
          <li className="title">Gas ZTR OpEx</li>
        </ul>

        <ul>
          <li className="title">Fuel cost</li>
          <li className="gold">
            <label>Total monthly ZTR fuel cost</label>
            <input value={totalMonthlyZTRFuelCost} readOnly />
          </li>
          <li>
            <label>Monthly fuel cost per ZTR</label>
            <input value={monthlyFuelCostPerZTR} readOnly />
          </li>
          <li>
            <label>Geography / location</label>
            <input value={customerInputs.location} readOnly />
          </li>
          <li>
            <label>PADD region</label>
            <input value={PADDRegion} readOnly />
          </li>
          <li>
            <label>Latest fuel weekly price</label>
            <input value={latestFuelWeeklyPrice} readOnly />
          </li>
          <li>
            <label>Fuel consumption rate</label>
            <input value={fuelConsumptionRate} readOnly />
          </li>
          <li className="title">Maintenance cost</li>
          <li>
            <label>Total monthly ZTR maintenance cost</label>
            <input value={totalMonthlyZTRMaintenanceCost} readOnly />
          </li>
          <li>
            <label>Monthly maintenance cost per ZTR</label>
            <input value={monthlyMaintenanceCostPerZTR} readOnly />
          </li>
          <li>
            <label>Average hourly maintenance cost</label>
            <input value={averageHourlyMaintenanceCost} readOnly />
          </li>
        </ul>

        <ul>
          <li className="title">Breakeven calculations</li>
        </ul>

        <ul>
          <li className="title">Breakeven</li>
          <li className="gold">
            <label>Breakeven: Outright purchase - With resale</label>
            <input
              value={
                breakeven.breakevenFPPNoResale
                  ? (
                      breakeven.breakevenOutrightPurchaseNoResale -
                      reductionFromNGBRResale.cashPurchase
                    ).toFixed(1)
                  : ""
              }
              readOnly
            />
          </li>
          <li className="gold">
            <label>Breakeven: FPP - With resale</label>
            <input
              value={
                breakeven.breakevenFPPNoResale
                  ? (
                      breakeven.breakevenFPPNoResale -
                      reductionFromNGBRResale.FPP
                    ).toFixed(4)
                  : ""
              }
              readOnly
            />
          </li>
          <li className="gold">
            <label>Breakeven: 3-year financing - With resale</label>
            <input
              value={
                reductionFromNGBRResale.financing36
                  ? (
                      breakeven.breakeven3yearFinancingNoResale -
                      reductionFromNGBRResale.financing36
                    ).toFixed(4)
                  : ""
              }
              readOnly
            />
          </li>
          <li className="gold">
            <label>Breakeven: 4-year financing - With resale</label>
            <input
              value={
                reductionFromNGBRResale.financing48
                  ? (
                      breakeven.breakeven4yearFinancingNoResale -
                      reductionFromNGBRResale.financing48
                    ).toFixed(4)
                  : ""
              }
              readOnly
            />
          </li>
          <li>
            <label>Breakeven: Outright purchase - No resale</label>
            <input
              value={breakeven.breakevenOutrightPurchaseNoResale}
              readOnly
            />
          </li>
          <li>
            <label>Breakeven: FPP - No resale</label>
            <input value={breakeven.breakevenFPPNoResale} readOnly />
          </li>
          <li>
            <label>Breakeven: 3-year financing - No resale</label>
            <input value={breakeven.breakeven3yearFinancingNoResale} readOnly />
          </li>
          <li>
            <label>Breakeven: 4-year financing - No resale</label>
            <input value={breakeven.breakeven4yearFinancingNoResale} readOnly />
          </li>
          <li className="title">OpEx savings</li>
          <li>
            <label>Savings with NGBR cash purchase</label>
            <input value={savingsWithNGBRCashPurchase} readOnly />
          </li>
          <li>
            <label>Savings with FPP</label>
            <input value={savingsWithFPP} readOnly />
          </li>
          <li>
            <label>Savings with 3-year financing</label>
            <input value={savingsWith3yearFinancing} readOnly />
          </li>
          <li>
            <label>Savings with 4-year financing</label>
            <input value={savingsWith4yearFinancing} readOnly />
          </li>
          <li>
            <label>Total NGBR cost (with batteries & chargers)</label>
            <input value={totalNGBRCostWith} readOnly />
          </li>
          <li>
            <label>Cost of batteries</label>
            <input value={costofBateries} readOnly />
          </li>
          <li>
            <label>Cost of chargers</label>
            <input value={costofChargers} readOnly />
          </li>
          <li>
            <label>Total NGBR cost (bare NGBR, no batteries)</label>
            <input value={totalNGBRCostBare} readOnly />
          </li>
          <li>
            <label>Bare NGBR (no batteries)</label>
            <input value={BareNGBR} readOnly />
          </li>
          <li>
            <label>Total Gas ZTR purchase price</label>
            <input
              value={totalGasZTRPurchasePrice ? totalGasZTRPurchasePrice : ""}
              readOnly
            />
          </li>
          <li>
            <label>Gas ZTR purchase price</label>
            <input value={customerInputs.gasZTRPrice} readOnly />
          </li>
          <li>
            <label>Gas ZTR OpEx</label>
            <input value={gasZTROpEx} readOnly />
          </li>
          <li>
            <label>NGBR OpEx</label>
            <input value={NGBROpEx} readOnly />
          </li>
        </ul>

        <ul>
          <li className="title">Reduction in breakeven from NGBR resale</li>
          <li>
            <label>Reduction from NGBR resale (cash purchase)</label>
            <input
              value={
                reductionFromNGBRResale.cashPurchase
                  ? reductionFromNGBRResale.cashPurchase
                  : ""
              }
              readOnly
            />
          </li>
          <li>
            <label>Reduction from NGBR resale (FPP)</label>
            <input
              value={
                reductionFromNGBRResale.FPP ? reductionFromNGBRResale.FPP : ""
              }
              readOnly
            />
          </li>
          <li>
            <label>Reduction from NGBR resale (3-year financing)</label>
            <input
              value={
                reductionFromNGBRResale.financing36
                  ? reductionFromNGBRResale.financing36
                  : ""
              }
              readOnly
            />
          </li>
          <li>
            <label>Reduction from NGBR resale (4-year financing)</label>
            <input
              value={
                reductionFromNGBRResale.financing48
                  ? reductionFromNGBRResale.financing48
                  : ""
              }
              readOnly
            />
          </li>
          <li>
            <label>eZTR resale premium (cash purchase)</label>
            <input
              value={
                eZTRResalePremiumCashPurchase
                  ? eZTRResalePremiumCashPurchase
                  : ""
              }
              readOnly
            />
          </li>
          <li>
            <label>eZTR resale premium (bare NGBR)</label>
            <input
              value={eZTRResalePremiumBareNGBR ? eZTRResalePremiumBareNGBR : ""}
              readOnly
            />
          </li>
          <li>
            <label>Gas ZTR resale price</label>
            <input
              value={gasZTRResalePrice ? gasZTRResalePrice : ""}
              readOnly
            />
          </li>
          <li>
            <label>NGBR resale price (NGBR + batteries & chargers)</label>
            <input
              value={NGBRResalePriceNGBR ? NGBRResalePriceNGBR : ""}
              readOnly
            />
          </li>
          <li>
            <label>NGBR resale price (bare NGBR)</label>
            <input
              value={NGBRResalePriceBareNGBR ? NGBRResalePriceBareNGBR : ""}
              readOnly
            />
          </li>
        </ul>

        <ul>
          <li className="title">
            Total Cost of Ownership (TCO) calculations for 3K hours of mowing
            operations
          </li>
        </ul>

        <ul>
          <li className="title">Gas ZTR</li>
          <li className="gold">
            <label>TCO of gas ZTR</label>
            <input value={gasZTR.TCOofGasZTR} readOnly />
          </li>
          <li>
            <label>Depreciation of gas ZTR</label>
            <input value={gasZTR.depreciationofGasZTR} readOnly />
          </li>
          <li>
            <label>Gas ZTR depreciation rate</label>
            <input value={depreciationInputs.gasZTRDepreciationRate} readOnly />
          </li>
          <li>
            <label>Fuel</label>
            <input value={gasZTR.fuel} readOnly />
          </li>
          <li>
            <label>Maintenance</label>
            <input value={gasZTR.maintenance} readOnly />
          </li>
        </ul>

        <ul>
          <li className="title">Cash purchase (NGBR + batteries & chargers)</li>
          <li className="gold">
            <label>TCO of NGBR + batteries & chargers</label>
            <input value={cashPurchase.TCOofNGBR} readOnly />
          </li>
          <li>
            <label>Depreciation of NGBR + batteries & chargers</label>
            <input value={cashPurchase.depreciationofGasZTR} readOnly />
          </li>
          <li>
            <label>eZTR depreciation rate</label>
            <input
              value={depreciationInputs.electricZTRDepreciationRate}
              readOnly
            />
          </li>
          <li>
            <label>Power</label>
            <input value={cashPurchase.power} readOnly />
          </li>
          <li>
            <label>Maintenance</label>
            <input value={cashPurchase.maintenance} readOnly />
          </li>
        </ul>

        <ul>
          <li className="title">
            NGBR with Flexible Power Program, and 3- and 4-year financing
          </li>
          <li className="gold">
            <label>TCO of NGBR with FPP</label>
            <input
              value={
                NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                NGBRWithFlexiblePowerProgram.flexiblePowerProgramSubscription +
                cashPurchase.power +
                cashPurchase.maintenance
              }
              readOnly
            />
          </li>
          <li className="gold">
            <label>TCO of NGBR with 36-month financing</label>
            <input
              value={
                NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                NGBRWithFlexiblePowerProgram.financingFee36 +
                cashPurchase.power +
                cashPurchase.maintenance
              }
              readOnly
            />
          </li>
          <li className="gold">
            <label>TCO of NGBR with 48-month financing</label>
            <input
              value={
                NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                NGBRWithFlexiblePowerProgram.financingFee48 +
                cashPurchase.power +
                cashPurchase.maintenance
              }
              readOnly
            />
          </li>
          <li>
            <label>Depreciation of bare NGBR (no batteries/chargers)</label>
            <input
              value={NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR}
              readOnly
            />
          </li>
          <li>
            <label>Flexible Power Program subscription</label>
            <input
              value={
                NGBRWithFlexiblePowerProgram.flexiblePowerProgramSubscription
              }
              readOnly
            />
          </li>
          <li>
            <label>36-month financing fee</label>
            <input
              value={NGBRWithFlexiblePowerProgram.financingFee36}
              readOnly
            />
          </li>
          <li>
            <label>48-month financing fee</label>
            <input
              value={NGBRWithFlexiblePowerProgram.financingFee48}
              readOnly
            />
          </li>
        </ul>

        <ul>
          <li className="title">Environmental benefits</li>
          <li className="gold">
            <label>Equivalent miles driven in a car</label>
            <input
              value={(
                enviromentalBenefits.poundsCO2EmittedPerMileDrivenInACar *
                poundsOfCO2Avoided
              ).toFixed(2)}
              readOnly
            />
          </li>
          <li className="gold">
            <label>Trees to plant to avoid equivalent CO2</label>
            <input
              value={(
                poundsOfCO2Avoided /
                enviromentalBenefits.poundsCO2SequesteredPerUrbanTreePlanted
              ).toFixed(2)}
              readOnly
            />
          </li>
          <li className="gold">
            <label>Pounds of CO2 avoided</label>
            <input value={poundsOfCO2Avoided.toFixed(2)} readOnly />
          </li>
          <li>
            <label>Gallons of fuel consumed over per year</label>
            <input value={gallonsOfFuelConsumedOverPerYear} readOnly />
          </li>
          <li>
            <label>Converting gallons of gasoline to CO2</label>
            <input
              value={enviromentalBenefits.convertingGallonsOfGasolineToCO2}
              readOnly
            />
          </li>
          <li>
            <label>Pounds CO2 sequestered per urban tree planted</label>
            <input
              value={
                enviromentalBenefits.poundsCO2SequesteredPerUrbanTreePlanted
              }
              readOnly
            />
          </li>
          <li>
            <label>Pounds CO2 emitted per mile driven in a car</label>
            <input
              value={enviromentalBenefits.poundsCO2EmittedPerMileDrivenInACar}
              readOnly
            />
          </li>
        </ul>

        <ul>
          <li className="title">
            Reduced ZTR downtime with NGBR from lower maintenance needs
          </li>
          <li className="gold">
            <label>Time saved from reduced maintenance</label>
            <input
              value={
                numberOfMaintenanceJobsPerYear * averageTotalTimeForServicing
              }
              readOnly
            />
          </li>
          <li>
            <label>Number of maintenance jobs per year</label>
            <input value={numberOfMaintenanceJobsPerYear} readOnly />
          </li>
          <li>
            <label>Average total time for servicing</label>
            <input value={averageTotalTimeForServicing} readOnly />
          </li>
          <li>
            <label>Average time for servicing</label>
            <input value={averageTimeForServicing} readOnly />
          </li>
          <li>
            <label>Average commute to & from servicing dealer</label>
            <input value={averageCommuteToFromServicingDealer} readOnly />
          </li>
          <li>
            <label>Average frequency (hours) per ZTR servicing</label>
            <input value={averageFrequencyPerZTRServicing} readOnly />
          </li>
        </ul>

        <ul>
          <li className="title">Depreciation</li>
          <li>
            <label>Electric ZTR depreciation after 2 years</label>
            <input
              value={depreciationInputs.electricZTRDepreciationRate}
              readOnly
            />
          </li>
          <li>
            <label>Gas ZTR depreciation after 2 years</label>
            <input value={depreciationInputs.gasZTRDepreciationRate} readOnly />
          </li>
          <li>
            <label>Total hours mowed for TCO analysis</label>
            <input value={totalHoursMowedTCOAnalysis} readOnly />
          </li>
          <li>
            <label>Resale premium of electric vs gas ZTRs</label>
            <input
              value={depreciationInputs.resalePremiumElectricVsGasZTRs}
              readOnly
            />
          </li>
          <li>
            <label>Typical ownership timeline of ZTRs</label>
            <input
              value={depreciationInputs.typicalOwnershipTimelineZTRs}
              readOnly
            />
          </li>
          <li>
            <label>Typical hours mowed per year</label>
            <input
              value={depreciationInputs.typicalHoursMowedPerYear}
              readOnly
            />
          </li>
          <li>
            <label>Typical hours mowed per year (high estimate)</label>
            <input
              value={depreciationInputs.typicalHoursMowedPerYearHigh}
              readOnly
            />
          </li>
          <li>
            <label>Typical hours mowed per year (low estimate)</label>
            <input
              value={depreciationInputs.typicalHoursMowedPerYearLow}
              readOnly
            />
          </li>
        </ul>
      </div>
    </form>
  );
};

export default CustomerOutputs;
