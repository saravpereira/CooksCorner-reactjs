import React, { Component } from "react";
import key from "../../data/key";
import "./AddNewRecipe.css";
import RecipeName from "./RecipeName/RecipeName";
import Ingredients from "./Ingredients/Ingredients";
import Steps from "./Steps/Steps";
import ImageUrl from "./ImageUrl/ImageUrl";

class AddNewRecipe extends Component {
  state = {
    id: key(100),
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
      id: this.state.id,
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
        {/* <h1>Add a New Recipe</h1>
        <label>Recipe Name</label>
        <input
          className="RecipeName"
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        /> */}

        <Ingredients
          ingredientInputs={this.state.ingredientInputs}
          handleIngredientChange={(i, event) =>
            this.handleIngredientChange(i, event)
          }
          ingredients={this.state.ingredients}
          removeIngredient={(i) => this.removeIngredient(i)}
          appendIngredientInput={() => this.appendIngredientInput()}
        />

        {/* <label>Ingredients</label>
        {this.state.ingredientInputs.map((input, i) => {
          return (
            <section key={i}>
              <input
                className="Ingredient"
                key={i}
                type="text"
                size="20"
                onChange={(event) => this.handleIngredientChange(i, event)}
                value={this.state.ingredients[i] || ""}
              />
              <button className="btn btn-warning" key={key(100)} onClick={() => this.removeIngredient(i)}>
                Remove
              </button>
            </section>
          );
        })} */}

        {/* <button className="Add" onClick={() => this.appendIngredientInput()}>
          Add Ingredient
        </button> */}

        <Steps
          stepInputs={this.state.stepInputs}
          steps={this.state.steps}
          handleStepChange={(i, event) => this.handleStepChange(i, event)}
          removeStep={(i) => this.removeStep(i)}
          appendStepInput={() => this.appendStepInput()}
        />

        {/* <label>Steps</label>
        {this.state.stepInputs.map((input, i) => {
          return (
            <section key={i}>
              <textarea
              key={i}
              value={this.state.steps[i] || ""}
              onChange={(event) => this.handleStepChange(i, event)}
              rows="4" cols="150"
            />
              <button className="btn btn-warning" key={key(100)} onClick={() => this.removeStep(i)}>
                Remove
              </button>
            </section>
          );
        })}
        <button className="Add" onClick={() => this.appendStepInput()}>Add Step</button> */}

        <ImageUrl
          imageURL={this.state.imageURL}
          handleImageUrlChange={(event) => this.handleImageUrlChange(event)}
        />

        {/* <label>Image URL</label>
        <input
          className="Image"
          type="text"
          value={this.state.imageURL}
          onChange={(event) => this.setState({ imageURL: event.target.value })}
        /> */}

        <button
          key={key(100)}
          className="Submit"
          onClick={() => this.handleSubmit()}
        >
          Submit Recipe
        </button>
        {console.log(this.state)}
      </div>
    );
  }
}

export default AddNewRecipe;
