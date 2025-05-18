import axios from "axios";


export const getRecipes = async () => {
    return axios.get("https://dummyjson.com/recipes?limit=12&select=name,image,servings,ingredients,prepTimeMinutes")
    .then((res) => res.data.recipes)

}