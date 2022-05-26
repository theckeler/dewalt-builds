import dollarUSLocaleNoDigits from "../../utils/dollarUSLocaleNoDigits";
import outputCSS from "../../scss/output.module.css";

const OutputsVersus = ({
  monthlyPaaSPowerCostNGBR,
  customerInputs,
  monthlyFuelCostPerZTR,
  monthlyMaintenanceCostPerNGBR,
  monthlyMaintenanceCostPerZTR,
  pricing,
}) => {
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
            <ul className={`output ${outputCSS.grid}`}>
              <li>/mo</li>
              <li>Gas ZTR OpEx</li>
              <li className={outputCSS.relative}>
                <span className={outputCSS.versus}>VS</span>
                PaaS OpEx
              </li>

              <li>Battery Charging</li>
              <li>—</li>
              <li>
                {dollarUSLocaleNoDigits.format(
                  monthlyPaaSPowerCostNGBR * customerInputs.numberNGBRUnits
                )}
              </li>

              <li>Fuel</li>
              <li>
                {dollarUSLocaleNoDigits.format(
                  monthlyFuelCostPerZTR * customerInputs.numberNGBRUnits
                )}
              </li>
              <li>—</li>

              <li>Maintenance</li>
              <li>
                {dollarUSLocaleNoDigits.format(
                  monthlyMaintenanceCostPerZTR * customerInputs.numberNGBRUnits
                )}
              </li>
              <li>
                {dollarUSLocaleNoDigits.format(
                  monthlyMaintenanceCostPerNGBR * customerInputs.numberNGBRUnits
                )}
              </li>

              <li>Subscription (PaaS)</li>
              <li>—</li>
              <li>
                {dollarUSLocaleNoDigits.format(pricing.targetPaasMonthlyPrice)}
              </li>

              <li>Total</li>
              <li>
                {dollarUSLocaleNoDigits.format(
                  monthlyFuelCostPerZTR * customerInputs.numberNGBRUnits +
                    monthlyMaintenanceCostPerZTR *
                      customerInputs.numberNGBRUnits
                )}
              </li>
              <li>
                {dollarUSLocaleNoDigits.format(
                  monthlyPaaSPowerCostNGBR * customerInputs.numberNGBRUnits +
                    monthlyMaintenanceCostPerNGBR *
                      customerInputs.numberNGBRUnits +
                    pricing.targetPaasMonthlyPrice
                )}
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

export default OutputsVersus;
