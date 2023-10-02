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
  levelOfDifficulty: 0,
  preparationTime: 0,
  ingredients: [""],
};

export const Form: React.FC<FormProps> = ({ onCancel }) => {
  const [newRecipe, setNewRecipe] =
    React.useState<NotesAPI.CreateRecipeModel>(InitialValues);

  const handleSubmit = (recipe: NotesAPI.CreateRecipeModel) => {
    const ingredientsArray = recipe.ingredients.toString().trim().split(",");
    NotesAPI.createRecipe({ ...recipe, ingredients: ingredientsArray });
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
        placeholder="Level of difficulty"
        type="number"
        min={0}
        max={5}
        required
        name="levelOfDifficulty"
        value={newRecipe.levelOfDifficulty}
        onChange={(e) =>
          setNewRecipe((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Styled.FormControl
        placeholder="Preparation time"
        type="number"
        min={0}
        max={100}
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
      <Styled.ButtonContainer>
        <Button
          primaryColor={Colors.Red}
          secondaryColor={Colors.White}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button primaryColor={Colors.Green} secondaryColor={Colors.White}>
          Submit
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormGroup>
  );
};
