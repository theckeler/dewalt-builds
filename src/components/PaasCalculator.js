import React, { useState, useEffect } from "react";
import paasCal from "../data/paas-cal.json";
import PMT from "../utils/pmt";
import CustomerForm from "./CustomerForm";
// -----------------> customerOutputs <-----------------
import TotalCashPrice from "./outputs/TotalCashPrice";
import OpExCost from "./outputs/OpExCost";
import Hardware from "./outputs/Hardware";
import Breakeven from "./outputs/Breakeven";
import FinancingNGBR from "./outputs/FinancingNGBR";
import Environmental from "./outputs/Environmental";
import Maintenance from "./outputs/Maintenance";
import Compare from "./outputs/Compare";

//import MainOutput from "./mainOutput";
import "../scss/paas-calculator.scss";

const PaasCalculator = () => {
  // -----------------> SETUP <-----------------
  const [loading, setLoading] = useState(true);
  const [checkObserve, setCheckObserve] = useState(false);
  const averageWeeksPerMonth = Number(
    paasCal.averageWeeksPerMonth / 12
  ).toFixed(4);
  const [mowingMonthly, setMowingMonthly] = useState(paasCal.mowingMonthly);
  const [lengthOffSeason, setLengthOffSeason] = useState(
    paasCal.lengthOffSeason
  );
  const [customerInputs, setCustomerInputs] = useState({
    ...paasCal.customerInputs,
  });
  const [requiredEquipment, setRequiredEquipment] = useState({
    ...paasCal.equipment.deault,
  });
  const powerProgramCosts = { ...paasCal.equipment.pricing };
  const NGBRBatteryCapacity = paasCal.NGBRBatteryCapacity;
  const averageHourlyMaintenanceCost = paasCal.averageHourlyMaintenanceCost;
  const fuelConsumptionRate = paasCal.fuelConsumptionRate;
  const electricMaintenanceCostGas = paasCal.electricMaintenanceCostGas;
  const [PADDRegion, setPADDRegion] = useState(paasCal.PADDRegion);
  const [pricing, setPricing] = useState({ ...paasCal.pricing });
  const [monthlyPaaSPowerCostNGBR, setMonthlyPaaSPowerCostNGBR] = useState(
    paasCal.monthlyPaaSPowerCostNGBR
  );
  const [totalMonthlyPaaSPowerCost, setTotalMonthlyPaaSPowerCost] = useState(
    paasCal.monthlyPaaSPowerCostNGBR
  );
  const [monthlyMaintenanceCostPerZTR, setMonthlyMaintenanceCostPerZTR] =
    useState(0);
  const [monthlyFuelCostPerZTR, setMonthlyFuelCostPerZTR] = useState(0);
  const [monthlyMaintenanceCostPerNGBR, setMonthlyMaintenanceCostPerNGBR] =
    useState(0);
  // UNCOMMENT TO TURN ON API:
  // const [latestFuelWeeklyPrice, setLatestFuelWeeklyPrice] = useState(paasCal.latestFuelWeeklyPrice);
  // const [latestAvgPowerPrice, setLatestAvgPowerPrice] = useState(paasCal.latestAvgPowerPrice);
  // COMMENT TO TURN ON API:
  const latestFuelWeeklyPrice = paasCal.latestFuelWeeklyPrice;
  const latestAvgPowerPrice = paasCal.latestAvgPowerPrice;
  //
  const [totalMonthlyZTRFuelCost, setTotalMonthlyZTRFuelCost] = useState(0);
  const [totalMonthlyZTRMaintenanceCost, setTotalMonthlyZTRMaintenanceCost] =
    useState(0);
  const depreciationInputs = { ...paasCal.depreciationInputs };
  const totalHoursMowedTCOAnalysis =
    Math.round(
      (paasCal.depreciationInputs.typicalOwnershipTimelineZTRs *
        paasCal.depreciationInputs.typicalHoursMowedPerYear) /
        1000
    ) * 1000;
  const lengthMowingOperationsTCO = (
    totalHoursMowedTCOAnalysis /
    (paasCal.mowingMonthly * paasCal.customerInputs.lengthMowingSeason)
  ).toFixed(2);
  const paaSPremiumOverFourYearFinancing =
    paasCal.paaSPremiumOverFourYearFinancing;
  const [totalMonthlyPaaSMaintenanceCost, setTotalMonthlyPaaSMaintenanceCost] =
    useState(0);
  const [NGBROpEx, setNGBROpEx] = useState(0);
  const [gasZTROpEx, setGasZTROpEx] = useState(0);
  const [totalGasZTRPurchasePrice, setTotalGasZTRPurchasePrice] = useState(0);
  const BareNGBR = paasCal.BareNGBR;
  const [totalNGBRCostBare, setTotalNGBRCostBare] = useState(0);
  const [costofChargers, setCostofChargers] = useState(0);
  const [costofBateries, setCostofBateries] = useState(0);
  const [totalNGBRCostWith, setTotalNGBRCostWith] = useState(0);
  const [savingsWith4yearFinancing, setSavingsWith4yearFinancing] = useState(0);
  const [savingsWith3yearFinancing, setSavingsWith3yearFinancing] = useState(0);
  const [savingsWithFPP, setSavingsWithFPP] = useState(0);
  const [savingsWithNGBRCashPurchase, setSavingsWithNGBRCashPurchase] =
    useState(0);
  const [breakeven, setBreakeven] = useState({
    breakeven4yearFinancingNoResale: 0,
    breakeven3yearFinancingNoResale: 0,
    breakevenFPPNoResale: 0,
    breakevenOutrightPurchaseNoResale: 0,
  });
  const [NGBRResalePriceBareNGBR, setNGBRResalePriceBareNGBR] = useState(0);
  const [NGBRResalePriceNGBR, setNGBRResalePriceNGBR] = useState(0);
  const [gasZTRResalePrice, setGasZTRResalePrice] = useState(0);
  const [eZTRResalePremiumBareNGBR, setEZTRResalePremiumBareNGBR] = useState(0);
  const [eZTRResalePremiumCashPurchase, setEZTRResalePremiumCashPurchase] =
    useState(0);
  const [gasZTR, setGasZTR] = useState({
    TCOofGasZTR: 0,
    depreciationofGasZTR: 0,
    fuel: 0,
    maintenance: 0,
  });
  const [cashPurchase, setCashPurchase] = useState({
    TCOofNGBR: 0,
    depreciationofGasZTR: 0,
    power: 0,
    maintenance: 0,
  });
  const [NGBRWithFlexiblePowerProgram, setNGBRWithFlexiblePowerProgram] =
    useState({
      depreciationOfBareNGBR: 0,
      flexiblePowerProgramSubscription: 0,
      financingFee36: 0,
      financingFee48: 0,
    });
  const enviromentalBenefits = { ...paasCal.enviromentalBenefits };
  const [
    gallonsOfFuelConsumedOverPerYear,
    setGallonsOfFuelConsumedOverPerYear,
  ] = useState(paasCal.gallonsOfFuelConsumedOverPerYear);
  const [poundsOfCO2Avoided, setPoundsOfCO2Avoided] = useState(
    paasCal.poundsOfCO2Avoided
  );
  const averageFrequencyPerZTRServicing =
    paasCal.averageFrequencyPerZTRServicing;
  const averageCommuteToFromServicingDealer =
    paasCal.averageCommuteToFromServicingDealer;
  const averageTimeForServicing = paasCal.averageTimeForServicing;
  const averageTotalTimeForServicing =
    averageTimeForServicing + averageCommuteToFromServicingDealer;
  const [numberOfMaintenanceJobsPerYear, setNumberOfMaintenanceJobsPerYear] =
    useState(paasCal.numberOfMaintenanceJobsPerYear);
  const [reductionFromNGBRResale, setReductionFromNGBRResale] = useState({
    ...paasCal.reductionFromNGBRResale,
  });

  // -----------------> useEffects <-----------------:

  // OBSERVER:
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCheckObserve(true);
        } else {
          setCheckObserve(false);
          document.querySelectorAll(".tip").forEach((tip) => {
            tip.classList.remove("active");
          });
        }
      },
      {
        root: null,
        threshold: 0.7,
      }
    );
    observer.observe(document.querySelector("#outputs"));
  }, [checkObserve]);

  // Get Fuel & Electric Prices
  useEffect(() => {
    /// REMOVE setLoading
    setLoading(false);
    // UNCOMMENT:
    // const padds = {
    //   PADD1: "PET.EMM_EPMRU_PTE_R10_DPG.W", // PET.EMM_EPMRU_PTE_R10_DPG.W - PADD1
    //   PADD2: "PET.EMM_EPMRU_PTE_R20_DPG.W", // PET.EMM_EPMRU_PTE_R20_DPG.W - PADD2
    //   PADD3: "PET.EMM_EPMRU_PTE_R30_DPG.W", // PET.EMM_EPMRU_PTE_R30_DPG.W - PADD3
    //   PADD4: "PET.EMM_EPMRU_PTE_R40_DPG.W", // PET.EMM_EPMRU_PTE_R40_DPG.W - PADD4
    //   PADD5: "PET.EMM_EPMRU_PTE_R50_DPG.W", // PET.EMM_EPMRU_PTE_R50_DPG.W - PADD5
    // };
    // const eiaKey = process.env.REACT_APP_EIA_KEY;
    // const fetchData = async (updateWhat, url) => {
    //   await fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       updateWhat === "fuel"
    //         ? setLatestFuelWeeklyPrice(data.series[0].data[0][1])
    //         : setLatestAvgPowerPrice(data.series[0].data[0][1] / 100);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       setLoading(false);
    //       console.error("There has been an error:", error);
    //     });
    // };
    // fetchData(
    //   "fuel",
    //   `https://api.eia.gov/series/?api_key=${eiaKey}&series_id=${padds[PADDRegion]}`
    // );
    // fetchData(
    //   "power",
    //   `https://api.eia.gov/series/?api_key=${eiaKey}&series_id=ELEC.PRICE.${customerInputs.location}-ALL.M`
    // );
  }, [
    latestFuelWeeklyPrice,
    latestAvgPowerPrice,
    PADDRegion,
    customerInputs.location,
  ]);

  useEffect(() => {
    setMowingMonthly(
      (
        customerInputs.mowingHours *
        customerInputs.daysMowedPerWeek *
        averageWeeksPerMonth
      ).toFixed(2)
    );
  }, [
    averageWeeksPerMonth,
    customerInputs.daysMowedPerWeek,
    customerInputs.mowingHours,
  ]);

  useEffect(() => {
    setLengthOffSeason(12 - customerInputs.lengthMowingSeason);
  }, [customerInputs.lengthMowingSeason]);

  useEffect(() => {
    setMonthlyPaaSPowerCostNGBR(
      Math.round(latestAvgPowerPrice * NGBRBatteryCapacity * mowingMonthly)
    );
  }, [NGBRBatteryCapacity, latestAvgPowerPrice, mowingMonthly]);

  useEffect(() => {
    setTotalMonthlyPaaSPowerCost(
      monthlyPaaSPowerCostNGBR * customerInputs.numberNGBRUnits
    );
  }, [customerInputs.numberNGBRUnits, monthlyPaaSPowerCostNGBR]);

  useEffect(() => {
    setRequiredEquipment({
      bateries: paasCal.equipment.deault.bateries,
      chargers: paasCal.equipment.deault.chargers,
      totalBateries:
        paasCal.equipment.deault.bateries * customerInputs.numberNGBRUnits,
      totalChargers:
        paasCal.equipment.deault.chargers * customerInputs.numberNGBRUnits,
    });
  }, [customerInputs.numberNGBRUnits]);

  useEffect(() => {
    setMonthlyMaintenanceCostPerZTR(
      Math.round(averageHourlyMaintenanceCost * mowingMonthly)
    );
  }, [averageHourlyMaintenanceCost, mowingMonthly]);

  useEffect(() => {
    setMonthlyFuelCostPerZTR(
      Math.round(latestFuelWeeklyPrice * fuelConsumptionRate * mowingMonthly)
    );
  }, [fuelConsumptionRate, latestFuelWeeklyPrice, mowingMonthly]);

  useEffect(() => {
    setMonthlyMaintenanceCostPerNGBR(
      Math.round(monthlyMaintenanceCostPerZTR * electricMaintenanceCostGas)
    );
  }, [electricMaintenanceCostGas, monthlyMaintenanceCostPerZTR]);

  useEffect(() => {
    setTotalMonthlyPaaSMaintenanceCost(
      monthlyMaintenanceCostPerNGBR * customerInputs.numberNGBRUnits
    );
  }, [customerInputs.numberNGBRUnits, monthlyMaintenanceCostPerNGBR]);

  useEffect(() => {
    setNGBROpEx(totalMonthlyPaaSPowerCost + totalMonthlyPaaSMaintenanceCost);
  }, [totalMonthlyPaaSMaintenanceCost, totalMonthlyPaaSPowerCost]);

  useEffect(() => {
    setTotalMonthlyZTRFuelCost(
      monthlyFuelCostPerZTR * customerInputs.numberNGBRUnits
    );
  }, [customerInputs.numberNGBRUnits, monthlyFuelCostPerZTR]);

  useEffect(() => {
    setTotalMonthlyZTRMaintenanceCost(
      monthlyMaintenanceCostPerZTR * customerInputs.numberNGBRUnits
    );
  }, [customerInputs.numberNGBRUnits, monthlyMaintenanceCostPerZTR]);

  useEffect(() => {
    setGasZTROpEx(totalMonthlyZTRFuelCost + totalMonthlyZTRMaintenanceCost);
  }, [totalMonthlyZTRFuelCost, totalMonthlyZTRMaintenanceCost]);

  useEffect(() => {
    setTotalGasZTRPurchasePrice(
      customerInputs.gasZTRPrice * customerInputs.numberNGBRUnits
    );
  }, [customerInputs.gasZTRPrice, customerInputs.numberNGBRUnits]);

  useEffect(() => {
    setTotalNGBRCostBare(BareNGBR * customerInputs.numberNGBRUnits);
  }, [BareNGBR, customerInputs.numberNGBRUnits]);

  useEffect(() => {
    setCostofChargers(
      powerProgramCosts.charger * requiredEquipment.totalChargers
    );
  }, [powerProgramCosts.charger, requiredEquipment.totalChargers]);

  useEffect(() => {
    setCostofBateries(
      powerProgramCosts.battery * requiredEquipment.totalBateries
    );
  }, [powerProgramCosts.battery, requiredEquipment.totalBateries]);

  useEffect(() => {
    setTotalNGBRCostWith(costofBateries + costofChargers + totalNGBRCostBare);
  }, [costofBateries, costofChargers, totalNGBRCostBare]);

  useEffect(() => {
    setSavingsWith4yearFinancing(gasZTROpEx - (NGBROpEx + pricing.priceMo48));
  }, [NGBROpEx, gasZTROpEx, pricing.priceMo48]);

  useEffect(() => {
    setSavingsWith3yearFinancing(gasZTROpEx - (NGBROpEx + pricing.priceMo36));
  }, [NGBROpEx, gasZTROpEx, pricing.priceMo36]);

  useEffect(() => {
    setSavingsWithFPP(gasZTROpEx - (NGBROpEx + pricing.targetPaasMonthlyPrice));
  }, [NGBROpEx, gasZTROpEx, pricing.targetPaasMonthlyPrice]);

  useEffect(() => {
    setSavingsWithNGBRCashPurchase(gasZTROpEx - NGBROpEx);
  }, [NGBROpEx, gasZTROpEx]);

  useEffect(() => {
    setBreakeven({
      breakevenOutrightPurchaseNoResale: (
        (totalNGBRCostWith - totalGasZTRPurchasePrice) /
        savingsWithNGBRCashPurchase
      ).toFixed(1),
      breakevenFPPNoResale: (
        (totalNGBRCostBare - totalGasZTRPurchasePrice) /
        savingsWithFPP
      ).toFixed(1),
      breakeven3yearFinancingNoResale: (
        (totalNGBRCostBare - totalGasZTRPurchasePrice) /
        savingsWith3yearFinancing
      ).toFixed(1),
      breakeven4yearFinancingNoResale: (
        (totalNGBRCostBare - totalGasZTRPurchasePrice) /
        savingsWith4yearFinancing
      ).toFixed(1),
    });
  }, [
    savingsWith3yearFinancing,
    savingsWith4yearFinancing,
    savingsWithFPP,
    savingsWithNGBRCashPurchase,
    totalGasZTRPurchasePrice,
    totalNGBRCostBare,
    totalNGBRCostWith,
  ]);

  useEffect(() => {
    setNGBRResalePriceBareNGBR(
      (
        totalNGBRCostBare *
        (1 - depreciationInputs.electricZTRDepreciationRate)
      ).toFixed(2)
    );
  }, [depreciationInputs.electricZTRDepreciationRate, totalNGBRCostBare]);

  useEffect(() => {
    setNGBRResalePriceNGBR(
      (
        totalNGBRCostWith *
        (1 - depreciationInputs.electricZTRDepreciationRate)
      ).toFixed(2)
    );
  }, [depreciationInputs.electricZTRDepreciationRate, totalNGBRCostWith]);

  useEffect(() => {
    setGasZTRResalePrice(
      (
        totalGasZTRPurchasePrice *
        (1 - depreciationInputs.gasZTRDepreciationRate)
      ).toFixed(2)
    );
  }, [depreciationInputs.gasZTRDepreciationRate, totalGasZTRPurchasePrice]);

  useEffect(() => {
    setEZTRResalePremiumBareNGBR(NGBRResalePriceBareNGBR - gasZTRResalePrice);
  }, [NGBRResalePriceBareNGBR, gasZTRResalePrice]);

  useEffect(() => {
    setEZTRResalePremiumCashPurchase(
      NGBRResalePriceNGBR - eZTRResalePremiumBareNGBR
    );
  }, [NGBRResalePriceNGBR, eZTRResalePremiumBareNGBR]);

  useEffect(() => {
    setGasZTR({
      TCOofGasZTR:
        gasZTR.depreciationofGasZTR + gasZTR.fuel + gasZTR.maintenance,
      depreciationofGasZTR:
        customerInputs.gasZTRPrice *
        depreciationInputs.gasZTRDepreciationRate *
        customerInputs.numberNGBRUnits,
      fuel:
        totalMonthlyZTRFuelCost *
        customerInputs.lengthMowingSeason *
        lengthMowingOperationsTCO,
      maintenance:
        totalMonthlyZTRMaintenanceCost *
        customerInputs.lengthMowingSeason *
        lengthMowingOperationsTCO,
    });
  }, [
    customerInputs.gasZTRPrice,
    customerInputs.lengthMowingSeason,
    customerInputs.numberNGBRUnits,
    depreciationInputs.gasZTRDepreciationRate,
    gasZTR.depreciationofGasZTR,
    gasZTR.fuel,
    gasZTR.maintenance,
    lengthMowingOperationsTCO,
    totalMonthlyZTRFuelCost,
    totalMonthlyZTRMaintenanceCost,
  ]);

  useEffect(() => {
    setCashPurchase({
      TCOofNGBR:
        cashPurchase.depreciationofGasZTR +
        cashPurchase.power +
        cashPurchase.maintenance,
      depreciationofGasZTR:
        totalNGBRCostWith * depreciationInputs.electricZTRDepreciationRate,
      power:
        totalMonthlyPaaSPowerCost *
        customerInputs.lengthMowingSeason *
        lengthMowingOperationsTCO,
      maintenance:
        totalMonthlyPaaSMaintenanceCost *
        customerInputs.lengthMowingSeason *
        lengthMowingOperationsTCO,
    });
  }, [
    cashPurchase.depreciationofGasZTR,
    cashPurchase.maintenance,
    cashPurchase.power,
    customerInputs.lengthMowingSeason,
    depreciationInputs.electricZTRDepreciationRate,
    lengthMowingOperationsTCO,
    totalMonthlyPaaSMaintenanceCost,
    totalMonthlyPaaSPowerCost,
    totalNGBRCostWith,
  ]);

  useEffect(() => {
    setNGBRWithFlexiblePowerProgram({
      depreciationOfBareNGBR:
        totalNGBRCostBare * depreciationInputs.electricZTRDepreciationRate,
      flexiblePowerProgramSubscription:
        pricing.targetPaasMonthlyPrice *
        customerInputs.lengthMowingSeason *
        lengthMowingOperationsTCO,
      financingFee36:
        pricing.priceMo36 *
        customerInputs.lengthMowingSeason *
        lengthMowingOperationsTCO,
      financingFee48:
        pricing.priceMo48 *
        customerInputs.lengthMowingSeason *
        lengthMowingOperationsTCO,
    });
  }, [
    customerInputs.lengthMowingSeason,
    depreciationInputs.electricZTRDepreciationRate,
    lengthMowingOperationsTCO,
    pricing.priceMo36,
    pricing.priceMo48,
    pricing.targetPaasMonthlyPrice,
    totalNGBRCostBare,
  ]);

  useEffect(() => {
    setGallonsOfFuelConsumedOverPerYear(
      fuelConsumptionRate *
        mowingMonthly *
        customerInputs.lengthMowingSeason *
        customerInputs.numberNGBRUnits
    );
  }, [
    customerInputs.lengthMowingSeason,
    customerInputs.numberNGBRUnits,
    fuelConsumptionRate,
    mowingMonthly,
  ]);

  useEffect(() => {
    setPoundsOfCO2Avoided(
      gallonsOfFuelConsumedOverPerYear *
        enviromentalBenefits.convertingGallonsOfGasolineToCO2
    );
  }, [
    enviromentalBenefits.convertingGallonsOfGasolineToCO2,
    gallonsOfFuelConsumedOverPerYear,
  ]);

  useEffect(() => {
    setNumberOfMaintenanceJobsPerYear(
      (
        (mowingMonthly *
          customerInputs.lengthMowingSeason *
          customerInputs.numberNGBRUnits) /
        averageFrequencyPerZTRServicing
      ).toFixed(1)
    );
  }, [
    averageFrequencyPerZTRServicing,
    customerInputs.lengthMowingSeason,
    customerInputs.numberNGBRUnits,
    mowingMonthly,
  ]);

  useEffect(() => {
    setReductionFromNGBRResale({
      cashPurchase: Math.round(
        eZTRResalePremiumCashPurchase / savingsWithNGBRCashPurchase
      ),
      FPP: Math.round(eZTRResalePremiumBareNGBR / savingsWithFPP),
      financing36: Math.round(
        eZTRResalePremiumBareNGBR / savingsWith3yearFinancing
      ),
      financing48: Math.round(
        eZTRResalePremiumBareNGBR / savingsWith4yearFinancing
      ),
    });
  }, [
    eZTRResalePremiumBareNGBR,
    eZTRResalePremiumCashPurchase,
    savingsWith3yearFinancing,
    savingsWith4yearFinancing,
    savingsWithFPP,
    savingsWithNGBRCashPurchase,
  ]);

  useEffect(() => {
    setRequiredEquipment({
      bateries:
        paasCal.equipment.requiredEquipment[customerInputs.mowingHours]
          .bateries,
      chargers:
        paasCal.equipment.requiredEquipment[customerInputs.mowingHours]
          .chargers,
      totalBateries:
        paasCal.equipment.requiredEquipment[customerInputs.mowingHours]
          .bateries * customerInputs.numberNGBRUnits,
      totalChargers:
        paasCal.equipment.requiredEquipment[customerInputs.mowingHours]
          .chargers * customerInputs.numberNGBRUnits,
    });
  }, [customerInputs.mowingHours, customerInputs.numberNGBRUnits]);

  useEffect(() => {
    let financing;
    paasCal.financingOptions.forEach((financingOption) => {
      financing = {
        ...financing,
        [`priceMo${financingOption.presentValue}`]: Math.round(
          PMT(
            financingOption.interestRate / financingOption.totalNumberPayments,
            financingOption.presentValue,
            -pricing.totalCashPrice
          )
        ),
      };
    });
    // console.log(financing);

    setPricing({
      totalCashPrice:
        requiredEquipment.totalBateries * powerProgramCosts.battery +
        requiredEquipment.totalChargers * powerProgramCosts.charger,
      targetPaasMonthlyPrice: Math.round(
        pricing.priceMo48 + (pricing.priceMo48 * 0.1 + 1)
      ),
      annualizedPaaSPrice: Math.round(pricing.targetPaasMonthlyPrice * 12),
      annualRebateOffSeason: lengthOffSeason * pricing.targetPaasMonthlyPrice,
      ...financing,
    });
  }, [
    requiredEquipment,
    powerProgramCosts.battery,
    powerProgramCosts.charger,
    pricing.totalCashPrice,
    pricing.priceMo48,
    pricing.targetPaasMonthlyPrice,
    lengthOffSeason,
  ]);
  return (
    <>
      {loading === true ? (
        <div className="loading">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 809.6 195.8">
            <path d="M.047.003h809.6v15.3H.047V.003zM.047 180.403h809.5v15.3H-.053v-15.3zM686.747 23.003h122.8v42.2h-33.3v107.1h-56.4v-107.1h-33.2v-42.2M602.347 23.003v149.4h102.4v-44.5h-46.2v-104.9h-56.2M487.047 23.003h61.8l47.4 149.4h-55.1l-5.6-22.7h-34.5l-5.1 22.7h-57.5l48.6-149.4zm21.7 93.4h19.2l-9.4-43.5-9.8 43.5M457.347 23.003h-55l-15.3 72.9-16.6-72.9h-48.6l-15.7 72.9-15-72.9h-54.9l41.1 149.4h51l17.2-72.9 17.6 72.9h52l42.2-149.4M155.047 55.003h81.9v30.7h-39.7v12.8h34.5v30.8h-34.5v12.7h39.7v30.4h-81.9v-117.4M.047 172.403v-149.4h70c41.3 0 74.2 22.5 74.2 75 0 51.1-31.8 74.4-74.5 74.4H.047zm57.8-44.7c17.7 0 29.4-7.4 29.4-30.1 0-24.9-11.6-31.6-29.3-31.6h-4.5v61.7h4.4M783.947 160.003c0-7 5.7-12.2 12.4-12.2s12.4 5.2 12.4 12.2c0 7.1-5.7 12.3-12.4 12.3-6.7-.1-12.4-5.2-12.4-12.3zm12.4 10.2c5.5 0 9.9-4.3 9.9-10.2 0-5.8-4.4-10.2-9.9-10.2-5.6 0-10 4.4-10 10.2 0 5.9 4.4 10.2 10 10.2zm-2.4-8.6h2l2.7 4.5h3l-3.1-4.7c2.1-.3 3.6-1.6 3.6-4.1 0-2.2-1.7-3.7-5.1-3.7h-5.4v12.6h2.3v-4.6zm0-2.1v-4h2.7c1.5 0 3.2.1 3.2 2 0 2.1-1.4 2.1-3.2 2.1h-2.7" />
          </svg>
        </div>
      ) : (
        ""
      )}
      <ul className="main" id="outputs">
        <li className="column container-input">
          <CustomerForm
            setPADDRegion={setPADDRegion}
            customerInputs={customerInputs}
            setCustomerInputs={setCustomerInputs}
          />
        </li>
        <li className="column container-output">
          <TotalCashPrice {...{ pricing }} />
          <OpExCost
            {...{
              totalMonthlyPaaSPowerCost,
              totalMonthlyPaaSMaintenanceCost,
            }}
          />
          <Hardware {...{ requiredEquipment }} />
          <Breakeven {...{ breakeven, reductionFromNGBRResale }} />
          <FinancingNGBR
            {...{ gasZTR, cashPurchase, NGBRWithFlexiblePowerProgram }}
          />
          <Environmental {...{ enviromentalBenefits, poundsOfCO2Avoided }} />
          <Maintenance
            {...{
              numberOfMaintenanceJobsPerYear,
              averageTotalTimeForServicing,
            }}
          />
          <Compare
            {...{
              monthlyPaaSPowerCostNGBR,
              customerInputs,
              monthlyFuelCostPerZTR,
              monthlyMaintenanceCostPerNGBR,
              monthlyMaintenanceCostPerZTR,
              pricing,
            }}
          />
        </li>
      </ul>

      <form
        id="output"
        className={`main main-output ${checkObserve ? "on-screen" : ""}`}
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
              <label>Geography / location</label>
              <input value={customerInputs.location} readOnly />
            </li>
            <li className="green">
              <label>Days mowed per week</label>
              <input value={customerInputs.daysMowedPerWeek} readOnly />
            </li>
            <li className="green">
              <label>Number of NGBR units</label>
              <input value={customerInputs.numberNGBRUnits} readOnly />
            </li>
            <li className="green">
              <label>[HELPER] Mowing hours for calculation</label>
              <input value={customerInputs.mowingHours} readOnly />
            </li>
            <li>
              <label>[HELPER] Average weeks per month</label>
              <input value={averageWeeksPerMonth} readOnly />
            </li>
            <li>
              <label className="red">
                Converting mowing frequency to monthly
              </label>
              <input value={mowingMonthly} readOnly />
            </li>
            <li className="green">
              <label>Length of mowing season</label>
              <input value={customerInputs.lengthMowingSeason} readOnly />
            </li>
            <li>
              <label>[HELPER] Length of off-season</label>
              <input value={lengthOffSeason} readOnly />
            </li>
            <li>
              <label>Price of gas ZTR</label>
              <input value={customerInputs.gasZTRPrice} readOnly />
            </li>
            <li>
              <label>Length of mowing operations for TCO</label>
              <input value={lengthMowingOperationsTCO} readOnly />
            </li>
            <li>
              <label>Total mowing hours for TCO</label>
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
              <input
                value={breakeven.breakeven3yearFinancingNoResale}
                readOnly
              />
            </li>
            <li>
              <label>Breakeven: 4-year financing - No resale</label>
              <input
                value={breakeven.breakeven4yearFinancingNoResale}
                readOnly
              />
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
                value={
                  eZTRResalePremiumBareNGBR ? eZTRResalePremiumBareNGBR : ""
                }
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
              <input
                value={depreciationInputs.gasZTRDepreciationRate}
                readOnly
              />
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
            <li className="title">
              Cash purchase (NGBR + batteries & chargers)
            </li>
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
              <input
                value={depreciationInputs.gasZTRDepreciationRate}
                readOnly
              />
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
    </>
  );
};

export default PaasCalculator;
