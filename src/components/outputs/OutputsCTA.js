const OutputsCTA = ({ cta }) => {
  return (
    <section className="output-cta coh-container ssa-component coh-component split-background coh-style-feature-block coh-style-margin-bottom-none hide-mobile">
      <div
        className="coh-container section coh-style-section"
        data-gs-spacing="none"
        data-gs-min-height=""
        data-gs-overlay=""
        data-gs-foreground-color="light"
        data-gs-remove-spacing=""
      >
        <div className="coh-container section-inner">
          <div className="coh-container coh-container-boxed">
            <p>
              Donec augue urna, sodales id efficitur sit amet, malesuada sed
              sapien.
            </p>
            <button
              className="step-button coh-style-branded-button null"
              name="mowingHours"
              value="3"
            >
              Praesent mi libero
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputsCTA;
