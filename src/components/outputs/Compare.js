import dollarUSLocale from "../../utils/dollarUSLocale";
//import ToolTip from "./toolTip";

const Compare = ({
  monthlyPaaSPowerCostNGBR,
  customerInputs,
  monthlyFuelCostPerZTR,
  monthlyMaintenanceCostPerNGBR,
  monthlyMaintenanceCostPerZTR,
  pricing,
}) => {
  return (
    <>
      <ul className="outputs three">
        <li>
          <span></span>
          <span className="bg-yellow">PaaS OpEx ($/mo)</span>
          <span className="bg-yellow">Gas ZTR OpEx ($/mo)</span>
        </li>
        <li>
          <span>Battery Charging</span>
          <span>
            {dollarUSLocale.format(
              monthlyPaaSPowerCostNGBR * customerInputs.numberNGBRUnits
            )}
          </span>
          <span>-</span>
        </li>
        <li>
          <span>Fuel</span>
          <span>-</span>
          <span>
            {dollarUSLocale.format(
              monthlyFuelCostPerZTR * customerInputs.numberNGBRUnits
            )}
          </span>
        </li>
        <li>
          <span>Maintenance</span>
          <span>
            {dollarUSLocale.format(
              monthlyMaintenanceCostPerNGBR * customerInputs.numberNGBRUnits
            )}
          </span>
          <span>
            {dollarUSLocale.format(
              monthlyMaintenanceCostPerZTR * customerInputs.numberNGBRUnits
            )}
          </span>
        </li>
        <li>
          <span>Subscription (PaaS)</span>
          <span>{dollarUSLocale.format(pricing.targetPaasMonthlyPrice)}</span>
          <span>-</span>
        </li>
        <li>
          <span>Total</span>
          <span>
            {dollarUSLocale.format(
              monthlyPaaSPowerCostNGBR * customerInputs.numberNGBRUnits +
                monthlyMaintenanceCostPerNGBR * customerInputs.numberNGBRUnits +
                pricing.targetPaasMonthlyPrice
            )}
          </span>
          <span>
            {dollarUSLocale.format(
              monthlyFuelCostPerZTR * customerInputs.numberNGBRUnits +
                monthlyMaintenanceCostPerZTR * customerInputs.numberNGBRUnits
            )}
          </span>
        </li>
      </ul>
    </>
  );
};

export default Compare;
