import dollarUSLocale from "../../utils/dollarUSLocale";

const Breakeven = ({ breakeven, reductionFromNGBRResale }) => {
  const financing3YearWResale =
    breakeven.breakeven3yearFinancingNoResale -
    reductionFromNGBRResale.financing36;

  const OutrightPurchaseWResale =
    breakeven.breakevenOutrightPurchaseNoResale -
    reductionFromNGBRResale.cashPurchase;

  const fPPWResale =
    breakeven.breakevenFPPNoResale - reductionFromNGBRResale.FPP;

  return (
    <ul className="outputs">
      <li className="title">Breakeven</li>
      <li>
        <span>Breakeven: Outright purchase - With resale</span>
        <span>{dollarUSLocale.format(OutrightPurchaseWResale)}</span>
      </li>
      {fPPWResale ? (
        <li>
          <span>Breakeven: FPP - With resale</span>
          <span>{dollarUSLocale.format(fPPWResale)}</span>
        </li>
      ) : (
        ""
      )}

      {financing3YearWResale ? (
        <li>
          <span>Breakeven: 3-year financing - With resale</span>
          <span>{dollarUSLocale.format(financing3YearWResale)}</span>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default Breakeven;
