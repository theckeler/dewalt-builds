import dollarUSLocaleNoDigits from "../../utils/dollarUSLocaleNoDigits";

const OutputsMaintenance = ({
  numberOfMaintenanceJobsPerYear,
  averageTotalTimeForServicing,
  totalMonthlyPaaSMaintenanceCost,
  totalMonthlyPaaSPowerCost,
}) => {
  return (
    <section
      className="output-maintenance coh-container ssa-component coh-component coh-style-feature-block coh-style-margin-bottom-none"
      data-content-order="image-first"
      data-bg-align=""
    >
      <div className="coh-container ssa-component coh-component">
        <div
          className="coh-container section coh-style-section"
          data-gs-background-color="light-grey"
          data-gs-foreground-color="light"
        >
          <div className="coh-container section-inner">
            <div className="coh-container coh-container-boxed">
              <div
                className="coh-row coh-row-xl coh-row-visible-xl"
                data-coh-row-match-heights='{"xl":{"target":"none"}}'
              >
                <div className="coh-row-inner">
                  <div className="coh-column coh-visible-sm coh-col-sm-12 coh-visible-xl coh-col-xl-4 hide-mobile">
                    <div className="coh-container media-main-container">
                      <div className="coh-container ssa-component coh-component media-container bynder-media-container">
                        <img
                          src="https://bynder.sbdinc.com/m/41e4c82978cd612c/Web_Large-DCB407_A1.jpg"
                          alt=""
                          className="coh-image coh-image-responsive-xl coh-lazy-loaded"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="coh-column coh-visible-ps coh-col-ps-12 coh-col-ps-push-0 coh-col-ps-pull-0 coh-col-ps-offset-0 coh-visible-sm coh-col-sm-10 coh-visible-xl coh-col-xl-8">
                    <div
                      className="coh-container text-main-container"
                      data-margin-padding="md"
                    >
                      <ul className="grid two output-maintenance-inner">
                        <li className="r1">
                          Time saved from reduced maintenance
                        </li>
                        <li className="r2">
                          <div className="coh-heading subtitle coh-style-h3---display">
                            {(
                              numberOfMaintenanceJobsPerYear *
                              averageTotalTimeForServicing
                            ).toFixed(2)}
                          </div>
                        </li>

                        <li className="r1">
                          Total monthly PaaS maintenance cost
                        </li>
                        <li className="r2">
                          <div className="coh-heading subtitle coh-style-h3---display">
                            {dollarUSLocaleNoDigits.format(
                              totalMonthlyPaaSMaintenanceCost
                            )}
                          </div>
                        </li>

                        <li className="r1 last">
                          Total monthly PaaS power cost
                        </li>
                        <li className="r2 last">
                          <div className="coh-heading subtitle coh-style-h3---display">
                            {dollarUSLocaleNoDigits.format(
                              totalMonthlyPaaSPowerCost
                            )}
                          </div>
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

export default OutputsMaintenance;
