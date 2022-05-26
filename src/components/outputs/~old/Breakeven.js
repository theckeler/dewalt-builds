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
        <span>{OutrightPurchaseWResale.toFixed(2)}</span>
      </li>
      {fPPWResale > 0 ? (
        <li>
          <span>Breakeven: FPP - With resale</span>
          <span>{fPPWResale.toFixed(2)}</span>
        </li>
      ) : (
        ""
      )}

      {financing3YearWResale > 0 ? (
        <li>
          <span>Breakeven: 3-year financing - With resale</span>
          <span>{financing3YearWResale.toFixed(2)}</span>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

export default Breakeven;
