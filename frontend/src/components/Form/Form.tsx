import React from "react";
import * as Styled from "./Form.style";
import { Button } from "../Button/Button.style";
import { Colors } from "../../theme/colors";
import * as NotesAPI from "../../network/recipesApi";
import { Recipe as RecipeModel } from "../../model/recipe";

interface FormProps {
  onCancel: () => void;
  recipeToBeEdited?: RecipeModel;
}

const initialValues = {
  _id: "",
  title: "",
  preparationTime: "",
  ingredients: [""],
};

export const Form: React.FC<FormProps> = ({ onCancel, recipeToBeEdited }) => {
  const [newRecipe, setNewRecipe] = React.useState<RecipeModel>(
    recipeToBeEdited ?? initialValues
  );

  const handleSubmit = (recipe: RecipeModel) => {
    if (recipe._id === initialValues._id) {
      NotesAPI.createRecipe(recipe);
    } else if (recipe._id === newRecipe._id) {
      NotesAPI.updateRecipe(recipe);
    }
  };

  return (
    <Styled.FormGroup
      onSubmit={(e) => {
        handleSubmit(newRecipe);
        e.preventDefault();
        onCancel();
      }}
    >
      <Styled.FormControl
        placeholder="Title"
        type="text"
        required
        name="title"
        value={newRecipe.title}
        onChange={(e) =>
          setNewRecipe((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Styled.FormControl
        placeholder="Preparation time"
        type="text"
        required
        name="preparationTime"
        value={newRecipe.preparationTime}
        onChange={(e) =>
          setNewRecipe((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Styled.FormControl
        placeholder="Ingredients"
        type="text"
        required
        name="ingredients"
        value={newRecipe.ingredients}
        onChange={(e) =>
          setNewRecipe((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Styled.FormControl
        placeholder="Do you want to add an image?"
        type="file"
        name="image"
        onChange={(e) =>
          setNewRecipe((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.files![0].name,
          }))
        }
      />
      <Styled.ButtonContainer>
        <Button
          primaryColor={Colors.Red}
          secondaryColor={Colors.White}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          primaryColor={Colors.Green}
          secondaryColor={Colors.White}
          disabled={
            !newRecipe.title ||
            !newRecipe.preparationTime ||
            !newRecipe.ingredients
          }
        >
          Submit
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormGroup>
  );
};
