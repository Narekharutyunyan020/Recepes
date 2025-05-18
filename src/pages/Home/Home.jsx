import React, { useEffect } from 'react'
import { useState } from 'react'
import s from "./Home.module.scss"
import { Rating } from 'react-simple-star-rating'
import { getRecipes } from '../../services/recipes'
import RecipesCard from '../../components/RecipeCard/RecipesCard'
import RecipeSlider from '../../components/RecipeSlider/RecipeSlider'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        getRecipes().then(data => setRecipes(data))
    }, [])

    return (

        <div>
            <div className="container">
                <RecipeSlider recipes={recipes.slice(0,6)} />
            </div>
            <div className={`container ${s.recipes}`}>
                {recipes.slice(6, 12).map(rec => <RecipesCard key={rec.id} recipe={rec} />)}
            </div>
        </div >
    )
}

export default Home