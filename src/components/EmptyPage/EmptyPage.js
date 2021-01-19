import React from "react";
import Aux from "../../hoc/Aux/Aux";
import './EmptyPage.css'

const emptyPage = (props) => {
  return (
    <Aux>
      <h1 className="Empty">Uh oh... No recipes were found under that name!</h1>
      <p className="Empty instr">You can add this recipe to the collection by selecting <strong>Add a New Recipe</strong></p>
    </Aux>
  );
};

export default emptyPage;
