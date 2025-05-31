import React, { useEffect, useState } from 'react'
import { getAll, getByMealType, searchRecipes } from '../../services/recipes'
import RecipesCard from '../../components/RecipeCard/RecipesCard'
import style from './AllRecipes.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const AllRecipes = () => {
  const [skip, setSkip] = useState(0)
  const [recipes, setRecipes] = useState([])
  const [selectedType, setSelectedType] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const location = useLocation();
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")


  const submitSearch = (e) => {
    e.preventDefault()
    navigate(`/recipes?search=${searchTerm}`)
  }



  const changePage = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setSkip(value)
  }

  const changeType = (type) => {
    setSearchTerm("")
    setSelectedType(type)
    if (type === "All") {
      setSkip(0)
      getAll(0).then(data => {
        setRecipes(data.recipes)
      })
    } else {
      getByMealType(type.toLowerCase()).then(data => {
        setRecipes(data.recipes)
      })
    }
  }

  const types = ['Dinner', 'Lunch', 'Snack', 'Dessert', 'Side Dish', 'Appetizer', 'Breakfast', 'Beverage']

  useEffect(() => {
    if (searchQuery) {
      return
    }
    getAll(skip).then(data => {
      setRecipes(data.recipes)
    })
  }, [skip])

  useEffect(() => {
    searchRecipes(searchQuery).then(data => setRecipes(data))
    setSearchTerm(searchQuery)
    if (searchQuery != "") {
      setSelectedType("All")
    }
  }, [searchQuery])


  return (
    <div>
      <div className={`container ${style.top}`}>
        {/* Search Input */}
        <form>
          <input
            type="text"
            placeholder="Search for a recipe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={style.searchInput}
          />
          <button onClick={submitSearch}>O</button>
        </form>


        <span className={style.recipe}>Recipe</span>
        <h2>Embark on a journey</h2>
        <p>With our diverse collection of recipes we have something to satisfy every palate.</p>
        <div className={style.filter}>
          <button onClick={() => changeType("All")} className={selectedType === "All" ? style.active : ""}>All</button>
          {types.map((type, i) => (
            <button key={i} onClick={() => changeType(type)} className={selectedType === type ? style.active : ""}>
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className={`container ${style.grid}`}>
        {recipes.length == 0 ? "No data" : recipes.map(rec => <RecipesCard recipe={rec} key={rec.id} />)}
      </div>


      {selectedType === "All" && searchTerm == "" && (
        <div className={`container ${style.pagination}`}>
          <button style={{ backgroundColor: skip === 0 ? "#e67e22" : "transparent" }} onClick={() => changePage(0)}>1</button>
          <button style={{ backgroundColor: skip === 12 ? "#e67e22" : "transparent" }} onClick={() => changePage(12)}>2</button>
          <button style={{ backgroundColor: skip === 24 ? "#e67e22" : "transparent" }} onClick={() => changePage(24)}>3</button>
          <button style={{ backgroundColor: skip === 36 ? "#e67e22" : "transparent" }} onClick={() => changePage(36)}>4</button>
        </div>
      )}
    </div>
  )
}

export default AllRecipes
