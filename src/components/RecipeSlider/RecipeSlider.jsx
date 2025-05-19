import React, { useState } from 'react'
import s from "./RecipeSlider.module.scss"
import RecipesCard from '../RecipeCard/RecipesCard'

const RecipeSlider = ({ recipes } = [], title = "FEATUREED RECEPES") => {
    const[position,setPosition]=useState(0)
    const changePosition =(dir) =>{
        if(position+dir<0||position+dir>=recipes.length-1) return
        setPosition( position+dir);
        

    }
    return (
        <div className={s.slider}>
            <div className={s.top}>
                <h2 >{title}</h2>
                <div className={s.top_btns}>
                    <button onClick={()=>changePosition(-1)}  className={s.arrowButton}> <img src="/Arrow Left.png" alt="Previous" /></button>
                    <button onClick={()=>changePosition(+1)}  className={s.arrowButton}><img src="/Arrow Right.png" alt="Previous" /></button>
                </div>
            </div>
            {recipes.length == 0 ? <></> : <div className={s.cards}>
                <RecipesCard recipe={recipes[position]} />
                <RecipesCard recipe={recipes[position+1]} />
            </div>}
        </div>
    )
}

export default RecipeSlider