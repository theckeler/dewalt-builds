import React, { useState, useEffect } from "react";
import "../scss/paas-calculator.scss";
import CustomerInputsForm from "./customerInputsForm";
import CustomerOutputs from "./customerOutputs";
import MainOutput from "./mainOutput";

const PaasCalculator = () => {
  const [loading, setLoading] = useState(true); // Converting mowing frequency to monthly

  const hideShowSection = (e) => {
    e.preventDefault();
    document.querySelector("#output").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
  };

  const handleChange = (e) => {
    let inputValue;
    if (isNaN(e.target.value)) {
      inputValue = e.target.value;
    } else {
      inputValue = Number(e.target.value);
    }

    setCustomerInputs({
      ...customerInputs,
      [e.target.getAttribute("for")]: inputValue,
    });
  };

  const buttonClick = (e) => {
    e.preventDefault();
    document.querySelectorAll("button").forEach(function (button) {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  const PMT = (ir, np, pv, fv, type) => {
    /*
     * ir   - Required. The interest rate for the loan.
     * np   - Required. The total number of payments for the loan.
     * pv   - Required. The present value, or the total amount that a series of future payments is worth now; also known as the principal.
     * fv   - Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
     * type - Optional. The number 0 (zero) or 1 and indicates when payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, pvif;
    fv || (fv = 0);
    type || (type = 0);
    if (ir === 0) return -(pv + fv) / np;
    pvif = Math.pow(1 + ir, np);
    pmt = (-ir * (pv * pvif + fv)) / (pvif - 1);
    if (type === 1) pmt /= 1 + ir;
    return pmt;
  };

  const averageWeeksPerMonth = Number(52 / 12).toFixed(2); // [HELPER] Average weeks per month (52/12)
  const [mowingMonthly, setMowingMonthly] = useState(108); // Converting mowing frequency to monthly
  const [lengthOffSeason, setLengthOffSeason] = useState(2.0); // [HELPER] Length of off-season (12 - lengthMowingSeason)
  const [customerInputs, setCustomerInputs] = useState({
    location: "OH", // Geography / location
    daysMowedPerWeek: 5, // Days mowed per week
    numberNGBRUnits: 1, // # Number of NGBR units
    mowingHours: 5, //    [HELPER] Mowing hours for calculation,
    lengthMowingSeason: 10, // Length of mowing season
  });
  const [requiredEquipment, setRequiredEquipment] = useState({
    bateries: 7,
    chargers: 2,
    totalBateries: 7,
    totalChargers: 2,
  });
  const powerProgramCosts = {
    battery: 1986,
    charger: 999,
  };
  const dollarUSLocale = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });
  const NGBRBatteryCapacity = 5;
  const lastestMonth = "Oct 2021";
  const averageHourlyMaintenanceCost = 1.05;
  const lastestWeek = "Jan 10, 2022";
  const fuelConsumptionRate = 1.7;
  const electricMaintenanceCostGas = 0.07;
  const [PADDRegion, setPADDRegion] = useState("PADD2");
  const [pricing, setPricing] = useState(0);
  const [monthlyPaaSPowerCostNGBR, setMonthlyPaaSPowerCostNGBR] = useState(0);
  const [monthlyMaintenanceCostPerZTR, setMonthlyMaintenanceCostPerZTR] =
    useState(0);
  const [monthlyFuelCostPerZTR, setMonthlyFuelCostPerZTR] = useState(0);
  const [monthlyMaintenanceCostPerNGBR, setMonthlyMaintenanceCostPerNGBR] =
    useState(0);
  const [latestFuelWeeklyPrice, setLatestFuelWeeklyPrice] = useState(3.108);
  const [latestAvgPowerPrice, setLatestAvgPowerPrice] = useState(0.1004);

  useEffect(() => {
    const padds = {
      PADD1: "PET.EMM_EPMRU_PTE_R10_DPG.W", // PET.EMM_EPMRU_PTE_R10_DPG.W - PADD1
      PADD2: "PET.EMM_EPMRU_PTE_R20_DPG.W", // PET.EMM_EPMRU_PTE_R20_DPG.W - PADD2
      PADD3: "PET.EMM_EPMRU_PTE_R30_DPG.W", // PET.EMM_EPMRU_PTE_R30_DPG.W - PADD3
      PADD4: "PET.EMM_EPMRU_PTE_R40_DPG.W", // PET.EMM_EPMRU_PTE_R40_DPG.W - PADD4
      PADD5: "PET.EMM_EPMRU_PTE_R50_DPG.W", // PET.EMM_EPMRU_PTE_R50_DPG.W - PADD5
    };
    const eiaKey = process.env.REACT_APP_EIA_KEY;
    const fetchData = async (updateWhat, url) => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          updateWhat === "fuel"
            ? setLatestFuelWeeklyPrice(data.series[0].data[0][1])
            : setLatestAvgPowerPrice(data.series[0].data[0][1] / 100);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("There has been an error:", error);
        });
    };
    fetchData(
      "fuel",
      `https://api.eia.gov/series/?api_key=${eiaKey}&series_id=${padds[PADDRegion]}`
    );
    fetchData(
      "power",
      `https://api.eia.gov/series/?api_key=${eiaKey}&series_id=ELEC.PRICE.${customerInputs.location}-ALL.M`
    );
  }, [
    latestFuelWeeklyPrice,
    latestAvgPowerPrice,
    PADDRegion,
    customerInputs.location,
  ]);

  useEffect(() => {
    setMowingMonthly(
      Math.round(
        customerInputs.mowingHours *
          customerInputs.daysMowedPerWeek *
          averageWeeksPerMonth
      )
    );
    setLengthOffSeason(12 - customerInputs.lengthMowingSeason);
    setMonthlyPaaSPowerCostNGBR(
      Math.round(latestAvgPowerPrice * NGBRBatteryCapacity * mowingMonthly)
    );

    switch (customerInputs.mowingHours) {
      case 1:
        setRequiredEquipment({
          bateries: 5,
          chargers: 1,
          totalBateries: 5 * customerInputs.numberNGBRUnits,
          totalChargers: 1 * customerInputs.numberNGBRUnits,
        });
        break;
      case 3:
        setRequiredEquipment({
          bateries: 5,
          chargers: 1,
          totalBateries: 5 * customerInputs.numberNGBRUnits,
          totalChargers: 1 * customerInputs.numberNGBRUnits,
        });
        break;
      case 5:
        setRequiredEquipment({
          bateries: 7,
          chargers: 2,
          totalBateries: 7 * customerInputs.numberNGBRUnits,
          totalChargers: 2 * customerInputs.numberNGBRUnits,
        });
        break;
      case 7:
        setRequiredEquipment({
          bateries: 10,
          chargers: 2,
          totalBateries: 10 * customerInputs.numberNGBRUnits,
          totalChargers: 2 * customerInputs.numberNGBRUnits,
        });
        break;
      case 9:
        setRequiredEquipment({
          bateries: 12,
          chargers: 3,
          totalBateries: 12 * customerInputs.numberNGBRUnits,
          totalChargers: 3 * customerInputs.numberNGBRUnits,
        });
        break;
      default:
        setRequiredEquipment({
          bateries: 7,
          chargers: 2,
          totalBateries: 7 * customerInputs.numberNGBRUnits,
          totalChargers: 2 * customerInputs.numberNGBRUnits,
        });
        break;
    }

    setMonthlyMaintenanceCostPerZTR(
      Math.round(averageHourlyMaintenanceCost * mowingMonthly)
    );

    setMonthlyFuelCostPerZTR(
      Math.round(latestFuelWeeklyPrice * fuelConsumptionRate * mowingMonthly)
    );

    setMonthlyMaintenanceCostPerNGBR(
      Math.round(monthlyMaintenanceCostPerZTR * electricMaintenanceCostGas)
    );
  }, [
    customerInputs,
    averageWeeksPerMonth,
    mowingMonthly,
    monthlyMaintenanceCostPerZTR,
    latestFuelWeeklyPrice,
    latestAvgPowerPrice,
  ]);

  useEffect(() => {
    setPricing({
      totalCashPrice:
        requiredEquipment.totalBateries * powerProgramCosts.battery +
        requiredEquipment.totalChargers * powerProgramCosts.charger,
      priceMo36: Math.round(
        PMT(0.0399 / 12, 36, -pricing.totalCashPrice, 0, 0)
      ),
      priceMo48: Math.round(
        PMT(0.0499 / 12, 48, -pricing.totalCashPrice, 0, 0)
      ),
      targetPaasMonthlyPrice: pricing.priceMo48 + (pricing.priceMo48 * 0.1 + 1),
      annualRebateOffSeason: lengthOffSeason * pricing.targetPaasMonthlyPrice,
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

  const [checkObserve, setCheckObserve] = useState(false);
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
      <form className="main" id="outputs">
        <CustomerInputsForm
          handleChange={handleChange}
          setPADDRegion={setPADDRegion}
          buttonClick={buttonClick}
          customerInputs={customerInputs}
        />

        <CustomerOutputs
          requiredEquipment={requiredEquipment}
          dollarUSLocale={dollarUSLocale}
          pricing={pricing}
          customerInputs={customerInputs}
          monthlyPaaSPowerCostNGBR={monthlyPaaSPowerCostNGBR}
          monthlyFuelCostPerZTR={monthlyFuelCostPerZTR}
          monthlyMaintenanceCostPerNGBR={monthlyMaintenanceCostPerNGBR}
          monthlyMaintenanceCostPerZTR={monthlyMaintenanceCostPerZTR}
        />
      </form>

      <form
        id="output"
        className={`main-output ${checkObserve ? "on-screen" : ""}`}
      >
        <button onClick={hideShowSection}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z" />
          </svg>
        </button>

        <MainOutput
          mowingMonthly={mowingMonthly}
          lengthOffSeason={lengthOffSeason}
          requiredEquipment={requiredEquipment}
          dollarUSLocale={dollarUSLocale}
          pricing={pricing}
          monthlyPaaSPowerCostNGBR={monthlyPaaSPowerCostNGBR}
          customerInputs={customerInputs}
          latestAvgPowerPrice={latestAvgPowerPrice}
          lastestMonth={lastestMonth}
          NGBRBatteryCapacity={NGBRBatteryCapacity}
          monthlyMaintenanceCostPerNGBR={monthlyMaintenanceCostPerNGBR}
          electricMaintenanceCostGas={electricMaintenanceCostGas}
          monthlyFuelCostPerZTR={monthlyFuelCostPerZTR}
          PADDRegion={PADDRegion}
          latestFuelWeeklyPrice={latestFuelWeeklyPrice}
          lastestWeek={lastestWeek}
          fuelConsumptionRate={fuelConsumptionRate}
          monthlyMaintenanceCostPerZTR={monthlyMaintenanceCostPerZTR}
          averageHourlyMaintenanceCost={averageHourlyMaintenanceCost}
        />
      </form>
    </>
  );
};

export default PaasCalculator;
