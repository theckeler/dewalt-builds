import React, { useState, useEffect } from "react";
import paasCal from "../data/paas-cal.json";
import PMT from "../utils/pmt";
import Loading from "./loading/Loading";
import Steps from "./steps/Steps";
import Password from "./password/Password";
import getCookies from "../utils/getCookies";

import "../scss/paas-calculator.scss";

const PaasCalculator = () => {
  //#region PRE-CALCULATIONS
  const [loading, setLoading] = useState(true);
  const [geolocated, setGeolocated] = useState(false);

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
  const [duoarea, setDuoarea] = useState(paasCal.duoarea);
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

  const [totalMonthlyZTRFuelCost, setTotalMonthlyZTRFuelCost] = useState(0);
  const [totalMonthlyZTRMaintenanceCost, setTotalMonthlyZTRMaintenanceCost] =
    useState(0);
  const depreciationInputs = { ...paasCal.depreciationInputs };
  const totalHoursMowedTCOAnalysis = 3000;
  const [lengthMowingOperationsTCO, setLengthMowingOperationsTCO] =
    useState(1.978);
  // const paaSPremiumOverFourYearFinancing =
  //   paasCal.paaSPremiumOverFourYearFinancing;
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

  const [editThis, setEditThis] = useState({
    state: false,
    gasZTRPrice: false,
    daysMowedPerWeek: false,
    numberNGBRUnits: false,
    mowingHours: false,
    lengthMowingSeason: false,
  });
  //#endregion PRE-CALCULATIONS

  //#region useEffects
  useEffect(() => {
    if (!geolocated) {
      window.navigator.geolocation.getCurrentPosition(
        (loc) => {
          const { latitude, longitude } = loc.coords;
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=locality&key=${process.env.REACT_APP_GEOCODING_API_KEY}`
          )
            .then((response) => response.json())
            .then((pos) => {
              if (pos.results.length > 0) {
                pos.results[0].address_components.forEach((component) => {
                  if (component.short_name === "US") {
                    setCustomerInputs({
                      ...customerInputs,
                      location: pos.results[0].address_components[2].short_name,
                    });
                  }
                });
              } else {
                console.error("Error fetching data");
              }
            })
            .catch(function (error) {
              console.error(error);
            });
          //console.log("located");
          setGeolocated(true);
        },
        (error) => {
          setGeolocated(true);
          console.error("Unable to retrieve your location", error);
        }
      );
    }
  });

  const [latestFuelWeeklyPrice, setLatestFuelWeeklyPrice] = useState(
    paasCal.latestFuelWeeklyPrice
  );
  const [latestAvgPowerPrice, setLatestAvgPowerPrice] = useState(
    paasCal.latestAvgPowerPrice
  );

  useEffect(() => {
    const resetInError = (type) => {
      if (type === "petroleum") {
        setLatestFuelWeeklyPrice(paasCal.latestFuelWeeklyPrice);
      } else {
        setLatestAvgPowerPrice(paasCal.latestAvgPowerPrice);
      }
    };

    const fetchLatestPrices = async (url, type) => {
      setLoading(true);
      await fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            resetInError(type);
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          if (type === "petroleum") {
            setLatestFuelWeeklyPrice(data.response.data[0].value);
          } else {
            setLatestAvgPowerPrice(data.response.data[0].price / 100);
          }
        })
        .catch(() => {
          resetInError(type);
        });
    };

    Promise.allSettled([
      fetchLatestPrices(
        `https://api.eia.gov/v2/petroleum/pri/gnd/data/?frequency=weekly&data[0]=value&facets[product][]=EPMRU&facets[duoarea][]=${duoarea}&sort[0][column]=period&sort[0][direction]=desc&length=1&api_key=${process.env.REACT_APP_EIA_KEY}`,
        "petroleum"
      ),

      fetchLatestPrices(
        `https://api.eia.gov/v2/electricity/retail-sales/data/?frequency=monthly&data[0]=price&facets[sectorid][]=RES&facets[stateid][]=${customerInputs.location}&sort[0][column]=period&sort[0][direction]=desc&length=1&api_key=${process.env.REACT_APP_EIA_KEY}`,
        "electricity"
      ),
    ]).then(() => {
      setLoading(false);
    });
  }, [customerInputs.location, duoarea]);

  useEffect(() => {
    setMowingMonthly(
      (
        customerInputs.mowingHours *
        customerInputs.daysMowedPerWeek *
        averageWeeksPerMonth
      ).toFixed(4)
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
      ).toFixed(4),
      breakevenFPPNoResale: (
        (totalNGBRCostBare - totalGasZTRPurchasePrice) /
        savingsWithFPP
      ).toFixed(4),
      breakeven3yearFinancingNoResale: (
        (totalNGBRCostBare - totalGasZTRPurchasePrice) /
        savingsWith3yearFinancing
      ).toFixed(4),
      breakeven4yearFinancingNoResale: (
        (totalNGBRCostBare - totalGasZTRPurchasePrice) /
        savingsWith4yearFinancing
      ).toFixed(4),
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
      ).toFixed(4)
    );
  }, [depreciationInputs.electricZTRDepreciationRate, totalNGBRCostBare]);

  useEffect(() => {
    setNGBRResalePriceNGBR(
      (
        totalNGBRCostWith *
        (1 - depreciationInputs.electricZTRDepreciationRate)
      ).toFixed(4)
    );
  }, [depreciationInputs.electricZTRDepreciationRate, totalNGBRCostWith]);

  useEffect(() => {
    setGasZTRResalePrice(
      (
        totalGasZTRPurchasePrice *
        (1 - depreciationInputs.gasZTRDepreciationRate)
      ).toFixed(4)
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
      ).toFixed(4)
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

  useEffect(() => {
    setLengthMowingOperationsTCO(
      (
        totalHoursMowedTCOAnalysis /
        (mowingMonthly * customerInputs.lengthMowingSeason)
      ).toFixed(4)
    );
  }, [customerInputs.lengthMowingSeason, mowingMonthly]);
  //#endregion

  // STEPS COMFIGURATION:
  const [whichStep, setWhichStep] = useState(1);
  const [password, setPassword] = useState(false);

  return (
    <>
      {loading === true && <Loading {...{ loading }} />}
      {getCookies("loggedIn") ? (
        <Steps
          {...{
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
          }}
        />
      ) : (
        <Password {...{ setPassword, password }} />
      )}
    </>
  );
};

export default PaasCalculator;
