import React, { Component } from "react";
import classes from "../../RecipeFormInputs/RecipeFormInputs.module.css";
import RecipeName from "../../RecipeFormInputs/RecipeName/RecipeName";
import Steps from "../../RecipeFormInputs/Steps/Steps";
import Ingredients from "../../RecipeFormInputs/Ingredients/Ingredients";
import ImageUrl from "../../RecipeFormInputs/ImageUrl/ImageUrl";
import Description from "../../RecipeFormInputs/Description/Description";
import Button from "../../UI/Button/Button";
import withRecipeForm from "../../../hoc/RecipeForm/withRecipeForm"

class EditRecipe extends Component {

  componentDidMount() {
    this.props.initPrepopulatedFields()
  }


  handleUpdate() {
    this.props.updatePost({
      name: this.props.state.name,
      description: this.props.state.description,
      ingredients: this.props.state.ingredients,
      steps: this.props.state.steps,
      imageURL: this.props.state.imageURL,
    });
    this.props.closeDialog();
  }

  render() {
    return (
      <div className={classes.Recipe}>
        <RecipeName
          handleRecipeNameChange={(event) => this.props.handleRecipeNameChange(event)}
          recipeName={this.props.recipeName}
        />

        <Description
          handleRecipeDescriptionChange={(event) =>
            this.props.handleRecipeDescriptionChange(event)
          }
          recipeDescription={this.props.description}
        />

        <Ingredients
          ingredientInputs={this.props.ingredientInputs}
          handleIngredientChange={(i, event) =>
            this.props.handleIngredientChange(i, event)
          }
          ingredients={this.props.ingredients}
          removeIngredient={(i) => this.props.removeIngredient(i)}
          appendIngredientInput={() => this.props.appendIngredientInput()}
        />

        <Steps
          stepInputs={this.props.stepInputs}
          steps={this.props.steps}
          handleStepChange={(i, event) => this.props.handleStepChange(i, event)}
          removeStep={(i) => this.props.removeStep(i)}
          appendStepInput={() => this.props.appendStepInput()}
        />

        <ImageUrl
          imageURL={this.props.imageURL}
          handleImageUrlChange={(event) => this.props.handleImageUrlChange(event)}
        />

        <Button btnType="Submit" clicked={() => this.handleUpdate()}>
          Update Recipe
        </Button>
      </div>
    );
  }
}


export default withRecipeForm(EditRecipe);
