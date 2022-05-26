import Buttons from "../elements/Buttons";
import DaysMowedPerWeek from "../inputs/DaysMowedPerWeek";
import Inputs from "../inputs/Inputs";
import OutputsPricing from "../outputs/OutputsPricing";

const Step3 = ({
  whichStep,
  setWhichStep,
  customerInputs,
  setPADDRegion,
  setCustomerInputs,
  pricing,
  requiredEquipment,
}) => {
  return (
    <>
      <section
        className="coh-container section coh-style-section"
        data-gs-background-color="light-grey"
      >
        <div className={`section-inner ${whichStep === 8 ? "" : "steps"}`}>
          <div
            className={`${whichStep === 8 ? "" : "step coh-container-boxed"}`}
          >
            <div className="coh-container text-main-container">
              <h2>Step 3: Lorem ipsum dolor sit amet</h2>
              <p>
                Etiam at sagittis odio. Vestibulum congue magna ipsum, a tempor
                mauris tempus sed. Donec egestas justo eget metus convallis
                mollis eget at velit. Vestibulum ac porttitor nulla, id bibendum
                orci. Quisque varius elit sapien, at lobortis ex dignissim sed.
                In eget imperdiet velit. Sed lorem ipsum, dapibus in massa vel,
                tincidunt imperdiet enim. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <ul className="inputs" id="inputs">
                <li className="column center range">
                  <DaysMowedPerWeek
                    {...{
                      customerInputs,
                      setCustomerInputs,
                      inStep: true,
                      whichStep,
                    }}
                  />
                </li>
              </ul>
            </div>
            <Buttons {...{ whichStep, setWhichStep }} />
            <Inputs
              {...{
                whichStep,
                setWhichStep,
                setPADDRegion,
                customerInputs,
                setCustomerInputs,
              }}
            />
          </div>
        </div>
      </section>

      <section className="container-outputs">
        <OutputsPricing {...{ pricing, requiredEquipment }} />
      </section>
    </>
  );
};

export default Step3;
