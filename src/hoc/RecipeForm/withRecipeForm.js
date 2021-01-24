import React, { Component } from "react";

function withRecipeForm(WrappedComponent) {
  return class HOC extends Component {
    state = {
      ingredientInputs: [],
      stepInputs: [],
      name: "",
      description: "",
      ingredients: [],
      steps: [],
      imageURL: "",
    };

    initIngredientStepInput() {
      this.setState({
        ingredientInputs: ["ingredientInputs-0"],
        stepInputs: ["stepInputs-0"],
      });
    }

    initPrepopulatedFields() {
        this.setState({
            ingredientInputs: [...this.props.viewingRecipe.ingredients],
            stepInputs: [...this.props.viewingRecipe.steps],
            name: this.props.viewingRecipe.name,
            description: this.props.viewingRecipe.description,
            ingredients: [...this.props.viewingRecipe.ingredients],
            steps: [...this.props.viewingRecipe.steps],
            imageURL: this.props.viewingRecipe.imageURL,
        });
    }

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

    handleRecipeDescriptionChange(event) {
      this.setState({ description: event.target.value });
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

    render() {
      return (
        <WrappedComponent
          recipeName={this.state.name}
          handleRecipeNameChange={(event) => this.handleRecipeNameChange(event)}
          description={this.state.description}
          handleRecipeDescriptionChange={(event) =>
            this.handleRecipeDescriptionChange(event)
          }
          removeStep={(i) => this.removeStep(i)}
          removeIngredient={(i) => this.removeIngredient(i)}
          ingredients={this.state.ingredients}
          initIngredientStepInput={() => this.initIngredientStepInput()}
          appendIngredientInput={() => this.appendIngredientInput()}
          ingredientInputs={this.state.ingredientInputs}
          handleIngredientChange={(i, event) =>
            this.handleIngredientChange(i, event)
          }
          steps={this.state.steps}
          appendStepInput={() => this.appendStepInput()}
          stepInputs={this.state.stepInputs}
          handleStepChange={(i, event) => this.handleStepChange(i, event)}
          imageURL={this.state.imageURL}
          handleImageUrlChange={(event) => this.handleImageUrlChange(event)}
          initPrepopulatedFields={() => this.initPrepopulatedFields()}
          state={this.state}
          {...this.props}
        />
      );
    }
  };
}

export default withRecipeForm;
