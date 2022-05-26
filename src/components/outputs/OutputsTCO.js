import dollarUSLocaleNoDigits from "../../utils/dollarUSLocaleNoDigits";
import outputCSS from "../../scss/output.module.css";

const OutputsTCO = ({ gasZTR, cashPurchase, NGBRWithFlexiblePowerProgram }) => {
  return (
    <div className="outputs pricing coh-style-grid-container">
      <ul className="coh-row-inner">
        <li className={`coh-column coh-col-xl-6`}>
          <div
            className={`${outputCSS.padding80} bg-white`}
            data-gs-background-color="light"
            data-select-theme="light"
            data-margin-padding="md"
          >
            <ul>
              <li>
                <span>Gas ZTR</span>
                <span>{dollarUSLocaleNoDigits.format(gasZTR.TCOofGasZTR)}</span>
              </li>
            </ul>

            <ul>
              <li>NGBR</li>
              <li>
                <span>+ batteries & chargers</span>
                <span>
                  {dollarUSLocaleNoDigits.format(cashPurchase.TCOofNGBR)}
                </span>
              </li>
              <li>
                <span>with FPP</span>
                <span>
                  {dollarUSLocaleNoDigits.format(
                    NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                      NGBRWithFlexiblePowerProgram.flexiblePowerProgramSubscription +
                      cashPurchase.power +
                      cashPurchase.maintenance
                  )}
                </span>
              </li>
              <li>
                <span>with 36-month financing</span>
                <span>
                  {dollarUSLocaleNoDigits.format(
                    NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                      NGBRWithFlexiblePowerProgram.financingFee36 +
                      cashPurchase.power +
                      cashPurchase.maintenance
                  )}
                </span>
              </li>
              <li>
                <span>with 48-month financing</span>
                <span>
                  {dollarUSLocaleNoDigits.format(
                    NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                      NGBRWithFlexiblePowerProgram.financingFee48 +
                      cashPurchase.power +
                      cashPurchase.maintenance
                  )}
                </span>
              </li>
            </ul>
          </div>
        </li>
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
      </ul>
    </div>
  );
};

export default OutputsTCO;
