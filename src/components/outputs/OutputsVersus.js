import dollarUSLocaleNoDigits from "../../utils/dollarUSLocaleNoDigits";

const OutputsVersus = ({
  monthlyPaaSPowerCostNGBR,
  customerInputs,
  monthlyFuelCostPerZTR,
  monthlyMaintenanceCostPerNGBR,
  monthlyMaintenanceCostPerZTR,
  pricing,
}) => {
  return (
    <section
      className="output-versus coh-container ssa-component coh-component split-background coh-style-feature-block coh-style-margin-bottom-none"
      data-content-order="text-first"
      data-bg-align=""
    >
      <div className="coh-container ssa-component coh-component">
        <div
          className="coh-container section coh-style-section"
          //data-gs-background-color="dark-grey"
          data-gs-spacing="none"
          data-gs-min-height=""
          data-gs-overlay=""
          data-gs-foreground-color="light"
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
                      <div className="coh-container ssa-component coh-component media-container bynder-media-container">
                        <img
                          src="https://bynder.sbdinc.com/m/367cd4cb0e9e3d44/Drupal_Small-DXGZ260P_A2.jpg"
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
                      //    data-gs-background-color="dark-grey"
                      //    data-select-theme="dark-grey"
                      data-margin-padding="md"
                    >
                      <div className="coh-container">
                        <div className="output-versus-inner coh-row-inner">
                          <ul className="grid three">
                            <li className="r1 first right">/mo</li>
                            <li className="r2 first">Gas ZTR OpEx</li>
                            <li className="relative r3 first">
                              <span className="vs">VS</span>
                              PaaS OpEx
                            </li>

                            <li className="r1">Battery Charging</li>
                            <li className="r2">—</li>
                            <li className="r3">
                              {dollarUSLocaleNoDigits.format(
                                monthlyPaaSPowerCostNGBR *
                                  customerInputs.numberNGBRUnits
                              )}
                            </li>

                            <li className="r1">Fuel</li>
                            <li className="r2">
                              {dollarUSLocaleNoDigits.format(
                                monthlyFuelCostPerZTR *
                                  customerInputs.numberNGBRUnits
                              )}
                            </li>
                            <li className="r3">—</li>

                            <li className="r1">Maintenance</li>
                            <li className="r2">
                              {dollarUSLocaleNoDigits.format(
                                monthlyMaintenanceCostPerZTR *
                                  customerInputs.numberNGBRUnits
                              )}
                            </li>
                            <li className="r3">
                              {dollarUSLocaleNoDigits.format(
                                monthlyMaintenanceCostPerNGBR *
                                  customerInputs.numberNGBRUnits
                              )}
                            </li>

                            <li className="r1">Subscription (PaaS)</li>
                            <li className="r2">—</li>
                            <li className="r3">
                              {dollarUSLocaleNoDigits.format(
                                pricing.targetPaasMonthlyPrice
                              )}
                            </li>

                            <li className="r1 last">Total</li>
                            <li className="r2 last">
                              {dollarUSLocaleNoDigits.format(
                                monthlyFuelCostPerZTR *
                                  customerInputs.numberNGBRUnits +
                                  monthlyMaintenanceCostPerZTR *
                                    customerInputs.numberNGBRUnits
                              )}
                            </li>
                            <li className="r3 last">
                              {dollarUSLocaleNoDigits.format(
                                monthlyPaaSPowerCostNGBR *
                                  customerInputs.numberNGBRUnits +
                                  monthlyMaintenanceCostPerNGBR *
                                    customerInputs.numberNGBRUnits +
                                  pricing.targetPaasMonthlyPrice
                              )}
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
        </div>
      </div>
    </section>
  );
};

export default OutputsVersus;
