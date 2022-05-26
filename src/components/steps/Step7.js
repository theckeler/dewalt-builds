import Buttons from "../elements/Buttons";
import Inputs from "../inputs/Inputs";

const Step7 = ({ whichStep, setWhichStep, customerInputs }) => {
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
          </div>
          <Buttons {...{ whichStep, setWhichStep }} />
          <Inputs
            {...{
              whichStep,
              setWhichStep,
              customerInputs,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Step7;
