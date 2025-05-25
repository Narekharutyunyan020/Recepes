import React, { useEffect, useState } from 'react'
import { getAll } from '../../services/recipes'
import RecipesCard from '../../components/RecipeCard/RecipesCard'
import style from './AllRecipes.module.scss'

const AllRecipes = () => {
    const [skip, setSkip] = useState(0)
    const [recipes, setRecipes] = useState([])
    const changePage = (value) => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setSkip(value)
    }
    useEffect(() => {
        getAll(skip).then(data => {
            setRecipes(data.recipes)
        })
    }, [skip])
    return (
        <div>
            <div className={style.top}>


                <span className={style.recipe}>Recipe</span>
                <h2>Embark on a journey</h2>
                <p>With our diverse collection of recipes we have something to satisfy every palate.</p>
            </div>
            <div className={`container ${style.grid}`}>

                {recipes.length > 0 ? recipes.map(rec => <RecipesCard recipe={rec} key={rec.id} />) : "No data"}
            </div>
            <div className={`container ${style.pagination}`}>

                <button style={{ backgroundColor: skip == 0 ? "#e67e22" : "transparent" }} onClick={() => changePage(0)}>1</button>
                <button style={{ backgroundColor: skip == 12 ? "#e67e22" : "transparent" }} onClick={() => changePage(12)}>2</button>
                <button style={{ backgroundColor: skip == 24 ? "#e67e22" : "transparent" }} onClick={() => changePage(24)}>3</button>
                <button style={{ backgroundColor: skip == 36 ? "#e67e22" : "transparent" }} onClick={() => changePage(36)}>4</button>
            </div>
        </div>
    )
}

export default AllRecipes