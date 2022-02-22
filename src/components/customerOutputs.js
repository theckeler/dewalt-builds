import ToolTip from "./toolTip";

const CustomerOutputs = ({
  requiredEquipment,
  dollarUSLocale,
  pricing,
  customerInputs,
  monthlyPaaSPowerCostNGBR,
  monthlyFuelCostPerZTR,
  monthlyMaintenanceCostPerNGBR,
  monthlyMaintenanceCostPerZTR,
}) => {
  return (
    <>
      <ul className="outputs">
        <li className="column">
          <span className="help">
            <label>Total number of batteries</label>
            <ToolTip tip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a augue ornare, tempus leo in, viverra lacus. Praesent quis pretium augue. Sed ac ipsum a risus posuere venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et malesuada neque. Ut lectus magna, pretium vitae lorem sed, dapibus elementum dolor. Quisque auctor massa quis congue rutrum. Integer aliquet neque erat, nec congue tellus bibendum a." />
          </span>
          <span>
            <input id="" value={requiredEquipment.totalBateries} readOnly />
          </span>
        </li>
        <li className="column">
          <span className="help">
            <label>Total number of chargers</label>
            <ToolTip tip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a augue ornare, tempus leo in, viverra lacus. Praesent quis pretium augue. Sed ac ipsum a risus posuere venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et malesuada neque. Ut lectus magna, pretium vitae lorem sed, dapibus elementum dolor. Quisque auctor massa quis congue rutrum. Integer aliquet neque erat, nec congue tellus bibendum a." />
          </span>
          <span>
            <input id="" value={requiredEquipment.totalChargers} readOnly />
          </span>
        </li>
        <li className="column">
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
        <li className="column">
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
      </ul>

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

export default CustomerOutputs;
