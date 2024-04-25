import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import  RecipeCard  from '../components/RecipeCard'
import { RecipeType } from '../types';
import { getAllRecipes } from '../lib/apiWrapper';


export default function Home (){
    
    const [recipes, setRecipes] = useState<RecipeType[]>([])
    const [fetchRecipeData, setFetcRecipeData] = useState(true);

    useEffect(() => {
        async function fetchData(){
            const response = await getAllRecipes();
            if (response.data){
                let recipes = response.data;
                recipes.sort( (a, b) => (new Date(a.dateCreated) > new Date(b.dateCreated) ? -1 : 1) );
                setRecipes(recipes)
            }
        }

        fetchData();
    }, [fetchRecipeData])
    
    return <>
        <h1>Featured Recipes</h1>
        {recipes.map(r => <RecipeCard key = {r.id} recipe={r} />)}


    </>
    
}