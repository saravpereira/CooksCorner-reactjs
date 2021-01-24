import React from "react";
import key from "../../../data/key"
import "./Steps.css"

const steps = (props) => {
  return (
    <React.Fragment>
      <label>Steps</label>
        {props.stepInputs.map((input, i) => {
          return (
            <section key={i}>
              <textarea
              key={i}
              value={props.steps[i] || ""}
              onChange={(event) => props.handleStepChange(i, event)}
              rows="4" cols="150"
            />
              <button className="btn btn-warning" key={key(100)} onClick={() => props.removeStep(i)}>
                Remove
              </button>
            </section>
          );
        })}
        <button className="Add" onClick={() => props.appendStepInput()}>Add Step</button>
    </React.Fragment>
  );
};

export default steps;