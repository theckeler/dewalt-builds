import dollarUSLocaleNoDigits from "../../utils/dollarUSLocaleNoDigits";
import outputCSS from "../../scss/output.module.css";

const OutputsMaintenance = ({
  numberOfMaintenanceJobsPerYear,
  averageTotalTimeForServicing,
  totalMonthlyPaaSMaintenanceCost,
  totalMonthlyPaaSPowerCost,
}) => {
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
                className={`${outputCSS.padding20} align-self-center coh-col-ps-12 coh-col-xl-6`}
              >
                <ul>
                  <li>
                    <span>Time saved from reduced maintenance</span>
                    <span>
                      {(
                        numberOfMaintenanceJobsPerYear *
                        averageTotalTimeForServicing
                      ).toFixed(2)}
                    </span>
                  </li>
                  <li>
                    <span>Total monthly PaaS maintenance cost</span>
                    <span>
                      {dollarUSLocaleNoDigits.format(
                        totalMonthlyPaaSMaintenanceCost
                      )}
                    </span>
                  </li>
                  <li>
                    <span>Total monthly PaaS power cost</span>
                    <span>
                      {dollarUSLocaleNoDigits.format(totalMonthlyPaaSPowerCost)}
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

export default OutputsMaintenance;
