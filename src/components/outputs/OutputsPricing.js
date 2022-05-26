import dollarUSLocaleNoDigits from "../../utils/dollarUSLocaleNoDigits";
import outputCSS from "../../scss/output.module.css";

const OutputsPricing = ({ pricing, requiredEquipment }) => {
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
            <ul
              className={`${outputCSS.width100} ${outputCSS.leftMarginMinus} coh-row-inner`}
            >
              <li
                className={`${outputCSS.padding20} align-self-center bg-yellow coh-col-ps-12 coh-col-xl-6`}
              >
                <ul>
                  <li className="column left">
                    <p className="coh-heading eyebrow coh-style-paragraph---default">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p>
                      Donec et est at mi venenatis sollicitudin vitae molestie
                      lectus. Morbi magna lorem, mattis non fermentum vel,
                      vestibulum quis erat. Aliquam sed eros iaculis dolor
                      fermentum venenatis at in dui. Fusce fringilla ac nunc nec
                      molestie. Donec a auctor tellus, vitae gravida quam. In
                      fringilla interdum magna, eu viverra ligula eleifend eget.
                      Sed pulvinar quam sit amet lectus tristique, a placerat
                      purus laoreet.
                    </p>
                  </li>
                  <li className="output column center">
                    <div>
                      <span className="coh-heading subtitle coh-style-h3---display">
                        {dollarUSLocaleNoDigits.format(
                          pricing.targetPaasMonthlyPrice
                        )}
                      </span>
                      <span className="small">/mo</span>
                    </div>
                  </li>
                  <li className="output column center">
                    <div>
                      <span className="coh-heading subtitle coh-style-h3---display ">
                        {dollarUSLocaleNoDigits.format(
                          pricing.annualRebateOffSeason
                        )}
                      </span>
                      <span className="small">/mo</span>
                    </div>
                    <span className="coh-heading">
                      Annual rebate from off-season
                    </span>
                  </li>
                  <li className="output column center">
                    <span className="coh-heading">
                      Total number of batteries
                    </span>
                    <span className="coh-style-h5---display">
                      {requiredEquipment.totalBateries}
                    </span>
                  </li>
                  <li className="output column center">
                    <span className="coh-heading">
                      Total number of chargers
                    </span>
                    <span className="coh-style-h5---display">
                      {requiredEquipment.totalChargers}
                    </span>
                  </li>
                </ul>
              </li>
              <li className="align-self-center coh-col-ps-12 coh-col-xl-6">
                <ul>
                  <li className="output column center">
                    <span>Flexible power program 48-month finance*</span>
                    <div>
                      <span className="coh-heading subtitle coh-style-h3---display">
                        {dollarUSLocaleNoDigits.format(pricing.priceMo48)}
                      </span>
                      <span className="small">/mo</span>
                    </div>
                    <span>at 4.99% APR</span>
                  </li>
                  <li className="output column center">
                    <span>Flexible power program 36-month finance*</span>
                    <div>
                      <span className="coh-heading subtitle coh-style-h3---display">
                        {dollarUSLocaleNoDigits.format(pricing.priceMo36)}
                      </span>
                      <span className="small">/mo</span>
                    </div>

                    <span>at 3.99% APR</span>
                  </li>
                  <li className="output column center">
                    <span>Cash Price</span>
                    <span className="coh-heading subtitle coh-style-h3---display">
                      {dollarUSLocaleNoDigits.format(pricing.totalCashPrice)}
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OutputsPricing;
