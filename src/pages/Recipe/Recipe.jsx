import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeById } from '../../services/recipes'

const Recipe = () => {
    const { id } = useParams()
    const [recipeInfo, setInfo] = useState(null)
    useEffect(() => {
        getRecipeById(id).then(data => {
            setInfo(data);
        })

    }, [id])
    return recipeInfo ? <div>
        {recipeInfo.name}
        <img width="200px" src={recipeInfo.image} alt="" />
    </div> : <div>

    </div>
}

export default Recipe