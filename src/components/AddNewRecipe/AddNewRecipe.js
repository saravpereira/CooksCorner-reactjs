import React, { Component } from "react";
import "./AddNewRecipe.css";
import RecipeName from "./RecipeName/RecipeName";
import Ingredients from "./Ingredients/Ingredients";
import Steps from "./Steps/Steps";
import ImageUrl from "./ImageUrl/ImageUrl";
import Button from "../UI/Button/Button"

class AddNewRecipe extends Component {
  state = {
    ingredientInputs: ["ingredientInputs-0"],
    stepInputs: ["stepInputs-0"],
    name: "",
    ingredients: [],
    steps: [],
    imageURL: "",
  };

  appendIngredientInput() {
    var newInput = `ingredientInputs-${this.state.ingredientInputs.length}`;
    this.setState((prevState) => ({
      ingredientInputs: prevState.ingredientInputs.concat([newInput]),
    }));
  }

  appendStepInput() {
    var newInput = `stepInputs-${this.state.stepInputs.length}`;
    this.setState((prevState) => ({
      stepInputs: prevState.stepInputs.concat([newInput]),
    }));
  }

  handleIngredientChange(i, event) {
    let ingredients = [...this.state.ingredients];
    ingredients[i] = event.target.value;
    this.setState({ ingredients });
  }

  handleStepChange(i, event) {
    let steps = [...this.state.steps];
    steps[i] = event.target.value;
    this.setState({ steps });
  }

  handleRecipeNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleImageUrlChange(event) {
    this.setState({ imageURL: event.target.value });
  }

  removeIngredient(i) {
    let ingredients = [...this.state.ingredients];
    ingredients.splice(i, 1);
    this.setState({ ingredients });

    let ingredientInputs = [...this.state.ingredientInputs];
    ingredientInputs.splice(i, 1);
    this.setState({ ingredientInputs });
  }

  removeStep(i) {
    let steps = [...this.state.steps];
    steps.splice(i, 1);
    this.setState({ steps });

    let stepInputs = [...this.state.stepInputs];
    stepInputs.splice(i, 1);
    this.setState({ stepInputs });
  }

  handleSubmit() {
    this.props.addPost({
      name: this.state.name,
      ingredients: this.state.ingredients,
      steps: this.state.steps,
      imageURL: this.state.imageURL,
    });
    this.props.closeDialog();
  }

  render() {
    return (
      <div className="NewRecipe">
        <RecipeName
          handleRecipeNameChange={(event) => this.handleRecipeNameChange(event)}
          recipeName={this.state.name}
        />

        <Ingredients
          ingredientInputs={this.state.ingredientInputs}
          handleIngredientChange={(i, event) =>
            this.handleIngredientChange(i, event)
          }
          ingredients={this.state.ingredients}
          removeIngredient={(i) => this.removeIngredient(i)}
          appendIngredientInput={() => this.appendIngredientInput()}
        />

        <Steps
          stepInputs={this.state.stepInputs}
          steps={this.state.steps}
          handleStepChange={(i, event) => this.handleStepChange(i, event)}
          removeStep={(i) => this.removeStep(i)}
          appendStepInput={() => this.appendStepInput()}
        />

        <ImageUrl
          imageURL={this.state.imageURL}
          handleImageUrlChange={(event) => this.handleImageUrlChange(event)}
        />

        <Button btnType="Add" clicked={() => this.handleSubmit()}>Submit Recipe</Button>

      </div>
    );
  }
}

export default AddNewRecipe;
