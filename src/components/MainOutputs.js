import React from "react";

const MainOutputs = (props) => {
  //const { ...props } = this.props;

  const hideShow = (e) => {
    e.preventDefault();
    e.target.closest("ul").classList.toggle("hide");
  };

  const hideShowSection = (e) => {
    e.preventDefault();
    document.querySelector("#output").classList.toggle("hide-section");
  };

  console.log(props);
  return (
    <>
      <button onClick={hideShowSection}>View main Fields</button>

      <form id="output" className="hide-section">
        <ul>
          <li className="button-hide">
            <button onClick={hideShow}>Hide</button>
          </li>
          <li>
            <span>
              <label>Converting mowing frequency to monthly</label>
            </span>
            <span>
              <input id="" value={props.mowingMonthly} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>Length of off-season</label>
            </span>
            <span>
              <input id="" value={props.lengthOffSeason} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>Number of batteries per NGBR</label>
            </span>
            <span>
              <input id="" value={props.requiredEquipment.bateries} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>Number of chargers per NGBR</label>
            </span>
            <span>
              <input id="" value={props.requiredEquipment.chargers} readOnly />
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
              <input
                id=""
                value={props.requiredEquipment.totalBateries}
                readOnly
              />
            </span>
          </li>
          <li>
            <span>
              <label>Total number of chargers</label>
            </span>
            <span>
              <input
                id=""
                value={props.requiredEquipment.totalChargers}
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
              <label>Total Cash Price</label>
            </span>
            <span>
              <input
                id=""
                value={props.dollarUSLocale.format(
                  props.pricing.totalCashPrice
                )}
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
                value={props.dollarUSLocale.format(props.pricing.priceMo36)}
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
                value={props.dollarUSLocale.format(props.pricing.priceMo48)}
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
                value={props.dollarUSLocale.format(
                  props.pricing.targetPaasMonthlyPrice
                )}
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
                value={props.dollarUSLocale.format(
                  props.pricing.targetPaasMonthlyPrice * 12
                )}
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
                  props.lengthOffSeason > 6
                    ? "-"
                    : props.dollarUSLocale.format(
                        props.pricing.annualRebateOffSeason
                      )
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
                  props.pricing.annualRebateOffSeason
                    ? props.dollarUSLocale.format(
                        props.pricing.targetPaasMonthlyPrice * 12 -
                          props.pricing.annualRebateOffSeason
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
                value={
                  props.monthlyPaaSPowerCostNGBR *
                  props.customerInputs.numberNGBRUnits
                }
                readOnly
              />
            </span>
          </li>
          <li>
            <span>
              <label>Monthly PaaS power cost NGBR</label>
            </span>
            <span>
              <input id="" value={props.monthlyPaaSPowerCostNGBR} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>Geography / location</label>
            </span>
            <span>
              <input id="" value={props.customerInputs.location} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>Latest average monthly power price</label>
            </span>
            <span>
              <input id="" value={props.latestAvgPowerPrice} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>[HELPER] Latest month</label>
            </span>
            <span>
              <input id="" value={props.lastestMonth} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>Power consumption rate per NGBR</label>
            </span>
            <span>
              <input id="" value={props.NGBRBatteryCapacity} readOnly />
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
                  props.monthlyMaintenanceCostPerNGBR *
                  props.customerInputs.numberNGBRUnits
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
              <input
                id=""
                value={props.monthlyMaintenanceCostPerNGBR}
                readOnly
              />
            </span>
          </li>
          <li>
            <span>
              <label>Electric maintenance cost as % of gas</label>
            </span>
            <span>
              <input id="" value={props.electricMaintenanceCostGas} readOnly />
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
                value={props.dollarUSLocale.format(
                  props.monthlyFuelCostPerZTR *
                    props.customerInputs.numberNGBRUnits
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
                value={props.dollarUSLocale.format(props.monthlyFuelCostPerZTR)}
                readOnly
              />
            </span>
          </li>
          <li>
            <span>
              <label>Geography / location</label>
            </span>
            <span>
              <input
                id="location"
                value={props.customerInputs.location}
                readOnly
              />
            </span>
          </li>
          <li>
            <span>
              <label>PADD region</label>
            </span>
            <span>
              <input id="PADDRegion" value={props.PADDRegion} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>Latest fuel weekly price</label>
            </span>
            <span>
              <input
                id="latestFuelWeeklyPrice"
                value={props.latestFuelWeeklyPrice}
                readOnly
              />
            </span>
          </li>
          <li>
            <span>
              <label> [HELPER] Latest week</label>
            </span>
            <span>
              <input id="lastestWeek" value={props.lastestWeek} readOnly />
            </span>
          </li>
          <li>
            <span>
              <label>Fuel consumption rate</label>
            </span>
            <span>
              <input
                id="fuelConsumptionRate"
                value={props.fuelConsumptionRate}
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
                  props.monthlyMaintenanceCostPerZTR *
                  props.customerInputs.numberNGBRUnits
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
                value={props.monthlyMaintenanceCostPerZTR}
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
                value={props.averageHourlyMaintenanceCost}
                readOnly
              />
            </span>
          </li>
        </ul>
      </form>
    </>
  );
};

export default MainOutputs;
