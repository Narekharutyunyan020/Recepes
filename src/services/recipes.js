import axios from "axios";

export const getRecipes = async () => {
  return axios
    .get(
      "https://dummyjson.com/recipes?limit=12&select=name,image,servings,ingredients,prepTimeMinutes,difficulty"
    )
    .then((res) => res.data.recipes);
};

export const getRecipeById = async (id) => {
  return axios
    .get(`https://dummyjson.com/recipes/${id}`)
    .then((res) => res.data);
};
