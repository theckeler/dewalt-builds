import dollarUSLocaleNoDigits from "../../utils/dollarUSLocaleNoDigits";

const OutputsPricing = ({ pricing, requiredEquipment }) => {
  return (
    <section
      className="output-pricing coh-container ssa-component coh-component ssa-component-instance-ec0b351a-f5c6-4968-a101-aca7bbdc3b1c coh-component-instance-ec0b351a-f5c6-4968-a101-aca7bbdc3b1c split-background coh-style-feature-block coh-style-margin-bottom-none ssa-instance-1353986792 coh-ce-cpt_feature_block-6b6f1cf8"
      data-content-order="image-first"
      data-bg-align=""
    >
      <div className="coh-container ssa-component coh-component ssa-component-instance-ec0b351a-f5c6-4968-a101-aca7bbdc3b1c coh-component-instance-ec0b351a-f5c6-4968-a101-aca7bbdc3b1c">
        <div
          className="coh-container section coh-style-section"
          data-gs-background-color="dark-grey"
          data-gs-spacing="none"
          data-gs-min-height=""
          data-gs-overlay=""
          data-gs-foreground-color="dark"
          data-gs-remove-spacing=""
        >
          <div className="coh-container section-inner">
            <div className="coh-container coh-container-boxed">
              <div
                className="coh-row coh-row-xl coh-row-visible-xl"
                data-coh-row-match-heights='{"xl":{"target":"none"}}'
              >
                <div className="coh-row-inner coh-ce-cpt_feature_block-528ef8c4">
                  <div className="coh-column coh-visible-sm coh-col-sm-12 coh-visible-xl coh-col-xl-3">
                    <div className="coh-container media-main-container">
                      <div className="coh-container ssa-component coh-component ssa-component-instance-ec0b351a-f5c6-4968-a101-aca7bbdc3b1c coh-component-instance-ec0b351a-f5c6-4968-a101-aca7bbdc3b1c media-container bynder-media-container">
                        <img
                          src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-dewaltprosupporthub-Library/default/vaf1f92605191906da014946878c090b217b08d45/hero.jpg"
                          alt=""
                          className="coh-image coh-image-responsive-xl coh-lazy-loaded"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="coh-column coh-visible-ps coh-col-ps-12 coh-col-ps-push-0 coh-col-ps-pull-0 coh-col-ps-offset-0 coh-visible-sm coh-col-sm-10 coh-visible-xl coh-col-xl-9">
                    <div
                      className="coh-container text-main-container"
                      data-gs-background-color="dark-grey"
                      data-select-theme="dark-grey"
                      data-margin-padding="md"
                    >
                      <ul className="coh-row-inner">
                        <li className="output-pricing-inner coh-column align-self-center bg-yellow coh-col-xl-6">
                          <ul>
                            <li className="coh-wysiwyg">
                              <h2 className="output-pricing-heading eyebrow coh-style-paragraph---default">
                                Lorem ipsum dolor sit amet
                              </h2>
                              <p>
                                Donec et est at mi venenatis sollicitudin vitae
                                molestie lectus. Morbi magna lorem, mattis non
                                fermentum vel, vestibulum quis erat. Aliquam sed
                                eros iaculis dolor fermentum venenatis at in
                                dui.
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
                        <li
                          className="output-pricing-inner coh-column align-self-center coh-col-xl-4"
                          data-gs-background-color="dark-grey"
                        >
                          <ul className="">
                            <li className="output column center">
                              <span>
                                Flexible power program 48-month finance*
                              </span>
                              <div>
                                <span className="coh-heading subtitle coh-style-h3---display">
                                  {dollarUSLocaleNoDigits.format(
                                    pricing.priceMo48
                                  )}
                                </span>
                                <span className="small">/mo</span>
                              </div>
                              <span>at 4.99% APR</span>
                            </li>
                            <li className="output column center">
                              <span>
                                Flexible power program 36-month finance*
                              </span>
                              <div>
                                <span className="coh-heading subtitle coh-style-h3---display">
                                  {dollarUSLocaleNoDigits.format(
                                    pricing.priceMo36
                                  )}
                                </span>
                                <span className="small">/mo</span>
                              </div>

                              <span>at 3.99% APR</span>
                            </li>
                            <li className="output column center">
                              <span>Cash Price</span>
                              <span className="coh-heading subtitle coh-style-h3---display">
                                {dollarUSLocaleNoDigits.format(
                                  pricing.totalCashPrice
                                )}
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputsPricing;
