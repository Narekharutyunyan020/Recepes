import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeById } from '../../services/recipes'
import s from "../Recipe/Recipe.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import RecipeSlider from '../../components/RecipeSlider/RecipeSlider'

const Recipe = () => {
    const { id } = useParams()
    const [recipeInfo, setInfo] = useState(null)
    useEffect(() => {
        getRecipeById(id).then(data => {
            setInfo(data);
            console.log(data);

        })

    }, [id])
    return recipeInfo ?
        <div className='container'>
            <div className={`${s.singlRecipe}`}>
                <span className={s.recipe}>Recipe</span>
                <h2>{recipeInfo.name}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo adipisci quos, cumque ipsa quasi qui, assumenda cupiditate impedit est esse asperiores ut. Eligendi, rerum magnam.</p>
                <span className={s.icons}>
                    <FontAwesomeIcon icon={faClock} /> {recipeInfo.prepTimeMinutes} min · <FontAwesomeIcon icon={faWeightHanging} /> {recipeInfo.difficulty} · <FontAwesomeIcon icon={faBellConcierge} /> {recipeInfo.servings} serve
                </span>
                <img src={recipeInfo.image} alt="" />

            </div>
            <div className={s.recipes}>             
                <ul className={s.ingredients}>
                    <h2>ingredients</h2>
                    {Array.isArray(recipeInfo.ingredients) && recipeInfo.ingredients.length > 0
                        ? recipeInfo.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                        : <li>Not data</li>
                    }
                </ul>

                <ol className={s.instructions}>
                     <h2>instructions</h2>
                    {Array.isArray(recipeInfo.instructions) && recipeInfo.instructions.length > 0
                        ? recipeInfo.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))
                        : <li>Not data</li>
                    }
                </ol>
            </div>
<RecipeSlider/>

        </div> : <div></div>
     
}

export default Recipe