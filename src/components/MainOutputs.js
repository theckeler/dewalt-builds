import React from "react";

const MainOutputs = (props) => {
  //const { ...props } = this.props;

  const hideShow = (e) => {
    e.preventDefault();
    e.target.closest("ul").classList.toggle("hide");
  };

  const hideShowSection = (e) => {
    e.preventDefault();
    document.querySelector("#output").classList.toggle("hide-section");
  };

  console.log(props);
  return (
    <>
      <button onClick={hideShowSection}>View main Fields</button>
    </>
  );
};

export default MainOutputs;
