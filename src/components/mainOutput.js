const CustomerOutputs = ({
  mowingMonthly,
  lengthOffSeason,
  requiredEquipment,
  dollarUSLocale,
  pricing,
  monthlyPaaSPowerCostNGBR,
  customerInputs,
  latestAvgPowerPrice,
  lastestMonth,
  NGBRBatteryCapacity,
  monthlyMaintenanceCostPerNGBR,
  electricMaintenanceCostGas,
  monthlyFuelCostPerZTR,
  PADDRegion,
  latestFuelWeeklyPrice,
  lastestWeek,
  fuelConsumptionRate,
  monthlyMaintenanceCostPerZTR,
  averageHourlyMaintenanceCost,
}) => {
  const hideShow = (e) => {
    e.preventDefault();
    e.target.closest("ul").classList.toggle("hide");
  };

  return (
    <div className="overflow">
      <ul>
        <li className="button-hide">
          <button onClick={hideShow}>Hide</button>
        </li>
        <li>
          <span>
            <label>Converting mowing frequency to monthly</label>
          </span>
          <span>
            <input
              id="mowingMonthly"
              type="number"
              value={mowingMonthly}
              onChange={(e) => {
                console.log("test");
              }}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Length of off-season</label>
          </span>
          <span>
            <input id="" value={lengthOffSeason} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Number of batteries per NGBR</label>
          </span>
          <span>
            <input id="" value={requiredEquipment.bateries} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Number of chargers per NGBR</label>
          </span>
          <span>
            <input id="" value={requiredEquipment.chargers} readOnly />
          </span>
        </li>
      </ul>

      <ul>
        <li className="button-hide">
          <button onClick={hideShow}>Hide</button>
        </li>
        <li>
          <span>
            <label>Total number of batteries</label>
          </span>
          <span>
            <input id="" value={requiredEquipment.totalBateries} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Total number of chargers</label>
          </span>
          <span>
            <input id="" value={requiredEquipment.totalChargers} readOnly />
          </span>
        </li>
      </ul>

      <ul>
        <li className="button-hide">
          <button onClick={hideShow}>Hide</button>
        </li>
        <li>
          <span>
            <label>Total Cash Price</label>
          </span>
          <span>
            <input
              id=""
              value={dollarUSLocale.format(pricing.totalCashPrice)}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Price/mo at 36 mos. 3.99%</label>
          </span>
          <span>
            <input
              id=""
              value={dollarUSLocale.format(pricing.priceMo36)}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Price/mo at 48 mos. 4.99%</label>
          </span>
          <span>
            <input
              id=""
              value={dollarUSLocale.format(pricing.priceMo48)}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Target PaaS Monthly Price</label>
          </span>
          <span>
            <input
              id=""
              value={dollarUSLocale.format(pricing.targetPaasMonthlyPrice)}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Annualized PaaS Price</label>
          </span>
          <span>
            <input
              id=""
              value={dollarUSLocale.format(pricing.targetPaasMonthlyPrice * 12)}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Annual rebate from off-season</label>
          </span>
          <span>
            <input
              id=""
              value={
                lengthOffSeason > 6
                  ? "-"
                  : dollarUSLocale.format(pricing.annualRebateOffSeason)
              }
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Annualized PaaS Price (with off-season)</label>
          </span>
          <span>
            <input
              id=""
              value={
                pricing.annualRebateOffSeason
                  ? dollarUSLocale.format(
                      pricing.targetPaasMonthlyPrice * 12 -
                        pricing.annualRebateOffSeason
                    )
                  : "-"
              }
              readOnly
            />
          </span>
        </li>
      </ul>

      <ul>
        <li className="button-hide">
          <button onClick={hideShow}>Hide</button>
        </li>
        <li>
          <span>
            <label>Total monthly PaaS power cost</label>
          </span>
          <span>
            <input
              id=""
              value={monthlyPaaSPowerCostNGBR * customerInputs.numberNGBRUnits}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Monthly PaaS power cost NGBR</label>
          </span>
          <span>
            <input id="" value={monthlyPaaSPowerCostNGBR} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Geography / location</label>
          </span>
          <span>
            <input id="" value={customerInputs.location} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Latest average monthly power price</label>
          </span>
          <span>
            <input id="" value={latestAvgPowerPrice} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>[HELPER] Latest month</label>
          </span>
          <span>
            <input id="" value={lastestMonth} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Power consumption rate per NGBR</label>
          </span>
          <span>
            <input id="" value={NGBRBatteryCapacity} readOnly />
          </span>
        </li>
      </ul>

      <ul>
        <li className="button-hide">
          <button onClick={hideShow}>Hide</button>
        </li>
        <li>
          <span>
            <label>Total monthly PaaS maintenance cost</label>
          </span>
          <span>
            <input
              id=""
              value={
                monthlyMaintenanceCostPerNGBR * customerInputs.numberNGBRUnits
              }
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Monthly maintenance cost per NGBR</label>
          </span>
          <span>
            <input id="" value={monthlyMaintenanceCostPerNGBR} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Electric maintenance cost as % of gas</label>
          </span>
          <span>
            <input id="" value={electricMaintenanceCostGas} readOnly />
          </span>
        </li>
      </ul>

      <ul>
        <li className="button-hide">
          <button onClick={hideShow}>Hide</button>
        </li>
        <li>
          <span>
            <label>Total monthly ZTR fuel cost</label>
          </span>
          <span>
            <input
              id="totalFuelCostZTR"
              value={dollarUSLocale.format(
                monthlyFuelCostPerZTR * customerInputs.numberNGBRUnits
              )}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Monthly fuel cost per ZTR</label>
          </span>
          <span>
            <input
              id="monthlyFuelCostPerZTR"
              value={dollarUSLocale.format(monthlyFuelCostPerZTR)}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Geography / location</label>
          </span>
          <span>
            <input id="location" value={customerInputs.location} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>PADD region</label>
          </span>
          <span>
            <input id="PADDRegion" value={PADDRegion} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Latest fuel weekly price</label>
          </span>
          <span>
            <input
              id="latestFuelWeeklyPrice"
              value={latestFuelWeeklyPrice}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label> [HELPER] Latest week</label>
          </span>
          <span>
            <input id="lastestWeek" value={lastestWeek} readOnly />
          </span>
        </li>
        <li>
          <span>
            <label>Fuel consumption rate</label>
          </span>
          <span>
            <input
              id="fuelConsumptionRate"
              value={fuelConsumptionRate}
              readOnly
            />
          </span>
        </li>
      </ul>

      <ul>
        <li className="button-hide">
          <button onClick={hideShow}>Hide</button>
        </li>
        <li>
          <span>
            <label>Total monthly ZTR maintenance cost</label>
          </span>
          <span>
            <input
              id="totalMonthlyZTRMaintenanceCost"
              value={
                monthlyMaintenanceCostPerZTR * customerInputs.numberNGBRUnits
              }
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Monthly maintenance cost per ZTR</label>
          </span>
          <span>
            <input
              id="monthlyMaintenanceCostPerZTR"
              value={monthlyMaintenanceCostPerZTR}
              readOnly
            />
          </span>
        </li>
        <li>
          <span>
            <label>Average hourly maintenance cost</label>
          </span>
          <span>
            <input
              id="averageHourlyMaintenanceCost"
              value={averageHourlyMaintenanceCost}
              readOnly
            />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CustomerOutputs;
