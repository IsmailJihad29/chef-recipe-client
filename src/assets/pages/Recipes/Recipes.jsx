import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then((res) => res.json())
        .then((data) => setRecipes(data))
    },[])

    
    return (
        <div className='mt-24'>
            <h1 className='text-3xl font-bold text-purple-600 text-center mt-10 '>Our Special Recipes </h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 mx-auto w-9/12 mt-10 mb-10'>
            {
                recipes.map(recipe => <Recipe key={recipe.recipeId} recipe={recipe}></Recipe>)
            }
            </div>
        </div>
    );
};

export default Recipes;