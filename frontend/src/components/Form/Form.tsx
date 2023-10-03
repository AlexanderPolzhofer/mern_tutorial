import React from "react";
import * as Styled from "./Form.style";
import { Button } from "../Button/Button.style";
import { Colors } from "../../theme/colors";
import * as NotesAPI from "../../network/recipesApi";

interface FormProps {
  onCancel: () => void;
}

const InitialValues = {
  title: "",
  preparationTime: "",
  ingredients: [""],
};

export const Form: React.FC<FormProps> = ({ onCancel }) => {
  const [newRecipe, setNewRecipe] =
    React.useState<NotesAPI.CreateRecipeModel>(InitialValues);

  const handleSubmit = (recipe: NotesAPI.CreateRecipeModel) => {
    //const ingredientsArray = recipe.ingredients.toString().trim().split(",");
    // NotesAPI.createRecipe({ ...recipe, ingredients: ingredientsArray });
    NotesAPI.createRecipe(recipe);
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
