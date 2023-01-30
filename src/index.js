import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Routers } from "react-router-dom";
import Index from "./Home/Index";
import Header from "./templates/Header";
import Footer from "./templates/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="coh-container">
        <Routers>
          <Index />
        </Routers>
      </main>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
