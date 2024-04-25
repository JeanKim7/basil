import { UserType, RecipeType } from '../types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

type RecipeCardProps = {
    recipe: RecipeType
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    
    return (
        <Card className='my-3 bg-custom' text='black'>
            <Card.Header>{ recipe.cookTime }</Card.Header>
            <Card.Body>
                <Card.Title>{ recipe.name }</Card.Title>
                <Card.Subtitle>{ recipe.servings }</Card.Subtitle>
                <Card.Text>{ recipe.ingredients }</Card.Text>
                <Card.Text>{ recipe.instructions }</Card.Text>
                <Card.Footer>{`By: ${recipe.author.username}`}</Card.Footer>
            </Card.Body>
        </Card>
    )
}
