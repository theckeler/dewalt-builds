import dollarUSLocale from "../../utils/dollarUSLocale";

const Financing = ({ gasZTR, cashPurchase, NGBRWithFlexiblePowerProgram }) => {
  return (
    <ul className="outputs">
      <li className="title">
        NGBR with Flexible Power Program, and 3- and 4-year financing
      </li>
      <li>
        <span>TCO of gas ZTR</span>
        <span>{dollarUSLocale.format(gasZTR.TCOofGasZTR)}</span>
      </li>
      <li>
        <span>TCO of NGBR + batteries & chargers</span>
        <span>{dollarUSLocale.format(cashPurchase.TCOofNGBR)}</span>
      </li>
      <li>
        <span>TCO of NGBR with FPP</span>
        <span>
          {dollarUSLocale.format(
            NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
              NGBRWithFlexiblePowerProgram.flexiblePowerProgramSubscription +
              cashPurchase.power +
              cashPurchase.maintenance
          )}
        </span>
      </li>
      <li>
        <span>TCO of NGBR with 36-month financing</span>
        <span>
          {dollarUSLocale.format(
            NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
              NGBRWithFlexiblePowerProgram.financingFee36 +
              cashPurchase.power +
              cashPurchase.maintenance
          )}
        </span>
      </li>
      <li>
        <span>TCO of NGBR with 48-month financing</span>
        <span>
          {dollarUSLocale.format(
            NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
              NGBRWithFlexiblePowerProgram.financingFee48 +
              cashPurchase.power +
              cashPurchase.maintenance
          )}
        </span>
      </li>
    </ul>
  );
};

export default Financing;
