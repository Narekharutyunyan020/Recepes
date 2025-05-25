import React, { useEffect, useState } from 'react'
import { getAll } from '../../services/recipes'
import RecipesCard from '../../components/RecipeCard/RecipesCard'

const AllRecipes = () => {
    const [skip, setSkip] = useState(0)
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        getAll(skip).then(data => {
            setRecipes(data.recipes)
        })
    }, [skip])
    return (
        <div>
            {recipes.length > 0 ? recipes.map(rec => <RecipesCard recipe={rec} key={rec.id} />) : "No data"}
            <button onClick={() => setSkip(12)}>next page</button>
        </div>
    )
}

export default AllRecipes