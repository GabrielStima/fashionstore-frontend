import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Step({ arraySteps = [], arrayContent = [] }) {
  const [currentStep, setCurrentStep] = useState();
  const [previousStep, setPreviousStep] = useState(0);

  useEffect(() => {
    setCurrentStep(0);
  }, []);

  useEffect(() => {
    if (currentStep !== previousStep) {
      setPreviousStep(currentStep);
      const currentID = `#div${currentStep}`;
      const previousID = `#div${previousStep}`;
      const searchCurrentDIV = document.querySelector(currentID);
      const searchPreviousDIV = document.querySelector(previousID);

      if (searchCurrentDIV) {
        searchCurrentDIV.classList.remove("hide-content");
      }
      if (searchPreviousDIV) {
        searchPreviousDIV.classList.add("hide-content");
      }
    }
  }, [currentStep, previousStep]);

  const callbackNextSteps = (direction = false) => {
    if (direction) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const callbackDisableButton = (id, value) => {
    document.querySelector(`#${id}`).disabled = value;
  };

  return (
    <div>
      <div className="step-button-container">
        {arraySteps.map((element, index) => (
          <div
            className={`step-button ${
              currentStep === index ? "button-color-select" : ""
            }`}
            key={index}
          >
            {element}
          </div>
        ))}
      </div>

      <div className="step-content-container">
        {arrayContent.length === 0 ? (
          <React.Fragment>
            {arraySteps.map((element, index) => (
              <div key={index} id={`div${index}`} className="hide-content">
                <div className="step-content-product">
                  <h2 className="bag-title">Seu carrinho está vazio</h2>
                </div>
              </div>
            ))}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {arrayContent.map((element, index) => (
              <div
                key={index}
                id={`div${index}`}
                className="step-content-product hide-content"
              >
                <div className="step-content-product">
                  <h2 className="bag-title">Seu carrinho</h2>
                  {element()}
                </div>
              </div>
            ))}
          </React.Fragment>
        )}

        <div className="step-content-container-buttons">
          <Link to="/">
            <button className="step-content-container-button">
              CONTINUAR A COMPRA
            </button>
          </Link>
        </div>
      </div>

      <div className="step-content-container">
        <h3>PRECISA DE AJUDA?</h3>

        <p>Fale conosco (99) 9999 - 9999</p>
      </div>
    </div>
  );
}

export default Step;
