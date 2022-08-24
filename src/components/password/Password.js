const Password = ({ setPassword, password }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword(e.target.children[0].value);
    if (e.target.children[0].value === process.env.REACT_APP_PASSWORD) {
      document.cookie = "loggedIn=1";
    }
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
