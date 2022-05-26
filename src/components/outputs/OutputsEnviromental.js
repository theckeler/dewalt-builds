import outputCSS from "../../scss/output.module.css";

const OutputsTCO = ({ enviromentalBenefits, poundsOfCO2Avoided }) => {
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
            <ul className="outputs">
              <li className="title">Environmental benefits</li>
              <li className="svg-icon">
                <div className="overlay">
                  Trees to plant to avoid equivalent CO2:
                  {(
                    poundsOfCO2Avoided /
                    enviromentalBenefits.poundsCO2SequesteredPerUrbanTreePlanted
                  ).toFixed(2)}
                </div>
              </li>
              <li className="svg-icon">
                <div className="overlay">
                  Equivalent miles driven in a car:
                  {(
                    enviromentalBenefits.poundsCO2EmittedPerMileDrivenInACar *
                    poundsOfCO2Avoided
                  ).toFixed(2)}
                </div>
              </li>
              <li className="svg-icon">
                <div className="overlay">
                  Pounds of CO2 avoided:
                  {poundsOfCO2Avoided.toFixed(2)}
                </div>
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
