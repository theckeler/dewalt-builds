const OutputsEnviro = ({ enviromentalBenefits, poundsOfCO2Avoided }) => {
  return (
    <div
      className="output-enviromental coh-container ssa-component coh-component bg-container coh-style-margin-bottom-none coh-style-page-header"
      data-bg-align="center-left"
      data-select-theme="light"
      data-force-uppercase="1"
    >
      <div className="coh-container ssa-component coh-component media-container bynder-media-container">
        <img
          src="https://bynder.sbdinc.com/m/3db0112e1fc93b45/Drupal_Large-DCM575X2_A3.jpg"
          alt=""
          className="coh-image coh-image-responsive-xl coh-lazy-loaded"
          loading="lazy"
        />
      </div>
      <div className="coh-container ssa-component coh-component">
        <section
          className="coh-container section coh-style-section"
          data-gs-background-color="default"
          data-gs-spacing="none"
          data-gs-foreground-color="dark"
        >
          <div className="coh-container section-inner">
            <div className="coh-container coh-container-boxed">
              <div className="coh-container ssa-component coh-component">
                <div className="coh-row coh-row-xl coh-row-visible-xl">
                  <div className="coh-row-inner">
                    <div className="coh-column ssa-component coh-component coh-visible-ps coh-col-ps-12 coh-visible-sm coh-col-sm-12 coh-visible-md coh-col-md-12 coh-visible-xl coh-col-xl-12">
                      <div
                        className="coh-container text-main-container output-enviromental-inner"
                        data-text-align="center"
                      >
                        <p
                          className="coh-heading subtitle coh-style-h3---display"
                          style={{ paddingTop: "30px" }}
                        >
                          Environmental Benefits
                        </p>
                        <p>
                          Nullam consequat eros velit, ut imperdiet nibh
                          imperdiet a. Interdum et malesuada fames ac ante ipsum
                          primis in faucibus. Curabitur sed consequat erat.
                          Fusce feugiat lorem nunc, nec bibendum eros pharetra
                          vitae. Donec eget pharetra eros. Aliquam erat
                          volutpat. Orci varius natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus. Cras cursus
                          augue id est volutpat lacinia. Suspendisse vitae risus
                          aliquam, faucibus lacus et, viverra odio.
                        </p>

                        <ul className="outputs grid three output-enviromental-grid">
                          <li className="svg-icon">
                            <div className="output-enviromental-icon"></div>
                            <div className="output-enviromental-output">
                              <h2 className="coh-heading subtitle coh-style-h2---display">
                                {(
                                  poundsOfCO2Avoided /
                                  enviromentalBenefits.poundsCO2SequesteredPerUrbanTreePlanted
                                ).toFixed(2)}
                              </h2>
                              <p>Trees to plant to avoid equivalent CO2</p>
                            </div>
                          </li>
                          <li className="svg-icon">
                            <div className="output-enviromental-icon"></div>
                            <div className="output-enviromental-output">
                              <h2 className="coh-heading subtitle coh-style-h2---display">
                                {(
                                  enviromentalBenefits.poundsCO2EmittedPerMileDrivenInACar *
                                  poundsOfCO2Avoided
                                ).toFixed(2)}
                              </h2>
                              <p>Equivalent miles driven in a car</p>
                            </div>
                          </li>
                          <li className="svg-icon">
                            <div className="output-enviromental-icon"></div>
                            <div className="output-enviromental-output">
                              <h2 className="coh-heading subtitle coh-style-h2---display">
                                {poundsOfCO2Avoided.toFixed(2)}
                              </h2>
                              <p>Pounds of CO2 avoided</p>
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
        </section>
      </div>
    </div>
  );
};

export default OutputsEnviro;
