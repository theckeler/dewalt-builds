import dollarUSLocale from "../../utils/dollarUSLocale";

const OpExCost = ({
  totalMonthlyPaaSPowerCost,
  totalMonthlyPaaSMaintenanceCost,
}) => {
  return (
    <ul className="outputs">
      <li className="title">OpEx cost benchmarking: PaaS vs gas ZTRs</li>
      <li className="title">Power cost</li>
      <li>
        <span>Total monthly PaaS power cost</span>
        <span>{dollarUSLocale.format(totalMonthlyPaaSPowerCost)}</span>
      </li>
      <li className="title">Maintenance cost</li>
      <li>
        <span>Total monthly PaaS maintenance cost</span>
        <span>{dollarUSLocale.format(totalMonthlyPaaSMaintenanceCost)}</span>
      </li>
    </ul>
  );
};

export default OpExCost;
