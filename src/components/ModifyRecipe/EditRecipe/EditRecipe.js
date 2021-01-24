import React, { Component } from "react";
import "../../AddNewRecipe/AddNewRecipe.css";
import RecipeName from "../../RecipeFormInputs/RecipeName/RecipeName";
import Steps from "../../RecipeFormInputs/Steps/Steps";
import Ingredients from "../../RecipeFormInputs/Ingredients/Ingredients";
import ImageUrl from "../../RecipeFormInputs/ImageUrl/ImageUrl";
import Button from "../../UI/Button/Button"

class EditRecipe extends Component {
  state = {
    ingredientInputs: [...this.props.viewingRecipe.ingredients],
    stepInputs: [...this.props.viewingRecipe.steps],
    name: this.props.viewingRecipe.name,
    ingredients: [...this.props.viewingRecipe.ingredients],
    steps: [...this.props.viewingRecipe.steps],
    imageURL: this.props.viewingRecipe.imageURL,
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

  handleRecipeNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleImageUrlChange(event) {
    this.setState({ imageURL: event.target.value });
  }

  handleUpdate() {
    this.props.updatePost({
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

        <Button btnType="Submit" clicked={() => this.handleUpdate()}>Update Recipe</Button>
      </div>
    );
  }
}

export default EditRecipe;
