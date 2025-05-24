import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeById } from '../../services/recipes'
import s from "../Recipe/Recipe.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const Recipe = () => {
    const { id } = useParams()
    const [recipeInfo, setInfo] = useState(null)
    useEffect(() => {
        getRecipeById(id).then(data => {
            setInfo(data);
        })

    }, [id])
    return recipeInfo ?
        <div>
            <div className={s.singlRecipe}>
                <span>Recipe</span>
                <h2>{recipeInfo.name}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo adipisci quos, cumque ipsa quasi qui, assumenda cupiditate impedit est esse asperiores ut. Eligendi, rerum magnam.</p>
                <span>
                <FontAwesomeIcon icon={faClock} />{recipeInfo.prepTimeMinutes} min · {recipeInfo.difficulty} · {recipeInfo.servings} serve
                </span>
                <img width="200px" src={recipeInfo.image} alt="" />

            </div>


        </div> : <div>

        </div>
}

export default Recipe