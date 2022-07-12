const Password = ({ setPassword, password }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", e.target.children[0].value);
    setPassword(e.target.children[0].value);
  };

  return (
    <section
      className="coh-container section coh-style-section"
      data-gs-background-color="dark-grey"
    >
      <div className="section-inner">
        <div className="coh-container-boxed">
          <div className="coh-container text-main-container">
            <form onSubmit={handleSubmit}>
              <input className="password" type="password" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Password;
