import dollarUSLocale from "../../utils/dollarUSLocale";

const TotalCashPrice = ({ pricing }) => {
  return (
    <ul className="outputs">
      <li className="title">Pricing</li>
      <li>
        <span>Total Cash Price</span>
        <span>{dollarUSLocale.format(pricing.totalCashPrice)}</span>
      </li>
      <li>
        <span>Price/mo at 36 mos. 3.99%</span>
        <span>{dollarUSLocale.format(pricing.priceMo36)}</span>
      </li>
      <li>
        <span>Price/mo at 48 mos. 4.99%</span>
        <span>{dollarUSLocale.format(pricing.priceMo48)}</span>
      </li>
      <li>
        <span>Target PaaS Monthly Price</span>
        <span>{dollarUSLocale.format(pricing.targetPaasMonthlyPrice)}</span>
      </li>
      <li>
        <span>Annual rebate from off-season</span>
        <span>{dollarUSLocale.format(pricing.annualRebateOffSeason)}</span>
      </li>
    </ul>
  );
};

export default TotalCashPrice;
