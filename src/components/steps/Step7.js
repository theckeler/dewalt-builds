const Step7 = ({ whichStep, setWhichStep }) => {
  return (
    <section
      className="coh-container section coh-style-section"
      data-gs-background-color="light-grey"
    >
      <div className={`section-inner ${whichStep === 8 ? "" : "steps"}`}>
        <div className={`${whichStep === 8 ? "" : "step coh-container-boxed"}`}>
          <div className="coh-container text-main-container">
            <h2>Save your results</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              dolor sed eros auctor eleifend. Aliquam venenatis elit tortor, ut
              maximus tortor malesuada id. Vestibulum eget finibus libero, eget
              sagittis arcu. Integer ligula tortor, lobortis quis lorem ac,
              laoreet maximus mi. Praesent semper nunc eget felis tristique, sed
              aliquam massa venenatis. Nam non volutpat nibh, quis laoreet
              purus. Aenean ac mattis elit. Aenean feugiat volutpat tortor, eu
              aliquet odio auctor in. Proin at tincidunt felis. In hac habitasse
              platea dictumst. Nullam ultrices, dolor eget consectetur
              fermentum, nunc massa gravida lectus, quis feugiat nisl justo vel
              sem.
            </p>
            <div
              id="block-righthandsideblockform"
              className="settings-tray-editable"
              data-drupal-settingstray="editable"
            >
              <div>
                <form
                  className="webform-submission-form webform-submission-add-form webform-submission-subscribe-newsletter-form webform-submission-subscribe-newsletter-add-form js-webform-details-toggle webform-details-toggle"
                  // noValidate="novalidate"
                  // data-drupal-selector="webform-submission-subscribe-newsletter-block-content-41-add-form"
                  // action="/"
                  // method="post"
                  // id="webform-submission-subscribe-newsletter-block-content-41-add-form"
                  // acceptCharset="UTF-8"
                  // data-once="form-updated"
                  // data-drupal-form-fields="edit-givenname,edit-familyname,edit-email,edit-country-us,edit-country-ca,edit-actions-submit"
                >
                  <div className="webform-required">
                    <span className="form-required"></span>All fields are
                    required unless otherwise noted.
                  </div>
                  <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-givenname form-item-givenname">
                    <label
                      data-icon-left="person"
                      htmlFor="edit-givenname"
                      className="js-form-required form-required"
                    >
                      First Name
                    </label>
                    <input
                      data-drupal-selector="edit-givenname"
                      type="text"
                      id="edit-givenname"
                      name="givenName"
                      value=""
                      size="60"
                      maxLength="255"
                      className="form-text required"
                      required="required"
                      aria-required="true"
                      disabled="disabled"
                    />
                  </div>

                  <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-familyname form-item-familyname">
                    <label
                      htmlFor="edit-familyname"
                      className="js-form-required form-required"
                    >
                      Last Name
                    </label>
                    <input
                      data-drupal-selector="edit-familyname"
                      type="text"
                      id="edit-familyname"
                      name="familyName"
                      value=""
                      size="60"
                      maxLength="255"
                      className="form-text required"
                      required="required"
                      aria-required="true"
                      disabled="disabled"
                    />
                  </div>

                  <div className="js-form-item form-item js-form-type-email form-type-email js-form-item-email form-item-email">
                    <label
                      htmlFor="edit-email"
                      className="js-form-required form-required"
                    >
                      Email Address
                    </label>
                    <input
                      pattern="[a-zA-Z0-9_-]+[a-zA-Z0-9_.-]*@[a-zA-Z0-9_-]+[a-zA-Z0-9_.-]*\.[a-zA-Z]*"
                      data-webform-pattern-error="Please enter a valid Email Address"
                      data-drupal-selector="edit-email"
                      type="email"
                      id="edit-email"
                      name="email"
                      value=""
                      size="60"
                      maxLength="254"
                      placeholder="eg. joe@dewalt.com"
                      className="form-email required"
                      required="required"
                      aria-required="true"
                      disabled="disabled"
                    />
                  </div>

                  <fieldset
                    className="country-res radios--wrapper fieldgroup form-composite webform-composite-visible-title required js-webform-type-radios webform-type-radios js-form-item form-item js-form-wrapper form-wrapper"
                    data-drupal-selector="edit-country"
                    id="edit-country--wrapper"
                    aria-required="true"
                    role="radiogroup"
                    aria-labelledby="edit-country--wrapper-legend"
                  >
                    <legend id="edit-country--wrapper-legend">
                      <span className="fieldset-legend js-form-required form-required">
                        Country of Residence
                      </span>
                    </legend>
                    <div className="fieldset-wrapper">
                      <div
                        id="edit-country"
                        className="js-webform-radios webform-options-display-two-columns"
                      >
                        <div className="js-form-item form-item js-form-type-radio form-type-radio js-form-item-country form-item-country">
                          <input
                            className="country-res form-radio"
                            required="required"
                            data-drupal-selector="edit-country-us"
                            type="radio"
                            id="edit-country-us"
                            name="country"
                            value="US"
                            disabled="disabled"
                          />

                          <label htmlFor="edit-country-us" className="option">
                            United States
                          </label>
                        </div>

                        <div className="js-form-item form-item js-form-type-radio form-type-radio js-form-item-country form-item-country">
                          <input
                            className="country-res form-radio"
                            required="required"
                            data-drupal-selector="edit-country-ca"
                            type="radio"
                            id="edit-country-ca"
                            name="country"
                            value="CA"
                            disabled="disabled"
                          />

                          <label htmlFor="edit-country-ca" className="option">
                            Canada
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div
                    data-drupal-selector="edit-actions"
                    className="form-actions webform-actions js-form-wrapper form-wrapper"
                    id="edit-actions--3"
                  >
                    <input
                      className=" button button--primary js-form-submit form-submit bg-yellow"
                      data-drupal-selector="edit-actions-submit"
                      type="submit"
                      id="edit-actions-submit"
                      name="op"
                      value="Save"
                      onClick={() => {
                        setWhichStep(8);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step7;
