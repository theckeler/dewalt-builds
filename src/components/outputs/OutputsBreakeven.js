import outputCSS from "../../scss/output.module.css";

const OutputsBreakeven = ({ breakeven, reductionFromNGBRResale }) => {
  const financing3YearWResale =
    breakeven.breakeven3yearFinancingNoResale -
    reductionFromNGBRResale.financing36;

  const OutrightPurchaseWResale =
    breakeven.breakevenOutrightPurchaseNoResale -
    reductionFromNGBRResale.cashPurchase;

  const fPPWResale =
    breakeven.breakevenFPPNoResale - reductionFromNGBRResale.FPP;

  return (
    <div className="outputs pricing coh-style-grid-container">
      <ul className="coh-row-inner">
        <li className="coh-column coh-col-xl-6">
          <div className="coh-container media-main-container">
            <div className="coh-container ssa-component coh-component media-container bynder-media-container">
              <img
                src="https://bynder.sbdinc.com/m/367cd4cb0e9e3d44/Drupal_Small-DXGZ260P_A2.jpg"
                alt=""
                className="coh-image coh-image-responsive-xl coh-lazy-loaded"
                loading="lazy"
              />
            </div>
          </div>
        </li>
        <li className={`coh-column coh-col-xl-6`}>
          <div
            className={`${outputCSS.padding80} bg-white`}
            data-gs-background-color="light"
            data-select-theme="light"
            data-margin-padding="md"
          >
            <ul className="outputs">
              <li className="title">Breakeven</li>
              <li>
                <span>Breakeven: Outright purchase - With resale</span>
                <span>{OutrightPurchaseWResale.toFixed(2)}</span>
              </li>

              <li>
                <span>Breakeven: FPP - With resale</span>
                <span>{fPPWResale.toFixed(2)}</span>
              </li>

              <li>
                <span>Breakeven: 3-year financing - With resale</span>
                <span>{financing3YearWResale.toFixed(2)}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OutputsBreakeven;
