import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../RecipeFormInputs/RecipeFormInputs.module.css";
import RecipeName from "../RecipeFormInputs/RecipeName/RecipeName";
import Ingredients from "../RecipeFormInputs/Ingredients/Ingredients";
import Steps from "../RecipeFormInputs/Steps/Steps";
import ImageUrl from "../RecipeFormInputs/ImageUrl/ImageUrl";
import Description from "../RecipeFormInputs/Description/Description";
import Button from "../UI/Button/Button";
import * as actions from "../../store/actions/index";
import axios from "../../axios-posts";

class AddEditRecipe extends Component {
  componentDidMount() {
    if (this.props.addNewRecipe){
      this.props.onInitIngredientStepInput();
    } else if (this.props.editRecipe) {
      this.props.onInitPrepopulatedFields(this.props.viewingRecipe[0])
    }
    
  }

  handleAddNewPost = (payload) => {
    axios.post("/recipes.json", payload).then((response) => {
      this.props.onGetAllPosts();
    });
  };

  handleUpdatePost = (payload) => {
    axios
      .put("/recipes/" + this.props.selectedPostID + ".json", payload)
      .then((response) => {
        this.props.onGetAllPosts();
      });
  };

  handleSubmit() {
    const payload = {
      name: this.props.name,
      description: this.props.description,
      ingredients: this.props.ingredients,
      steps: this.props.steps,
      imageURL: this.props.imageURL,
    }
    if(this.props.addNewRecipe){
      this.handleAddNewPost(payload);
    } else if (this.props.editRecipe) {
      this.handleUpdatePost(payload)
    }
    this.props.onCloseEditDialog();
    this.props.onClosePostDialog();
    
  }

  render() {
    return (
      <div className={classes.Recipe}>
        <RecipeName
          handleRecipeNameChange={(event) =>
            this.props.onNameChange(event)
          }
          recipeName={this.props.name}
        />

        <Description
          handleRecipeDescriptionChange={(event) =>
            this.props.onDescriptionChange(event)
          }
          recipeDescription={this.props.description}
        />

        <Ingredients
          ingredientInputs={this.props.ingredientInputs}
          handleIngredientChange={(i, event) =>
            this.props.onIngredientFieldChange(i, event)
          }
          ingredients={this.props.ingredients}
          removeIngredient={(i) => this.props.onRemoveIngredient(i)}
          appendIngredientInput={() => this.props.onAppendIngredientInput()}
        />

        <Steps
          stepInputs={this.props.stepInputs}
          steps={this.props.steps}
          handleStepChange={(i, event) => this.props.onStepFieldChange(i, event)}
          removeStep={(i) => this.props.onRemoveStep(i)}
          appendStepInput={() => this.props.onAppendStepInput()}
        />

        <ImageUrl
          imageURL={this.props.imageURL}
          handleImageUrlChange={(event) =>
            this.props.onImageChange(event)
          }
        />

        <Button btnType="Add" clicked={() => this.handleSubmit()}>
          {this.props.addNewRecipe ? "Submit Recipe" : "Update Recipe"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPostID: state.recipeBlog.selectedPostID,
    viewingRecipe: state.recipeBlog.viewingRecipe,
    addNewRecipe: state.recipeBlog.addNewRecipe,
    editRecipe: state.recipeBlog.editRecipe,
    ingredientInputs: state.recipeForm.ingredientInputs,
    stepInputs: state.recipeForm.stepInputs,
    name: state.recipeForm.name,
    description: state.recipeForm.description,
    ingredients: state.recipeForm.ingredients,
    steps: state.recipeForm.steps,
    imageURL: state.recipeForm.imageURL,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPosts: () => dispatch(actions.getAllPosts()),
    onClosePostDialog: () => dispatch(actions.closePostDialog()),
    onCloseEditDialog: () => dispatch(actions.closeEditDialog()),
    onInitPrepopulatedFields: (viewingRecipe) => dispatch(actions.initPrepopulatedFields(viewingRecipe)),
    onInitIngredientStepInput: () => dispatch(actions.initIngredientStepInput()),
    onAppendIngredientInput: () => dispatch(actions.appendIngredientInput()),
    onAppendStepInput: () => dispatch(actions.appendStepInput()),
    onIngredientFieldChange: (index, event) => dispatch(actions.ingredientFieldChange(index, event)),
    onStepFieldChange: (index, event) => dispatch(actions.stepFieldChange(index, event)),
    onNameChange: (event) => dispatch(actions.nameChange(event)),
    onImageChange: (event) => dispatch(actions.imageChange(event)),
    onDescriptionChange: (event) => dispatch(actions.descriptionChange(event)),
    onRemoveIngredient: (index) => dispatch(actions.removeIngredient(index)),
    onRemoveStep: (index) => dispatch(actions.stepIngredient(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditRecipe);
