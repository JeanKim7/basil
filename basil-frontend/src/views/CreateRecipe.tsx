import {useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import { IngredientsType, RecipeFormDataType } from '../types';

export default function CreateRecipe() {

    const [recipe, setRecipe] = useState<RecipeFormDataType>({
        name: '',
        description: '',
        cuisine: "",
        cookTime: "",
        servings: '',
        instructions: ''
        }
    )
    const [ingredientList, setIngredientList] = useState<IngredientsType[]>([])


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRecipe({...recipe, [event.target.name]:event.target.value})
    }

    const handleAddClick = () => {
        setIngredientList([...ingredientList,{ingredient: "", quantity: ""}])
    }


    const handleInputChangeIngredient = (event: React.ChangeEvent<FormControlElement>, i:number) => {
        const value = event.target.value
        const onChangeIngredientList = [...ingredientList]
        onChangeIngredientList[i].ingredient = value
    }
    
    const handleDelete= (i:number) => {
        const deleteIngredient = [...ingredientList]
        deleteIngredient.splice(i,1)
        setIngredientList(deleteIngredient)
    }


    
    
    

    return (
        <>

            <h1 className = "text-center my-3">Create a Recipe</h1>
        
            <Card>
                <Form>
                    <Form.Label htmlFor="name">Name of Your Recipe</Form.Label> 
                    <Form.Control name="name" placeholder="Enter a name for your recipe" value= {recipe.name} onChange={handleInputChange} />

                    <Form.Label htmlFor="description">Description</Form.Label> 
                    <Form.Control name="description" placeholder="Enter a description for your recipe" value= {recipe.description} onChange={handleInputChange} />

                    <Form.Label htmlFor="cuisine">Cuisine</Form.Label>
                    <Form.Control name="cuisine" placeholder="Enter the cuisine type of your recipe" value= {recipe.cuisine} onChange={handleInputChange} />

                    <Form.Label htmlFor="cookTime">Cooking Time</Form.Label>
                    <Form.Control name="cookTime" placeholder="Enter the time it will take to make your recipe" value= {recipe.cookTime} onChange={handleInputChange} />

                    <Form.Label htmlFor="servings">Servings</Form.Label>
                    <Form.Control name="servings" placeholder="Enter the servings your recipe will make" value= {recipe.servings} onChange={handleInputChange} />
                    <Button onClick={handleAddClick}>Add an Ingredient</Button>
                    {
                        ingredientList.map((val,i) =>
                            <Container key={i}>
                                <h3>Add an Ingredient</h3>
                                <Form.Label htmlFor="ingredient">Ingredient</Form.Label>
                                <Form.Control name="ingredient" placeholder="Enter the ingredient" value = {val.ingredient} onChange={(e)=>handleInputChangeIngredient(e,i)} />
                                
                                <Form.Label htmlFor="quantity">Description</Form.Label>
                                <Form.Control name="quantity" placeholder="Enter the quantity of ingredient needed" value = {val.ingredient} onChange={(e)=>handleInputChangeIngredient(e,i)} />
                                <Button onClick={()=>handleDelete(i)}>Delete this ingredient</Button>
                                
                            </Container>
                    )}
                    <Container>
                    <Form.Label htmlFor="instructions">Instructions</Form.Label>
                    <Form.Control as= "textarea" name="instructions" placeholder="Enter the Instructions for your recipe" value= {recipe.instructions} onChange={handleInputChange} />
                    </Container>

                </Form>
            </Card>
        </>
    )
}
      