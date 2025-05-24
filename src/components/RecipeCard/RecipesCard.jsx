import React, { useState, useEffect } from 'react'

import s from "./Recipes.module.scss"
import { useNavigate } from 'react-router-dom';


const RecipesCard = ({ recipe = null }) => {
    const [recipeInfo, setRecipeInfo] = useState(null);
    const navigate = useNavigate()
    const goToRecipe = () => {
        navigate(`/recipe/${recipe.id}`)
    }
    useEffect(() => {
        setRecipeInfo(null);
        const timeout = setTimeout(() => {
            setRecipeInfo(recipe);
        }, 0);
        return () => clearTimeout(timeout);
    }, [recipe]);

    return (
        <div className={s.card}>
            {recipeInfo ? (
                <>
                    <img src={recipeInfo.image} alt="Recipe" />
                    <h2>{recipeInfo.name}</h2>
                    <p>{recipeInfo.ingredients?.join(', ')}</p>
                    <div>
                        <span>
                            {recipeInfo.prepTimeMinutes} min · {recipeInfo.difficulty} · {recipeInfo.servings} serve
                        </span>
                        <button onClick={goToRecipe}>View Recipe</button>
                    </div>
                </>
            ) : (
                <p>Loading recipe...</p>
            )}
        </div>

    );
}
export default RecipesCard;