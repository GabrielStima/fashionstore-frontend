import React from "react";
import Step from "../../components/Steps";
import ItensBag from "../../components/ItensBag";
import "./styles.css";

function Bag({ callbackAlert }) {
  return (
    <div className="bag-container">
      <div className="bag-steps-container">
        <Step
          arraySteps={["1", "2", "3"]}
          arrayContent={[ItensBag(callbackAlert)]}
        />
      </div>
    </div>
  );
}

export default Bag;
