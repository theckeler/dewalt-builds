//import dollarUSLocaleNoDigits from "../../utils/dollarUSLocaleNoDigits";
import dollarUSLocale from "../../utils/dollarUSLocale";

const OutputsTCO = ({ gasZTR, cashPurchase, NGBRWithFlexiblePowerProgram }) => {
  return (
    <section
      className="output-tco coh-container ssa-component coh-component coh-style-feature-block coh-style-margin-bottom-none"
      data-bg-align=""
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
                      className="coh-container text-main-container output-tco-text"
                      data-margin-padding="md"
                    >
                      <div className="coh-container">
                        <p className="coh-heading subtitle coh-style-h3---display font-yellow">
                          Total Cost of Ownership (TCO)
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris lorem velit, molestie id lorem eget,
                          tincidunt tempor sapien. Morbi porta vestibulum lectus
                          sit amet ornare. Proin vel arcu fermentum, tristique
                          urna at, dignissim neque. Suspendisse potenti. Proin
                          semper vulputate sem, non interdum diam imperdiet
                          eget. Curabitur dignissim eleifend tellus sed
                          placerat. Sed facilisis scelerisque accumsan. Mauris
                          quis erat sit amet lorem pellentesque luctus. Aliquam
                          mi lectus, feugiat eget vulputate in, mollis non odio.
                          Cras pellentesque, ante eget porta ultrices, dui nisi
                          suscipit tellus, id luctus dolor eros sed metus. Donec
                          dolor justo, porta sit amet cursus vel, malesuada quis
                          nibh. Nunc ut arcu vulputate, hendrerit risus in,
                          cursus purus. Sed euismod lectus nec elementum semper.
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
                        className="coh-container output-tco-inner"
                        style={{ zIndex: 1 }}
                      >
                        <ul className="grid two">
                          <li className="r1 last">Gas ZTR</li>
                          <li className="r2 last">
                            {dollarUSLocale.format(gasZTR.TCOofGasZTR)}
                          </li>
                        </ul>

                        <ul className="grid two">
                          <li className="title-span coh-heading subtitle coh-style-h3---display">
                            NGBR
                          </li>
                          <li className="r1">+ batteries & chargers</li>
                          <li className="r2">
                            {dollarUSLocale.format(cashPurchase.TCOofNGBR)}
                          </li>
                          <li className="r1">with FPP</li>
                          <li className="r2">
                            {dollarUSLocale.format(
                              NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                                NGBRWithFlexiblePowerProgram.flexiblePowerProgramSubscription +
                                cashPurchase.power +
                                cashPurchase.maintenance
                            )}
                          </li>

                          <li className="r1">with 36-month financing</li>
                          <li className="r2">
                            {dollarUSLocale.format(
                              NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                                NGBRWithFlexiblePowerProgram.financingFee36 +
                                cashPurchase.power +
                                cashPurchase.maintenance
                            )}
                          </li>

                          <li className="r1 last">with 48-month financing</li>
                          <li className="r2 last">
                            {dollarUSLocale.format(
                              NGBRWithFlexiblePowerProgram.depreciationOfBareNGBR +
                                NGBRWithFlexiblePowerProgram.financingFee48 +
                                cashPurchase.power +
                                cashPurchase.maintenance
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="coh-container media-main-container">
                        <div
                          className="coh-container ssa-component coh-component media-container bynder-media-container"
                          style={{ zIndex: 0 }}
                        >
                          <picture>
                            <img
                              src="https://bynder.sbdinc.com/m/230da2f7a104cae1/Drupal_Small-DXGHW48P_A1.jpg"
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

export default OutputsTCO;
