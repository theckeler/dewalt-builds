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
    <section
      className="output-breakeven coh-container ssa-component coh-component coh-style-feature-block coh-style-margin-bottom-none"
      data-bg-align=""
      data-content-order="text-first"
    >
      <div className="coh-container ssa-component coh-component">
        <section
          className="coh-container section coh-style-section"
          data-gs-background-color="dark-grey"
          data-gs-foreground-color="dark"
        >
          <div className="coh-container section-inner" style={{ zIndex: 1 }}>
            <div className="coh-container coh-container-boxed">
              <div className="coh-row coh-row-xl coh-row-visible-xl">
                <div className="coh-row-inner">
                  <div className="coh-column coh-visible-sm coh-col-sm-12 coh-visible-xl coh-col-xl-6">
                    <div
                      className="coh-container text-main-container output-breakeven-text"
                      data-margin-padding="md"
                    >
                      <div className="coh-container">
                        <p className="coh-heading subtitle coh-style-h3---display font-yellow">
                          Breakeven
                        </p>
                        <p>
                          Donec eget dolor elementum, pulvinar justo nec,
                          condimentum neque. Donec aliquam nulla a ipsum tempor,
                          fringilla viverra ante viverra. Nam maximus ipsum ac
                          feugiat vehicula. Vestibulum ornare semper nisi, non
                          pharetra metus convallis ut. In lectus dolor, iaculis
                          quis tellus a, efficitur gravida leo. Curabitur mattis
                          felis egestas, cursus justo a, commodo leo. Donec
                          suscipit odio in urna vestibulum sodales. Vestibulum
                          pellentesque hendrerit magna, ut tempus dolor
                          fringilla id.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="coh-column coh-visible-ps coh-col-ps-12 coh-col-ps-push-0 coh-col-ps-pull-0 coh-col-ps-offset-0 coh-visible-sm coh-col-sm-10 coh-visible-xl coh-col-xl-6">
                    <div
                      className="coh-container text-main-container"
                      data-margin-padding="md"
                    >
                      <div
                        className="coh-container output-breakeven-inner"
                        style={{ zIndex: 1 }}
                      >
                        <ul className="outputs grid two">
                          <li className="r1">
                            Breakeven: Outright purchase - With resale
                          </li>
                          <li className="r2">
                            {OutrightPurchaseWResale.toFixed(2)}
                          </li>

                          <li className="r1">Breakeven: FPP - With resale</li>
                          <li className="r2">{fPPWResale.toFixed(2)}</li>

                          <li className="r1">
                            Breakeven: 3-year financing - With resale
                          </li>
                          <li className="r2">
                            {financing3YearWResale.toFixed(2)}
                          </li>
                        </ul>
                      </div>
                      <div className="coh-container media-main-container hide-mobile">
                        <div
                          className="coh-container ssa-component coh-component media-container bynder-media-container"
                          style={{ zIndex: 0 }}
                        >
                          <picture>
                            <img
                              src="https://bynder.sbdinc.com/m/6abfc61231e05b/webimage-DXGZ254P_A4.jpg"
                              alt=""
                              className="coh-image coh-image-responsive-xl coh-lazy-loaded"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OutputsBreakeven;
